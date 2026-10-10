import Image from "next/image";
import { SparkleIcon, WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const heroMessage =
  "Halo admin, saya mau pesan Cireng Rujak Krispi (Pack isi 5). Mohon info varian, total, dan ongkirnya.";

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
            Cireng Rujak Krispi • Fresh & Higienis
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Cireng Rujak Krispi{" "}
            <span className="bg-gradient-to-r from-brand to-chili bg-clip-text text-transparent">
              Bikin Nagih
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft/90 sm:text-lg lg:mx-0">
            Cireng rujak dengan bumbu gula aren yang legit dan segar. Pilih
            original, isi ayam suwir pedas, atau mozzarella melty. Krispi di
            luar, kenyal di dalam, dibuat fresh setiap hari.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={waLink(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-chili px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-chili/30 transition-transform hover:-translate-y-0.5 hover:bg-chili-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan Sekarang
            </a>
            <a
              href="#katalog"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand bg-transparent px-7 py-3.5 text-base font-bold text-brand-700 transition-colors hover:bg-brand hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              Lihat Menu
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink-soft/80 lg:justify-start">
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Per pack isi 5 pcs
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Bumbu rujak resep rahasia
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

          <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-2xl bg-cream px-3.5 py-2.5 shadow-xl shadow-brand/20 sm:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-chili/10 text-chili">
              <SparkleIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <span className="block text-sm font-extrabold text-ink">
                Best Seller
              </span>
              <span className="block text-[0.7rem] text-ink-soft/70">
                Cireng Original Rujak
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
