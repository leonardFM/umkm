import { StarIcon } from "./icons";

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  product: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sinta Ayu",
    location: "Jakarta Selatan",
    rating: 5,
    quote:
      "Isi ayam suwirnya banyak dan pedasnya nampol! Cirengnya krispi walau sudah agak dingin. Langsung repeat order 3 pack.",
    product: "Cireng Isi Ayam Suwir Pedas",
  },
  {
    name: "Bagas Pratama",
    location: "Bandung",
    rating: 5,
    quote:
      "Saus mentainya creamy dan gurih banget, dimsumnya lembut. Stok frozen di rumah tinggal kukus sebentar, rasanya kayak baru dibuat.",
    product: "Dimsum Mentai Lumer",
  },
  {
    name: "Mega Larasati",
    location: "Surabaya",
    rating: 5,
    quote:
      "Mozzarella-nya melar sempurna, anak-anak suka! Dikemas rapi, sampai rumah masih beku. Recommended banget.",
    product: "Cireng Mozzarella Melt",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-ink py-16 text-cream sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Testimoni Pelanggan
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
            Kata Mereka yang Sudah Coba
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Pengalaman nyata pelanggan Cireng Abidzar setelah mencicipi
            cireng krispi &amp; dimsum kami.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              <div
                className="flex text-amber-400"
                aria-label={`Rating ${t.rating} dari 5`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-cream/10 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-chili font-display text-sm font-extrabold text-cream">
                  {initials(t.name)}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-cream">
                    {t.name}
                  </span>
                  <span className="block text-xs text-cream/60">
                    {t.location} • {t.product}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
