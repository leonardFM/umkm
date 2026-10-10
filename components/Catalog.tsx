"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  products,
  categories,
  type ProductCategory,
  type ProductTag,
} from "@/lib/products";
import { formatRupiah, multiOrderMessage, waLink } from "@/lib/whatsapp";
import { CheckIcon, WhatsAppIcon } from "./icons";

const tagStyles: Record<ProductTag, string> = {
  "Best Seller": "bg-amber-400 text-ink",
  Pedas: "bg-chili text-cream",
  Favorit: "bg-brand text-cream",
  Hemat: "bg-emerald-500 text-cream",
};

const categoryLabel: Record<ProductCategory, string> = {
  Cireng: "Cireng Rujak",
  Dimsum: "Dimsum",
};

type Filter = "Semua" | ProductCategory;
const filters: Filter[] = ["Semua", ...categories];

export default function Catalog() {
  const [active, setActive] = useState<Filter>("Semua");

  const visible = useMemo(
    () =>
      active === "Semua"
        ? products
        : products.filter((p) => p.category === active),
    [active],
  );

  return (
    <section id="katalog" className="bg-cream-200/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Katalog Produk
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Cireng Rujak Krispi &amp; Dimsum
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
            Dibuat fresh dan higienis, siap goreng atau kukus. Klik
            &ldquo;Beli via WA&rdquo; untuk langsung checkout lewat WhatsApp.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter kategori produk"
        >
          {filters.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                  isActive
                    ? "bg-brand text-cream shadow-md shadow-brand/25"
                    : "border border-brand/20 bg-cream text-ink-soft hover:border-brand/50 hover:text-brand-700"
                }`}
              >
                {filter === "Semua" ? "Semua" : categoryLabel[filter]}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-brand/10 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/15"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-md ${
                    tagStyles[product.tag]
                  }`}
                >
                  {product.badge}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-cream shadow-md backdrop-blur">
                  {categoryLabel[product.category]}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-md backdrop-blur">
                  {product.isi}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-xs font-semibold text-brand">
                  {product.highlight}
                </p>
                <p className="mt-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-semibold text-emerald-800 ring-1 ring-emerald-500/20">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-600" />
                    {product.includes}
                  </span>
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft/85">
                  {product.description}
                </p>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-brand/10 pt-4">
                  <div>
                    <span className="block text-[0.7rem] font-medium uppercase tracking-wide text-ink-soft/60">
                      Harga mulai
                    </span>
                    <span className="font-display text-xl font-extrabold text-ink">
                      {formatRupiah(product.price)}
                    </span>
                    <span className="ml-1 text-xs font-medium text-ink-soft/70">
                      /{product.unit}
                    </span>
                    {product.compareAt && (
                      <span className="ml-2 text-xs font-medium text-ink-soft/50 line-through">
                        {formatRupiah(product.compareAt)}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={waLink(
                    multiOrderMessage([
                      { name: product.name, isi: product.isi, qty: 1 },
                    ]),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-wa px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-wa/30 transition-colors hover:bg-wa-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-700 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Beli via WA
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
