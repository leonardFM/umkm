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
  tone: string;
};

const features: Feature[] = [
  {
    icon: LeafIcon,
    title: "Higienis & Fresh",
    tone: "from-emerald-500 to-green-600",
  },
  {
    icon: DropletIcon,
    title: "Bumbu Resep Rahasia",
    tone: "from-brand to-chili",
  },
  {
    icon: CrispyIcon,
    title: "Krispi & Lembut",
    tone: "from-amber-500 to-brand",
  },
  {
    icon: SnowflakeIcon,
    title: "Siap Saji / Frozen",
    tone: "from-sky-500 to-cyan-600",
  },
];

export default function Features() {
  return (
    <section
      id="keunggulan"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Kenapa Cireng Abidzar?
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {features.map(({ icon: Icon, title, tone }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3 rounded-2xl border border-brand/10 bg-cream-100 px-4 py-5 text-center shadow-sm"
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-white shadow-md`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-bold leading-snug text-ink">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
