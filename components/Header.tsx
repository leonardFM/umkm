"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { navLinks, siteConfig } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

const heroMessage =
  "Halo admin, saya mau pesan Cireng Rujak Krispi / Dimsum. Mohon info varian, total, dan ongkirnya.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-brand/10 bg-cream/90 shadow-[0_8px_30px_-18px_rgba(124,45,18,0.55)] backdrop-blur-md"
          : "border-transparent bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        <a href="#beranda" className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-brand/10 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(heroMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-chili px-4 py-2.5 text-sm font-bold text-cream shadow-md shadow-chili/30 transition-transform hover:-translate-y-0.5 hover:bg-chili-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-chili sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan via WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-cream text-ink-soft transition-colors hover:bg-brand/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${
          open ? "block" : "hidden"
        } border-t border-brand/10 bg-cream/98 backdrop-blur-md`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Navigasi mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-ink-soft transition-colors hover:bg-brand/10 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink(heroMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-chili px-4 py-3.5 text-base font-bold text-cream shadow-md shadow-chili/30"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
          <p className="mt-1 px-4 text-center text-xs font-medium text-ink-soft/70">
            {siteConfig.hours}
          </p>
        </nav>
      </div>
    </header>
  );
}
