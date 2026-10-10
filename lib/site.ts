export const siteConfig = {
  name: "Cireng Abidzar",
  legalName: "Cireng Abidzar",
  tagline: "Cireng Isi & Dimsum Krispi Outside, Chewy Inside",
  description:
    "Jual aneka Cireng Isi (ayam suwir pedas, mozzarella, sosis, bakso, abon) dan Dimsum (ayam, mentai, mozzarella, goreng crispy) frozen siap goreng/kukus. 100% bahan alami & halal. Pesan mudah via WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cireng-abidzar.vercel.app",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
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
