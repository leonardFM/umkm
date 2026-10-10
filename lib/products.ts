export type ProductTag = "Best Seller" | "Pedas" | "Favorit" | "Hemat";
export type ProductCategory = "Cireng" | "Dimsum" | "Minuman" | "Paket";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  tag: ProductTag;
  tagTone: "amber" | "red" | "orange" | "emerald";
  badge: string;
  includes: string;
  description: string;
  highlight: string;
  price: number;
  compareAt?: number;
  unit: string;
  isi: string;
  composition?: string;
  image: string;
  imageAlt: string;
};

export const categories: ProductCategory[] = [
  "Cireng",
  "Dimsum",
  "Minuman",
  "Paket",
];

export const products: Product[] = [
  {
    id: "cireng-original",
    name: "Cireng Original Bumbu Rujak",
    category: "Cireng",
    tag: "Best Seller",
    tagTone: "amber",
    badge: "Best Seller",
    includes: "Termasuk Bumbu Rujak",
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
    category: "Cireng",
    tag: "Pedas",
    tagTone: "red",
    badge: "Pedas Nampol",
    includes: "Termasuk Bumbu Rujak",
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
    category: "Cireng",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Favorit Anak",
    includes: "Termasuk Bumbu Rujak",
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
    category: "Cireng",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Paling Hemat",
    includes: "Termasuk Bumbu Rujak",
    description:
      "2 pack cireng isi (5 pcs/pack) plus ekstra bumbu rujak. Paling pas untuk dinikmati bersama keluarga.",
    highlight: "2 pack cireng + ekstra bumbu",
    price: 35000,
    compareAt: 40000,
    unit: "paket",
    isi: "2 pack + bumbu",
    image: "/umkm/img/cireng-combo.jpg",
    imageAlt:
      "Paket combo hemat dua pack cireng isi dengan ekstra bumbu rujak",
  },
  {
    id: "dimsum-ayam",
    name: "Dimsum Ayam Premium",
    category: "Dimsum",
    tag: "Best Seller",
    tagTone: "amber",
    badge: "Best Seller",
    includes: "Termasuk Chili Oil",
    description:
      "Dimsum ayam udang dengan tekstur lembut, dikukus sempurna dan siap kukus ulang di rumah.",
    highlight: "Ayam & udang premium",
    price: 25000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/umkm/img/dimsum-ayam.jpg",
    imageAlt: "Dimsum ayam premium dalam kukusan bambu, siap kukus",
  },
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai Lumer",
    category: "Dimsum",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Favorit Kekinian",
    includes: "Termasuk Chili Oil",
    description:
      "Dimsum ayam disiram saus mentai creamy yang gurih, dipanggang hingga wangi. Favorit kekinian!",
    highlight: "Saus mentai creamy dipanggang",
    price: 30000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/umkm/img/dimsum-mentai.jpg",
    imageAlt: "Dimsum mentai dengan saus creamy oranye dan tobiko",
  },
  {
    id: "dimsum-mozarella",
    name: "Dimsum Mozzarella Cheese",
    category: "Dimsum",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Favorit Anak",
    includes: "Termasuk Chili Oil",
    description:
      "Dimsum dengan topping keju mozzarella meleleh. Kombinasi lembut, gurih, dan menyenangkan.",
    highlight: "Topping mozzarella meleleh",
    price: 30000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/umkm/img/dimsum-mozarella.jpg",
    imageAlt: "Dimsum mozzarella dengan topping keju meleleh",
  },
  {
    id: "dimsum-goreng",
    name: "Dimsum Goreng Crispy",
    category: "Dimsum",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Camilan Sore",
    includes: "Termasuk Chili Oil",
    description:
      "Dimsum yang digoreng hingga keemasan dan ekstra krispi. Cocok untuk camilan sore atau lauk praktis.",
    highlight: "Ekstra krispi & wangi",
    price: 25000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/umkm/img/dimsum-goreng.jpg",
    imageAlt: "Dimsum goreng crispy berwarna keemasan",
  },
  {
    id: "susu-jelly",
    name: "Susu Jelly Creamy (Botol 250ml)",
    category: "Minuman",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Penawar Pedas",
    includes: "Dingin & Segar",
    description:
      "Susu manis creamy dingin dipadukan dengan potongan jelly kenyal yang lembut. Penawar pedas paling pas!",
    highlight: "Susu creamy + jelly kenyal",
    price: 10000,
    unit: "botol",
    isi: "250 ml",
    image: "/umkm/img/susu-jelly.jpg",
    imageAlt:
      "Susu Jelly Creamy botol 250ml dingin dengan potongan jelly kenyal khas Cireng Abidzar",
  },
  {
    id: "susu-jelly-1l",
    name: "Susu Jelly Creamy (Botol 1 Liter)",
    category: "Minuman",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Varian 1L",
    includes: "Porsi Keluarga",
    description:
      "Kemasan hemat 1 Liter! Susu manis creamy dingin dengan jelly kenyal lembut. Pas untuk dinikmati bersama keluarga di rumah.",
    highlight: "Susu creamy + jelly kenyal 1L",
    price: 35000,
    compareAt: 40000,
    unit: "botol",
    isi: "1 Liter",
    image: "/umkm/img/susu-jelly-1l.jpg",
    imageAlt:
      "Susu Jelly Creamy botol 1 Liter dingin dengan jelly kenyal untuk keluarga",
  },
  {
    id: "paket-susu-cireng-original",
    name: "Paket Combo Susu Cireng Original",
    category: "Paket",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Combo Hemat",
    includes: "Cireng Original + Susu Jelly",
    description:
      "Kombinasi pas cireng original bumbu rujak yang krispi dengan segarnya Susu Jelly Creamy. Hemat dan bikin kenyang.",
    highlight: "Cireng original + susu jelly",
    price: 23000,
    compareAt: 25000,
    unit: "paket",
    isi: "2 item",
    composition: "1 Pack Cireng Original + 1 Susu Jelly 250ml",
    image: "/umkm/img/paket-susu-cireng-original.jpg",
    imageAlt:
      "Paket combo cireng original bumbu rujak dengan satu botol Susu Jelly Creamy",
  },
  {
    id: "paket-pedas-creamy",
    name: "Paket Pedas Creamy",
    category: "Paket",
    tag: "Pedas",
    tagTone: "red",
    badge: "Pedas + Creamy",
    includes: "Cireng Ayam Pedas + Susu Jelly",
    description:
      "Cireng isi ayam suwir pedas nampol berpadu Susu Jelly Creamy yang menenangkan mulut. Duo pedas-creamy favorit!",
    highlight: "Ayam pedas + susu jelly",
    price: 28000,
    compareAt: 30000,
    unit: "paket",
    isi: "2 item",
    composition: "1 Pack Cireng Ayam Suwir Pedas + 1 Susu Jelly 250ml",
    image: "/umkm/img/paket-pedas-creamy.jpg",
    imageAlt:
      "Paket Pedas Creamy berisi cireng isi ayam suwir pedas dan Susu Jelly Creamy",
  },
  {
    id: "paket-dimsum-susu-jelly",
    name: "Paket Dimsum Susu Jelly",
    category: "Paket",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Best Value",
    includes: "Dimsum Ayam + Susu Jelly",
    description:
      "Dimsum ayam premium yang lembut gurih ditemani Susu Jelly Creamy dingin. Satu paket lengkap buat santai.",
    highlight: "Dimsum premium + susu jelly",
    price: 33000,
    compareAt: 35000,
    unit: "paket",
    isi: "2 item",
    composition: "1 Pack Dimsum Ayam Premium + 1 Susu Jelly 250ml",
    image: "/umkm/img/paket-dimsum-susu.jpg",
    imageAlt:
      "Paket Dimsum Susu Jelly berisi dimsum ayam premium dan satu botol Susu Jelly",
  },
  {
    id: "paket-family-1l",
    name: "Paket Family Cireng & Dimsum (1 Liter)",
    category: "Paket",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Varian 1L",
    includes: "3 Pack + Susu 1L",
    description:
      "Porsi pas kumpul keluarga! Lengkap dengan camilan garing/gurih dan 1 Liter Susu Jelly segar.",
    highlight: "Paket keluarga + susu jelly 1L",
    price: 95000,
    unit: "paket",
    isi: "4 item",
    composition:
      "1 Pack Cireng Original + 1 Pack Cireng Ayam Pedas + 1 Pack Dimsum Ayam + 1 Botol Susu Jelly 1 Liter",
    image: "/umkm/img/paket-family.jpg",
    imageAlt:
      "Paket Family Cireng & Dimsum 1 Liter dengan susu jelly untuk kumpul keluarga",
  },
  {
    id: "paket-party-ramai",
    name: "Paket Party Ramai-Ramai",
    category: "Paket",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Paling Hemat",
    includes: "6 Pack + Susu 1L x2",
    description:
      "Solusi hemat komplit untuk pesta, arisan, mabar, atau acara kantor.",
    highlight: "Paling hemat untuk acara ramai",
    price: 180000,
    compareAt: 190000,
    unit: "paket",
    isi: "8 item",
    composition:
      "2 Pack Cireng Original + 2 Pack Cireng Ayam Pedas + 2 Pack Dimsum Ayam + 2 Botol Susu Jelly 1 Liter",
    image: "/umkm/img/paket-party.jpg",
    imageAlt:
      "Paket Party Ramai-Ramai 2 botol Susu Jelly 1 Liter untuk pesta dan acara",
  },
];

export type PackOption = {
  id: string;
  name: string;
  category: ProductCategory;
  detail: string;
  isi: string;
  composition?: string;
  includes: string;
  badge: string;
  image: string;
  price: number;
  compareAt?: number;
  unit: string;
};

export const packOptions: PackOption[] = products.map((product) => ({
  id: product.id,
  name: product.name,
  category: product.category,
  detail: product.composition ?? `1 ${product.unit} (${product.isi})`,
  isi: product.isi,
  composition: product.composition,
  includes: product.includes,
  badge: product.badge,
  image: product.image,
  price: product.price,
  compareAt: product.compareAt,
  unit: product.unit,
}));

export type AddOn = {
  id: string;
  name: string;
  detail: string;
  price: number;
};

export const addOns: AddOn[] = [
  {
    id: "extra-bumbu",
    name: "Ekstra Bumbu Rujak",
    detail: "Saus rujak gula aren tambahan",
    price: 5000,
  },
  {
    id: "extra-chili-oil",
    name: "Ekstra Chili Oil",
    detail: "Chili oil pedas gurih tambahan",
    price: 5000,
  },
];
