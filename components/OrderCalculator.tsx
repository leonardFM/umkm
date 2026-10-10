"use client";

import { useMemo, useState } from "react";
import { categories, packOptions } from "@/lib/products";
import {
  formatRupiah,
  multiOrderMessage,
  waLink,
  type OrderItem,
} from "@/lib/whatsapp";
import { SparkleIcon, WhatsAppIcon } from "./icons";

const MIN_QTY = 0;
const MAX_QTY = 99;

function initQuantities(): Record<string, number> {
  const initial: Record<string, number> = {};
  for (const option of packOptions) initial[option.id] = 0;
  initial[packOptions[0].id] = 1;
  return initial;
}

export default function OrderCalculator() {
  const [quantities, setQuantities] =
    useState<Record<string, number>>(initQuantities);

  const updateQty = (id: string, next: number) => {
    if (Number.isNaN(next)) return;
    const clamped = Math.min(MAX_QTY, Math.max(MIN_QTY, Math.round(next)));
    setQuantities((prev) => ({ ...prev, [id]: clamped }));
  };

  const selectedItems: OrderItem[] = useMemo(
    () =>
      packOptions
        .filter((option) => (quantities[option.id] ?? 0) > 0)
        .map((option) => ({
          name: option.name,
          isi: option.isi,
          qty: quantities[option.id],
        })),
    [quantities],
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
    return { totalQty, subtotal, savings: compareTotal - subtotal };
  }, [quantities]);

  const message = useMemo(
    () => multiOrderMessage(selectedItems),
    [selectedItems],
  );

  const hasSelection = totalQty > 0;

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
          Bisa pesan lebih dari satu produk sekaligus. Atur jumlah pack tiap
          varian, lihat total estimasi, lalu checkout ke WhatsApp.
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
                  {category === "Cireng" ? "Cireng Rujak Krispi" : "Dimsum"}
                </legend>
                <div className="mt-4 space-y-3">
                  {options.map((option) => {
                    const qty = quantities[option.id] ?? 0;
                    const active = qty > 0;
                    return (
                      <div
                        key={option.id}
                        className={`relative flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 p-4 transition-all ${
                          active
                            ? "border-brand bg-brand/10 shadow-md shadow-brand/15"
                            : "border-brand/15 bg-cream"
                        }`}
                      >
                        {option.badge && (
                          <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-chili px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-cream shadow">
                            <SparkleIcon className="h-3 w-3" />
                            {option.badge}
                          </span>
                        )}
                        <div className="min-w-0">
                          <p className="font-display text-base font-bold leading-snug text-ink">
                            {option.name}
                          </p>
                          <p className="mt-0.5 text-xs text-ink-soft/80">
                            {option.detail}
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

                        <div className="flex items-center rounded-full border-2 border-brand/20 bg-cream p-1">
                          <button
                            type="button"
                            onClick={() => updateQty(option.id, qty - 1)}
                            disabled={qty <= MIN_QTY}
                            aria-label={`Kurangi ${option.name}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-brand-700 transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                          >
                            &minus;
                          </button>
                          <input
                            type="number"
                            inputMode="numeric"
                            min={MIN_QTY}
                            max={MAX_QTY}
                            value={qty}
                            onChange={(e) =>
                              updateQty(option.id, Number(e.target.value))
                            }
                            aria-label={`Jumlah pack ${option.name}`}
                            className="w-12 bg-transparent text-center font-display text-base font-extrabold text-ink focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => updateQty(option.id, qty + 1)}
                            disabled={qty >= MAX_QTY}
                            aria-label={`Tambah ${option.name}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-brand-700 transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </fieldset>
            );
          })}
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-24 rounded-3xl border border-brand/15 bg-gradient-to-b from-cream-100 to-cream-200/70 p-6 shadow-lg shadow-brand/10">
            <h3 className="font-display text-lg font-extrabold text-ink">
              Ringkasan Pesanan
            </h3>

            {hasSelection ? (
              <ul className="mt-5 space-y-3 text-sm">
                {selectedItems.map((item) => {
                  const option = packOptions.find((o) => o.name === item.name)!;
                  return (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-3"
                    >
                      <span className="text-ink-soft/80">
                        {item.name}
                        <span className="ml-1 text-ink-soft/55">
                          x{item.qty}
                        </span>
                      </span>
                      <span className="shrink-0 font-semibold text-ink">
                        {formatRupiah(option.price * item.qty)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-5 rounded-2xl bg-cream/70 px-4 py-6 text-center text-sm text-ink-soft/70">
                Belum ada produk dipilih. Tambahkan jumlah pack pada varian di
                samping.
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
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-bold shadow-lg transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasSelection
                  ? "bg-chili text-cream shadow-chili/30 hover:-translate-y-0.5 hover:bg-chili-700 focus-visible:ring-chili"
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
