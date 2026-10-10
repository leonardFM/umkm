import Image from "next/image";
import { SparkleIcon } from "./icons";

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

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
            <SparkleIcon className="h-3.5 w-3.5 text-chili" />
            Cireng • Dimsum • Jajanan Pasar • Susu Jelly
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Jajanan Pasar, Cireng &amp; Dimsum{" "}
            <span className="bg-gradient-to-r from-brand to-chili bg-clip-text text-transparent">
              Fresh Siap Kirim
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft/90 sm:text-lg lg:mx-0">
            Dibuat fresh setiap hari, kemasan higienis, siap santap atau frozen.
          </p>

          <div className="mt-7 flex justify-center lg:justify-start">
            <a
              href="#katalog"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-bold text-cream shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Lihat Menu &amp; Pesan
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream bg-cream-200 shadow-2xl shadow-brand/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/umkm/img/hero-cireng.jpg"
                alt="Aneka jajanan Cireng Abidzar: cireng krispi, dimsum, dan susu jelly siap kirim"
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
