import Image from "next/image";
import { products, type ProductTag } from "@/lib/products";
import { formatRupiah, orderMessage, waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

const tagStyles: Record<ProductTag, string> = {
  "Best Seller": "bg-amber-400 text-ink",
  Pedas: "bg-chili text-cream",
  Favorit: "bg-brand text-cream",
  Hemat: "bg-emerald-500 text-cream",
};

export default function Catalog() {
  return (
    <section id="katalog" className="bg-cream-200/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Katalog Produk
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Cireng Rujak Krispi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
            Semua varian tersedia per pack isi 5 pcs, dibuat fresh dan higienis.
            Klik &ldquo;Beli via WA&rdquo; untuk langsung checkout lewat
            WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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
                  {product.tag}
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
                  href={waLink(orderMessage(product.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-chili px-5 py-3 text-sm font-bold text-cream shadow-md shadow-chili/25 transition-colors hover:bg-chili-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
