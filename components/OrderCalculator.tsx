"use client";

import { useMemo, useState } from "react";
import { packOptions } from "@/lib/products";
import { formatRupiah, orderMessage, waLink } from "@/lib/whatsapp";
import { CheckIcon, SparkleIcon, WhatsAppIcon } from "./icons";

const MIN_QTY = 1;
const MAX_QTY = 99;

export default function OrderCalculator() {
  const [selectedId, setSelectedId] = useState(packOptions[0].id);
  const [qty, setQty] = useState(1);

  const selected = useMemo(
    () => packOptions.find((p) => p.id === selectedId) ?? packOptions[0],
    [selectedId],
  );

  const subtotal = selected.price * qty;
  const compareTotal = (selected.compareAt ?? selected.price) * qty;
  const savings = compareTotal - subtotal;

  const message = useMemo(
    () => orderMessage(selected.name, qty),
    [selected.name, qty],
  );

  const updateQty = (next: number) => {
    if (Number.isNaN(next)) return;
    setQty(Math.min(MAX_QTY, Math.max(MIN_QTY, Math.round(next))));
  };

  return (
    <section id="pesan" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Pesan Cepat
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Hitung Estimasi Pesananmu
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
          Pilih paket, atur jumlah pack, dan lihat total estimasi secara
          otomatis sebelum lanjut checkout ke WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <fieldset>
            <legend className="text-sm font-bold uppercase tracking-wide text-ink-soft/70">
              1. Pilih Paket
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {packOptions.map((option) => {
                const active = option.id === selectedId;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedId(option.id)}
                    aria-pressed={active}
                    className={`relative flex h-full flex-col items-start rounded-2xl border-2 p-4 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                      active
                        ? "border-brand bg-brand/10 shadow-md shadow-brand/15"
                        : "border-brand/15 bg-cream hover:border-brand/40"
                    }`}
                  >
                    {option.badge && (
                      <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-chili px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-cream shadow">
                        <SparkleIcon className="h-3 w-3" />
                        {option.badge}
                      </span>
                    )}
                    <span className="flex w-full items-start justify-between gap-2">
                      <span className="font-display text-base font-bold leading-snug text-ink">
                        {option.name}
                      </span>
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          active
                            ? "border-brand bg-brand text-cream"
                            : "border-brand/30 text-transparent"
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </span>
                    </span>
                    <span className="mt-1 text-xs leading-relaxed text-ink-soft/80">
                      {option.detail}
                    </span>
                    <span className="mt-3 flex items-baseline gap-2">
                      <span className="font-display text-lg font-extrabold text-brand-700">
                        {formatRupiah(option.price)}
                      </span>
                      {option.compareAt && (
                        <span className="text-xs font-medium text-ink-soft/50 line-through">
                          {formatRupiah(option.compareAt)}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-8">
            <span className="text-sm font-bold uppercase tracking-wide text-ink-soft/70">
              2. Jumlah Pack
            </span>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center rounded-full border-2 border-brand/20 bg-cream p-1">
                <button
                  type="button"
                  onClick={() => updateQty(qty - 1)}
                  disabled={qty <= MIN_QTY}
                  aria-label="Kurangi jumlah pack"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-brand-700 transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  &minus;
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  min={MIN_QTY}
                  max={MAX_QTY}
                  value={qty}
                  onChange={(e) => updateQty(Number(e.target.value))}
                  aria-label="Jumlah pack"
                  className="w-14 bg-transparent text-center font-display text-lg font-extrabold text-ink focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  onClick={() => updateQty(qty + 1)}
                  disabled={qty >= MAX_QTY}
                  aria-label="Tambah jumlah pack"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-brand-700 transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  +
                </button>
              </div>
              <span className="text-sm font-medium text-ink-soft/75">
                pack
              </span>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-24 rounded-3xl border border-brand/15 bg-gradient-to-b from-cream-100 to-cream-200/70 p-6 shadow-lg shadow-brand/10">
            <h3 className="font-display text-lg font-extrabold text-ink">
              Ringkasan Pesanan
            </h3>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-ink-soft/75">Paket</dt>
                <dd className="max-w-[60%] text-right font-semibold text-ink">
                  {selected.name}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-ink-soft/75">Jumlah</dt>
                <dd className="font-semibold text-ink">{qty} pack</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-ink-soft/75">Harga / pack</dt>
                <dd className="font-semibold text-ink">
                  {formatRupiah(selected.price)}
                </dd>
              </div>
              {savings > 0 && (
                <div className="flex items-center justify-between gap-3 text-emerald-700">
                  <dt className="font-medium">Hemat</dt>
                  <dd className="font-bold">- {formatRupiah(savings)}</dd>
                </div>
              )}
            </dl>

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
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-chili px-5 py-3.5 text-base font-bold text-cream shadow-lg shadow-chili/30 transition-transform hover:-translate-y-0.5 hover:bg-chili-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
