import Logo from "./Logo";
import {
  CheckIcon,
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./icons";
import { navLinks, siteConfig } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

const footerMessage =
  "Halo admin, saya mau pesan Cireng & Dimsum. Mohon info varian, total, dan ongkirnya.";

async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCopyrightYear();
  const address = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

  return (
    <footer className="mt-20 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              Cireng krispi di luar, kenyal di dalam, plus dimsum lembut dan
              gurih. Dibuat fresh setiap hari dengan bahan pilihan dan proses
              yang bersih.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Cireng Abidzar"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Cireng Abidzar"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Tautan footer">
            <h2 className="font-display text-lg font-bold text-cream">
              Jelajahi
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/75 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-bold text-cream">
              Hubungi Kami
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>
                <a
                  href={waLink(footerMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-brand"
                >
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>
                    <span className="block font-semibold text-cream">
                      {siteConfig.whatsappDisplay}
                    </span>
                    Pesan & konsultasi paket
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{address}</span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-cream">
              Pesan Sekarang
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              Lapar? Checkout cepat lewat WhatsApp dan cireng hangat siap
              dikirim ke lokasimu.
            </p>
            <a
              href={waLink(footerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-cream shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
            <CheckIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-sm font-bold text-cream">
              Garansi Ganti Baru
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-cream/75">
              Garansi ganti baru jika produk rusak/basi akibat keterlambatan
              ekspedisi. (S&amp;K Berlaku)
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p>Dibuat dengan ❤️ untuk pecinta cireng di Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
