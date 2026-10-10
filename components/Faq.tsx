import { ChevronDownIcon } from "./icons";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Pertanyaan Umum
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Masih Ada yang Bingung?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft/85">
          Ini jawaban untuk pertanyaan yang paling sering ditanyakan pelanggan.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-brand/15 bg-gradient-to-r from-cream-100 to-cream-200/70 px-5 py-5 text-center shadow-sm">
        <p className="text-sm font-semibold text-ink-soft">
          Terima pesanan untuk{" "}
          <span className="font-bold text-brand-700">Arisan</span>,{" "}
          <span className="font-bold text-brand-700">Acara Kantor</span>,{" "}
          <span className="font-bold text-brand-700">Pengajian</span>, &amp;{" "}
          <span className="font-bold text-brand-700">
            Stok Freezer Rumah
          </span>
          .
        </p>
        <p className="mt-2 text-xs text-ink-soft/70">
          Pengiriman serentak jam 16.00 WIB untuk seluruh area Jabodetabek.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {faqs.map((item, index) => (
          <details
            key={item.question}
            name="faq"
            open={index === 0}
            className="group overflow-hidden rounded-2xl border border-brand/15 bg-cream-100 transition-colors open:border-brand/35 open:bg-cream"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold text-ink marker:content-none hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-5 text-sm leading-relaxed text-ink-soft/90">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
