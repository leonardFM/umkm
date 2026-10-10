"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { addOns, categories, packOptions } from "@/lib/products";
import { formatRupiah, multiOrderMessage, waLink } from "@/lib/whatsapp";
import { CheckIcon, WhatsAppIcon } from "./icons";

const MIN_QTY = 0;
const MAX_QTY = 99;

function initQuantities(): Record<string, number> {
  const initial: Record<string, number> = {};
  for (const option of packOptions) initial[option.id] = 0;
  initial[packOptions[0].id] = 1;
  return initial;
}

function initAddOns(): Record<string, number> {
  const initial: Record<string, number> = {};
  for (const item of addOns) initial[item.id] = 0;
  return initial;
}

type StepperProps = {
  value: number;
  label: string;
  onChange: (next: number) => void;
};

function Stepper({ value, label, onChange }: StepperProps) {
  const clamp = (next: number) =>
    Math.min(MAX_QTY, Math.max(MIN_QTY, Math.round(next)));
  return (
    <div className="flex items-center rounded-full border-2 border-brand/20 bg-cream p-1">
      <button
        type="button"
        onClick={() => onChange(clamp(value - 1))}
        disabled={value <= MIN_QTY}
        aria-label={`Kurangi ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-brand-700 transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        &minus;
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={MIN_QTY}
        max={MAX_QTY}
        value={value}
        onChange={(e) => {
          const next = Number(e.target.value);
          if (!Number.isNaN(next)) onChange(clamp(next));
        }}
        aria-label={`Jumlah ${label}`}
        className="w-12 bg-transparent text-center font-display text-base font-extrabold text-ink focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => onChange(clamp(value + 1))}
        disabled={value >= MAX_QTY}
        aria-label={`Tambah ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-brand-700 transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        +
      </button>
    </div>
  );
}

export default function OrderCalculator() {
  const [quantities, setQuantities] =
    useState<Record<string, number>>(initQuantities);
  const [extras, setExtras] = useState<Record<string, number>>(initAddOns);

  const setQty = (id: string, next: number) =>
    setQuantities((prev) => ({ ...prev, [id]: next }));
  const setExtraQty = (id: string, next: number) =>
    setExtras((prev) => ({ ...prev, [id]: next }));

  const selectedProducts = useMemo(
    () => packOptions.filter((option) => (quantities[option.id] ?? 0) > 0),
    [quantities],
  );
  const selectedAddOns = useMemo(
    () => addOns.filter((item) => (extras[item.id] ?? 0) > 0),
    [extras],
  );

  const { totalQty, subtotal, savings } = useMemo(() => {
    let totalQty = 0;
    let subtotal = 0;
    let compareTotal = 0;
    for (const option of packOptions) {
      const qty = quantities[option.id] ?? 0;
      if (qty <= 0) continue;
      totalQty += qty;
      subtotal += option.price * qty;
      compareTotal += (option.compareAt ?? option.price) * qty;
    }
    for (const item of addOns) {
      const qty = extras[item.id] ?? 0;
      if (qty <= 0) continue;
      subtotal += item.price * qty;
      compareTotal += item.price * qty;
    }
    return { totalQty, subtotal, savings: compareTotal - subtotal };
  }, [quantities, extras]);

  const message = useMemo(() => {
    const items = [
      ...selectedProducts.map((option) => ({
        name: option.name,
        isi: option.isi,
        qty: quantities[option.id],
      })),
      ...selectedAddOns.map((item) => ({
        name: item.name,
        qty: extras[item.id],
      })),
    ];
    return multiOrderMessage(items);
  }, [selectedProducts, selectedAddOns, quantities, extras]);

  const hasSelection = totalQty > 0 || selectedAddOns.length > 0;

  return (
    <section
      id="pesan"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Pesan Cepat
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Susun Pesananmu
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
          Bisa pesan lebih dari satu produk sekaligus. Tap tombol + / &minus;
          untuk atur jumlah pack tiap varian, lalu checkout ke WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          {categories.map((category) => {
            const options = packOptions.filter(
              (option) => option.category === category,
            );
            return (
              <fieldset key={category}>
                <legend className="text-sm font-bold uppercase tracking-wide text-ink-soft/70">
                  {category === "Cireng" ? "Cireng" : "Dimsum"}
                </legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {options.map((option) => {
                    const qty = quantities[option.id] ?? 0;
                    const active = qty > 0;
                    return (
                      <div
                        key={option.id}
                        className={`relative flex flex-col rounded-2xl border-2 p-3 transition-all ${
                          active
                            ? "border-brand bg-brand/10 shadow-md shadow-brand/15"
                            : "border-brand/15 bg-cream"
                        }`}
                      >
                        <div className="flex gap-3">
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                            <Image
                              src={option.image}
                              alt={option.name}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-display text-sm font-bold leading-snug text-ink">
                              {option.name}
                            </p>
                            <p className="mt-0.5 text-[0.7rem] text-ink-soft/75">
                              {option.detail}
                            </p>
                            <p className="mt-0.5 inline-flex items-center gap-1 text-[0.65rem] font-semibold text-emerald-700">
                              <CheckIcon className="h-3 w-3" />
                              {option.includes}
                            </p>
                            <p className="mt-1 flex items-baseline gap-2">
                              <span className="font-display text-base font-extrabold text-brand-700">
                                {formatRupiah(option.price)}
                              </span>
                              {option.compareAt && (
                                <span className="text-xs font-medium text-ink-soft/50 line-through">
                                  {formatRupiah(option.compareAt)}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft/60">
                            Jumlah
                          </span>
                          <Stepper
                            value={qty}
                            label={option.name}
                            onChange={(next) => setQty(option.id, next)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </fieldset>
            );
          })}

          <fieldset>
            <legend className="text-sm font-bold uppercase tracking-wide text-ink-soft/70">
              Tambahan (Opsional)
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {addOns.map((item) => {
                const qty = extras[item.id] ?? 0;
                const active = qty > 0;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between gap-3 rounded-2xl border-2 p-3 transition-all ${
                      active
                        ? "border-brand bg-brand/10 shadow-md shadow-brand/15"
                        : "border-brand/15 bg-cream"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold leading-snug text-ink">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[0.7rem] text-ink-soft/75">
                        {item.detail}
                      </p>
                      <p className="mt-1 font-display text-sm font-extrabold text-brand-700">
                        + {formatRupiah(item.price)}
                      </p>
                    </div>
                    <Stepper
                      value={qty}
                      label={item.name}
                      onChange={(next) => setExtraQty(item.id, next)}
                    />
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-28 rounded-3xl border border-brand/15 bg-gradient-to-b from-cream-100 to-cream-200/70 p-6 shadow-lg shadow-brand/10">
            <h3 className="font-display text-lg font-extrabold text-ink">
              Ringkasan Pesanan
            </h3>

            {hasSelection ? (
              <ul className="mt-5 space-y-3 text-sm">
                {selectedProducts.map((option) => (
                  <li
                    key={option.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <span className="text-ink-soft/80">
                      {option.name}
                      <span className="ml-1 text-ink-soft/55">
                        x{quantities[option.id]}
                      </span>
                    </span>
                    <span className="shrink-0 font-semibold text-ink">
                      {formatRupiah(option.price * quantities[option.id])}
                    </span>
                  </li>
                ))}
                {selectedAddOns.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <span className="text-ink-soft/80">
                      {item.name}
                      <span className="ml-1 text-ink-soft/55">
                        x{extras[item.id]}
                      </span>
                    </span>
                    <span className="shrink-0 font-semibold text-ink">
                      {formatRupiah(item.price * extras[item.id])}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 rounded-2xl bg-cream/70 px-4 py-6 text-center text-sm text-ink-soft/70">
                Belum ada produk dipilih. Tap tombol + pada varian di samping.
              </p>
            )}

            {hasSelection && (
              <dl className="mt-5 space-y-2 border-t border-brand/15 pt-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink-soft/75">Total item</dt>
                  <dd className="font-semibold text-ink">{totalQty} pack</dd>
                </div>
                {savings > 0 && (
                  <div className="flex items-center justify-between gap-3 text-emerald-700">
                    <dt className="font-medium">Hemat</dt>
                    <dd className="font-bold">- {formatRupiah(savings)}</dd>
                  </div>
                )}
              </dl>
            )}

            <div className="mt-5 flex items-end justify-between border-t border-brand/15 pt-5">
              <span className="text-sm font-bold uppercase tracking-wide text-ink-soft/70">
                Total Estimasi
              </span>
              <span className="font-display text-2xl font-extrabold text-chili">
                {formatRupiah(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-right text-[0.7rem] text-ink-soft/60">
              *Belum termasuk ongkir
            </p>

            <a
              href={hasSelection ? waLink(message) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!hasSelection}
              tabIndex={hasSelection ? undefined : -1}
              className={`mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasSelection
                  ? "bg-wa text-white shadow-lg shadow-wa/40 hover:-translate-y-0.5 hover:bg-wa-600 hover:shadow-xl hover:shadow-wa/50 focus-visible:ring-wa-700"
                  : "pointer-events-none cursor-not-allowed bg-ink/15 text-ink-soft/60 shadow-none"
              }`}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Checkout via WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-ink-soft/65">
              Admin akan konfirmasi ketersediaan & ongkir secara langsung.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
