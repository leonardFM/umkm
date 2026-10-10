export type ProductTag = "Best Seller" | "Pedas" | "Favorit" | "Hemat";

export type Product = {
  id: string;
  name: string;
  tag: ProductTag;
  tagTone: "amber" | "red" | "orange" | "emerald";
  description: string;
  highlight: string;
  price: number;
  compareAt?: number;
  unit: string;
  isi: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "cireng-original",
    name: "Cireng Original Bumbu Rujak",
    tag: "Best Seller",
    tagTone: "amber",
    description:
      "Cireng rujak krispi dengan bumbu rujak gula aren yang legit, pedas, dan segar. Renyah di luar, kenyal di dalam.",
    highlight: "Bumbu rujak resep rahasia",
    price: 15000,
    unit: "pack",
    isi: "isi 5 pcs",
    image: "/umkm/img/cireng-original.jpg",
    imageAlt:
      "Cireng original bumbu rujak krispi dengan saus rujak gula aren khas Cireng Abidzar",
  },
  {
    id: "cireng-ayam",
    name: "Cireng Isi Ayam Suwir Pedas",
    tag: "Pedas",
    tagTone: "red",
    description:
      "Isian ayam suwir berbumbu cabai yang melimpah, pedas nampol dengan aroma bawang yang menggoda.",
    highlight: "Isian ayam melimpah & pedas",
    price: 20000,
    unit: "pack",
    isi: "isi 5 pcs",
    image: "/umkm/img/cireng-ayam.jpg",
    imageAlt:
      "Cireng isi ayam suwir pedas dengan isian cabai merah melimpah khas Cireng Abidzar",
  },
  {
    id: "cireng-mozarella",
    name: "Cireng Mozzarella Melt",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Keju mozzarella premium yang meleleh kenyal saat digigit. Camilan favorit yang bikin nagih!",
    highlight: "Mozzarella premium meleleh",
    price: 25000,
    unit: "pack",
    isi: "isi 5 pcs",
    image: "/umkm/img/cireng-mozarella.jpg",
    imageAlt:
      "Cireng mozzarella melt dengan keju premium yang meleleh kenyal",
  },
  {
    id: "cireng-combo",
    name: "Paket Combo Hemat",
    tag: "Hemat",
    tagTone: "emerald",
    description:
      "2 pack cireng isi (5 pcs/pack) plus ekstra bumbu rujak. Paling pas untuk dinikmati bersama keluarga.",
    highlight: "2 pack cireng + ekstra bumbu",
    price: 35000,
    compareAt: 40000,
    unit: "paket",
    isi: "2 pack (10 pcs) + bumbu",
    image: "/umkm/img/cireng-combo.jpg",
    imageAlt:
      "Paket combo hemat dua pack cireng isi dengan ekstra bumbu rujak",
  },
];

export type PackOption = {
  id: string;
  name: string;
  detail: string;
  price: number;
  compareAt?: number;
  badge?: string;
};

export const packOptions: PackOption[] = [
  {
    id: "cireng-original",
    name: "Cireng Original Bumbu Rujak",
    detail: "1 pack (isi 5 pcs)",
    price: 15000,
  },
  {
    id: "cireng-ayam",
    name: "Cireng Isi Ayam Suwir Pedas",
    detail: "1 pack (isi 5 pcs)",
    price: 20000,
  },
  {
    id: "cireng-mozarella",
    name: "Cireng Mozzarella Melt",
    detail: "1 pack (isi 5 pcs)",
    price: 25000,
  },
  {
    id: "cireng-combo",
    name: "Paket Combo Hemat",
    detail: "2 pack cireng isi (10 pcs) + ekstra bumbu rujak",
    price: 35000,
    compareAt: 40000,
    badge: "Hemat",
  },
];
