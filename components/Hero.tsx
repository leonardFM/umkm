import Image from "next/image";
import { SparkleIcon, StarIcon, WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const heroMessage =
  "Halo admin Cireng Abidzar, saya ingin pesan Cireng Isi / Dimsum. Boleh dibantu info paket dan harganya?";

const stats = [
  { value: "4.9/5", label: "1.200+ ulasan" },
  { value: "15.000+", label: "pack terjual" },
  { value: "100%", label: "halal & alami" },
];

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
            Cireng Isi & Dimsum • Fresh Setiap Hari
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Cireng Isi & Dimsum{" "}
            <span className="bg-gradient-to-r from-brand to-chili bg-clip-text text-transparent">
              Krispi Outside
            </span>
            , Chewy Inside
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft/90 sm:text-lg lg:mx-0">
            Sensasi gurih yang bikin nagih! Aneka cireng isi — ayam suwir
            pedas, mozzarella lumer, sosis, bakso, abon — plus dimsum premium
            favorit. Renyah di luar, kenyal di dalam, 100% bahan alami & halal.
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

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-brand/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium text-ink-soft/75 sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream bg-cream-200 shadow-2xl shadow-brand/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/hero-cireng.png"
                alt="Aneka cireng isi dan dimsum hangat krispi siap goreng dan kukus khas Cireng Abidzar"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-2xl bg-cream px-3.5 py-2.5 shadow-xl shadow-brand/20 sm:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-chili/10 text-chili">
              <StarIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <span className="block text-sm font-extrabold text-ink">
                Best Seller
              </span>
              <span className="block text-[0.7rem] text-ink-soft/70">
                Cireng isi favorit
              </span>
            </div>
          </div>

          <div className="absolute -bottom-4 right-1 flex items-center gap-2 rounded-2xl bg-cream px-3.5 py-2.5 shadow-xl shadow-brand/20 sm:-right-4">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="text-xs font-bold text-ink">
              4.9 • Suka banget!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
