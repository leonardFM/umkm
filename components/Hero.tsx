import Image from "next/image";
import { CheckIcon, SparkleIcon, WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const heroMessage =
  "Halo admin, saya mau pesan Cireng & Dimsum. Mohon info varian, total, dan ongkirnya.";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-cream-200/70 via-cream to-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-chili/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
            <SparkleIcon className="h-3.5 w-3.5 text-chili" />
            Cireng &amp; Dimsum • Fresh &amp; Higienis
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Cireng &amp; Dimsum Krispi{" — "}
            <span className="bg-gradient-to-r from-brand to-chili bg-clip-text text-transparent">
              Gurih, Lezat, Bikin Nagih
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft/90 sm:text-lg lg:mx-0">
            Nikmati aneka varian cireng krispi (Original, Isi Ayam Pedas,
            Mozzarella Melt) dan dimsum premium yang lembut. Dibuat fresh
            setiap hari dengan kemasan vakum higienis.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={waLink(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-wa/40 ring-1 ring-white/40 transition-all hover:-translate-y-0.5 hover:bg-wa-600 hover:shadow-xl hover:shadow-wa/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-700 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand bg-transparent px-7 py-3.5 text-base font-bold text-brand-700 transition-colors hover:bg-brand hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              Lihat Menu
            </a>
          </div>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-800">
            <CheckIcon className="h-4 w-4 text-emerald-600" />
            Kemasan Vakum Higienis • Tahan di Ekspedisi
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink-soft/80 lg:justify-start">
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Cireng isi 5 pcs / pack
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Dimsum isi 6 pcs / pack
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-chili" />
              Order mudah via WhatsApp
            </li>
          </ul>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream bg-cream-200 shadow-2xl shadow-brand/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/umkm/img/hero-cireng.jpg"
                alt="Cireng rujak krispi Cireng Abidzar siap disajikan dengan bumbu rujak gula aren"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
