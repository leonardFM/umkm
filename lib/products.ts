export type ProductTag = "Best Seller" | "Pedas" | "Favorit";
export type ProductCategory = "Cireng Isi" | "Dimsum";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  tag: ProductTag;
  tagTone: "amber" | "red" | "orange";
  description: string;
  highlight: string;
  price: number;
  unit: string;
  isi: string;
  image: string;
  imageAlt: string;
};

export const categories: ProductCategory[] = ["Cireng Isi", "Dimsum"];

export const products: Product[] = [
  {
    id: "cireng-ayam",
    name: "Cireng Isi Ayam Suwir Pedas",
    category: "Cireng Isi",
    tag: "Best Seller",
    tagTone: "amber",
    description:
      "Isian ayam suwir berbumbu cabai yang melimpah, pedas nampol dengan aroma bawang yang menggoda.",
    highlight: "Isian ayam melimpah & pedas",
    price: 20000,
    unit: "pack",
    isi: "isi 8 pcs",
    image: "/images/cireng-ayam.png",
    imageAlt:
      "Cireng isi ayam suwir pedas dengan isian cabai merah melimpah khas Cireng Abidzar",
  },
  {
    id: "cireng-mozzarella",
    name: "Cireng Isi Mozzarella Melt",
    category: "Cireng Isi",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Keju mozzarella premium yang meleleh kenyal saat digigit. Camilan favorit yang bikin nagih!",
    highlight: "Mozzarella premium meleleh",
    price: 25000,
    unit: "pack",
    isi: "isi 8 pcs",
    image: "/images/cireng-mozzarella.png",
    imageAlt:
      "Cireng isi mozzarella melt dengan keju premium yang meleleh kenyal",
  },
  {
    id: "cireng-sosis",
    name: "Cireng Isi Sosis Sapi",
    category: "Cireng Isi",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Potongan sosis sapi panggang di dalam cireng krispi. Gurih, juicy, dan cocok untuk semua usia.",
    highlight: "Sosis sapi panggang juicy",
    price: 22000,
    unit: "pack",
    isi: "isi 8 pcs",
    image: "/images/cireng-sosis.png",
    imageAlt: "Cireng isi sosis sapi panggang dengan potongan sosis gurih",
  },
  {
    id: "cireng-bakso",
    name: "Cireng Isi Bakso Pedas",
    category: "Cireng Isi",
    tag: "Pedas",
    tagTone: "red",
    description:
      "Bakso sapi kenyal berpadu sambal pedas di dalam cireng renyah. Sensasi sekali gigit yang nagih.",
    highlight: "Bakso kenyal + sambal pedas",
    price: 22000,
    unit: "pack",
    isi: "isi 8 pcs",
    image: "/images/cireng-bakso.png",
    imageAlt: "Cireng isi bakso sapi pedas dengan isian bakso kenyal",
  },
  {
    id: "cireng-abon",
    name: "Cireng Isi Abon Sapi",
    category: "Cireng Isi",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Abon sapi lembut dan manis-gurih melimpah. Pilihan aman untuk anak-anak dan keluarga.",
    highlight: "Abon sapi melimpah & gurih",
    price: 23000,
    unit: "pack",
    isi: "isi 8 pcs",
    image: "/images/cireng-abon.png",
    imageAlt: "Cireng isi abon sapi dengan serat abon lembut melimpah",
  },
  {
    id: "dimsum-ayam",
    name: "Dimsum Ayam Premium",
    category: "Dimsum",
    tag: "Best Seller",
    tagTone: "amber",
    description:
      "Dimsum ayam udang dengan tekstur lembut, dikukus sempurna dan siap kukus ulang di rumah.",
    highlight: "Ayam & udang premium",
    price: 25000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/images/dimsum-ayam.png",
    imageAlt: "Dimsum ayam premium dalam kukusan bambu, siap kukus",
  },
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai Lumer",
    category: "Dimsum",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Dimsum ayam disiram saus mentai creamy yang gurih, dipanggang hingga wangi. Favorit kekinian!",
    highlight: "Saus mentai creamy dipanggang",
    price: 30000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/images/dimsum-mentai.png",
    imageAlt: "Dimsum mentai dengan saus creamy oranye dan tobiko",
  },
  {
    id: "dimsum-mozzarella",
    name: "Dimsum Mozzarella Cheese",
    category: "Dimsum",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Dimsum dengan topping keju mozzarella meleleh. Kombinasi lembut, gurih, dan menyenangkan.",
    highlight: "Topping mozzarella meleleh",
    price: 30000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/images/dimsum-mozzarella.png",
    imageAlt: "Dimsum mozzarella dengan topping keju meleleh",
  },
  {
    id: "dimsum-goreng",
    name: "Dimsum Goreng Crispy",
    category: "Dimsum",
    tag: "Favorit",
    tagTone: "orange",
    description:
      "Dimsum yang digoreng hingga keemasan dan ekstra krispi. Cocok untuk camilan sore atau lauk praktis.",
    highlight: "Ekstra krispi & wangi",
    price: 25000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/images/dimsum-goreng.png",
    imageAlt: "Dimsum goreng crispy berwarna keemasan",
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
    id: "cireng-ayam",
    name: "Cireng Isi Ayam Suwir Pedas",
    detail: "1 pack (isi 8 pcs)",
    price: 20000,
  },
  {
    id: "cireng-mozzarella",
    name: "Cireng Isi Mozzarella Melt",
    detail: "1 pack (isi 8 pcs)",
    price: 25000,
  },
  {
    id: "dimsum-ayam",
    name: "Dimsum Ayam Premium",
    detail: "1 pack (isi 6 pcs)",
    price: 25000,
  },
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai Lumer",
    detail: "1 pack (isi 6 pcs)",
    price: 30000,
  },
  {
    id: "mix-cireng",
    name: "Paket Mix Cireng Isi (5 Varian)",
    detail: "Ayam, Mozzarella, Sosis, Bakso & Abon",
    price: 99000,
    compareAt: 112000,
    badge: "Hemat",
  },
  {
    id: "mix-dimsum",
    name: "Paket Mix Dimsum (4 Varian)",
    detail: "Ayam, Mentai, Mozzarella & Goreng Crispy",
    price: 95000,
    compareAt: 110000,
    badge: "Hemat",
  },
  {
    id: "kombo",
    name: "Paket Kombo Cireng + Dimsum",
    detail: "Mix cireng isi & dimsum, paling puas",
    price: 175000,
    compareAt: 222000,
    badge: "Best Value",
  },
];
