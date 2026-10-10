export const siteConfig = {
  name: "Cireng Abidzar",
  legalName: "Cireng Abidzar",
  tagline: "Cireng & Dimsum — Krispi di Luar, Kenyal di Dalam",
  description:
    "Jual aneka cireng krispi (Original, Isi Ayam Pedas, Mozzarella Melt) dan dimsum premium (ayam, mentai, mozzarella, goreng crispy). Dibuat fresh setiap hari dengan kemasan vakum higienis. Pesan mudah via WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cireng-abidzar.vercel.app",
  whatsapp: "62895613163308",
  whatsappDisplay: "+62 895-6131-63308",
  address: {
    street: "Jl. Rujak Gurih No. 12, Sukajadi",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "40162",
    country: "ID",
  },
  hours: "Setiap hari, 08.00 - 21.00 WIB",
  instagram: "https://instagram.com/cirengabidzar",
  tiktok: "https://tiktok.com/@cirengabidzar",
  email: "halo@cirengabidzar.id",
} as const;

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Katalog", href: "#katalog" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const;
