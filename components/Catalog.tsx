"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  products,
  productGroups,
  groupOf,
  type ProductGroup,
  type ProductTag,
} from "@/lib/products";
import { formatRupiah, orderMessage, waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

const tagStyles: Record<ProductTag, string> = {
  "Best Seller": "bg-amber-400 text-ink",
  Pedas: "bg-chili text-cream",
  Favorit: "bg-brand text-cream",
  Hemat: "bg-emerald-500 text-cream",
};

type Filter = "Semua" | ProductGroup;
const filters: Filter[] = ["Semua", ...productGroups.map((group) => group.id)];

function groupLabel(filter: Filter): string {
  if (filter === "Semua") return "Semua";
  const meta = productGroups.find((group) => group.id === filter);
  return meta ? `${meta.emoji} ${meta.label}` : filter;
}

export default function Catalog() {
  const [active, setActive] = useState<Filter>("Semua");

  const visible = useMemo(() => {
    if (active !== "Semua") {
      return products.filter((p) => groupOf(p.category) === active);
    }
    return [...products].sort(
      (a, b) =>
        productGroups.findIndex((g) => g.id === groupOf(a.category)) -
        productGroups.findIndex((g) => g.id === groupOf(b.category)),
    );
  }, [active]);

  return (
    <section id="katalog" className="bg-cream-200/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Katalog Produk
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Katalog Cireng, Dimsum, Jajanan Pasar &amp; Minuman
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
            Pilih paket combo, cireng &amp; dimsum, jajanan pasar, atau susu
            jelly favoritmu. Dibuat fresh dan higienis setiap hari &mdash; klik
            &ldquo;Beli via WA&rdquo; untuk langsung checkout.
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
                {groupLabel(filter)}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <article
              key={product.id}
              className={`group flex flex-col overflow-hidden rounded-3xl border bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/15 ${
                groupOf(product.category) === "Paket"
                  ? "border-brand/40 shadow-md shadow-brand/10 ring-2 ring-brand/20"
                  : "border-brand/10"
              }`}
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
                <span className="absolute bottom-4 right-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-md backdrop-blur">
                  {product.isi}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brand">
                  {product.highlight}
                </p>

                <div className="mt-auto pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xl font-extrabold text-ink">
                      {formatRupiah(product.price)}
                    </span>
                    <span className="text-xs font-medium text-ink-soft/70">
                      /{product.unit}
                    </span>
                    {product.compareAt && (
                      <span className="text-xs font-medium text-ink-soft/50 line-through">
                        {formatRupiah(product.compareAt)}
                      </span>
                    )}
                  </div>

                  <a
                    href={waLink(
                      orderMessage(
                        product.name,
                        1,
                        product.unit,
                        product.composition,
                      ),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-bold text-white shadow-md shadow-wa/30 transition-colors hover:bg-wa-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-700 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Beli via WA
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
