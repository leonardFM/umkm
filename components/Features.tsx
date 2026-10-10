import type { ComponentType, SVGProps } from "react";
import {
  CrispyIcon,
  DropletIcon,
  LeafIcon,
  SnowflakeIcon,
} from "./icons";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  tone: string;
};

const features: Feature[] = [
  {
    icon: LeafIcon,
    title: "Diproses Bersih & Higienis",
    description:
      "Dibuat fresh dengan bahan pilihan dan diproses di dapur yang bersih serta higienis, tanpa pengawet dan tanpa MSG berlebih.",
    tone: "from-emerald-500 to-green-600",
  },
  {
    icon: DropletIcon,
    title: "Bumbu Rujak Resep Rahasia",
    description:
      "Saus rujak gula aren yang legit, pedas, dan segar — resep khas yang bikin cireng makin nagih.",
    tone: "from-brand to-chili",
  },
  {
    icon: CrispyIcon,
    title: "Ekstra Krispi & Tahan Lama",
    description:
      "Teknik penggorengan khusus membuat cireng renyah lebih lama, bahkan tetap enak saat sudah dingin.",
    tone: "from-amber-500 to-brand",
  },
  {
    icon: SnowflakeIcon,
    title: "Fresh, Siap Saji, atau Frozen",
    description:
      "Pilih dikirim hangat siap santap atau frozen yang tahan hingga 1 bulan di freezer rumahmu.",
    tone: "from-sky-500 to-cyan-600",
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Kenapa Cireng Abidzar?
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Gurih, Pedas, dan Bikin Nagih
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
          Bukan cireng biasa. Setiap pack dibuat dengan standar rasa dan
          kualitas yang bikin pelanggan balik lagi.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description, tone }) => (
          <article
            key={title}
            className="group relative flex flex-col rounded-3xl border border-brand/10 bg-cream-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
          >
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-white shadow-md`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/85">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
