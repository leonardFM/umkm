export type ProductTag = "Best Seller" | "Pedas" | "Favorit" | "Hemat";
export type ProductCategory =
  | "Cireng"
  | "Dimsum"
  | "Jajanan Pasar"
  | "Minuman"
  | "Paket";

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
  "Jajanan Pasar",
  "Minuman",
  "Paket",
];

export type ProductGroup =
  | "Paket"
  | "Cireng & Dimsum"
  | "Jajanan Pasar"
  | "Susu Jelly";

export type ProductGroupMeta = {
  id: ProductGroup;
  label: string;
  emoji: string;
};

export const productGroups: ProductGroupMeta[] = [
  { id: "Paket", label: "Paket Combo", emoji: "🔥" },
  { id: "Cireng & Dimsum", label: "Cireng & Dimsum", emoji: "🥟" },
  { id: "Jajanan Pasar", label: "Jajanan Pasar", emoji: "🧆" },
  { id: "Susu Jelly", label: "Susu Jelly", emoji: "🧋" },
];

const groupByCategory: Record<ProductCategory, ProductGroup> = {
  Cireng: "Cireng & Dimsum",
  Dimsum: "Cireng & Dimsum",
  "Jajanan Pasar": "Jajanan Pasar",
  Minuman: "Susu Jelly",
  Paket: "Paket",
};

export function groupOf(category: ProductCategory): ProductGroup {
  return groupByCategory[category];
}

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
    id: "risol-mayo",
    name: "Risol Mayo Creamy",
    category: "Jajanan Pasar",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Camilan Gurih",
    includes: "Mayones Melimpah",
    description:
      "Kulit risol renyah dengan isian telur, smoked beef/sosis, dan mayones melimpah yang gurih creamy.",
    highlight: "Kulit renyah + mayones creamy",
    price: 20000,
    unit: "pack",
    isi: "isi 5 pcs",
    image: "/umkm/img/risol-mayo.jpg",
    imageAlt:
      "Risol mayo creamy dengan isian telur, smoked beef, dan mayones melimpah",
  },
  {
    id: "tahu-bakso",
    name: "Tahu Bakso Daging",
    category: "Jajanan Pasar",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Lauk Praktis",
    includes: "Bisa Kukus / Goreng",
    description:
      "Tahu gurih dengan isian adonan bakso daging yang padat, kenyal, dan gurih. Enak dikukus atau digoreng.",
    highlight: "Isian bakso daging padat",
    price: 20000,
    unit: "pack",
    isi: "isi 5 pcs",
    image: "/umkm/img/tahu-bakso.jpg",
    imageAlt:
      "Tahu bakso daging dengan isian adonan bakso kenyal siap kukus atau goreng",
  },
  {
    id: "pempek-dos",
    name: "Pempek Dos Crispy",
    category: "Jajanan Pasar",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Khas Nusantara",
    includes: "Termasuk Kuah Cuko",
    description:
      "Pempek garing renyah di luar, kenyal di dalam disajikan lengkap dengan kuah Cuko asam-pedas-manis yang segar.",
    highlight: "Renyah + kuah cuko segar",
    price: 18000,
    unit: "porsi",
    isi: "1 porsi + cuko",
    image: "/umkm/img/pempek-dos.jpg",
    imageAlt:
      "Pempek dos crispy renyah disajikan dengan kuah cuko asam pedas manis",
  },
  {
    id: "susu-jelly",
    name: "Susu Jelly Creamy (250ml)",
    category: "Minuman",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Penawar Pedas",
    includes: "Dingin & Segar",
    description:
      "Susu manis creamy dingin dipadukan dengan potongan jelly kenyal lembut. Penawar pedas pas!",
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
    name: "Susu Jelly Creamy (1 Liter)",
    category: "Minuman",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Varian 1L",
    includes: "Porsi Keluarga",
    description:
      "Kemasan hemat 1 Liter! Segar, dingin, dan creamy. Pas untuk dinikmati bersama keluarga di rumah.",
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
    id: "paket-nyemil-creamy",
    name: "Paket Nyemil Creamy",
    category: "Paket",
    tag: "Best Seller",
    tagTone: "amber",
    badge: "Best Seller",
    includes: "Cireng + Risol + Susu",
    description:
      "Teman nyemil santai: cireng, risol mayo creamy, dan Susu Jelly segar dalam satu paket hemat.",
    highlight: "Cireng + risol mayo + susu",
    price: 25000,
    unit: "paket",
    isi: "5 item",
    composition: "2 Cireng + 2 Risol Mayo + 1 Susu Jelly 250ml",
    image: "/umkm/img/paket-nyemil-creamy.jpg",
    imageAlt:
      "Paket Nyemil Creamy berisi cireng, risol mayo, dan Susu Jelly Creamy",
  },
  {
    id: "paket-family-komplit",
    name: "Paket Family Komplit (1 Liter)",
    category: "Paket",
    tag: "Favorit",
    tagTone: "orange",
    badge: "Favorit Keluarga",
    includes: "3 Pack + Susu 1L",
    description:
      "Porsi pas kumpul keluarga sore hari! Lengkap dengan makanan gurih/pedas dan 1 Liter Susu Jelly segar.",
    highlight: "Paket keluarga + susu jelly 1L",
    price: 95000,
    unit: "paket",
    isi: "4 item",
    composition:
      "1 Pack Cireng Original + 1 Pack Cireng Ayam Pedas + 1 Pack Dimsum Ayam + 1 Botol Susu Jelly 1 Liter",
    image: "/umkm/img/paket-family.jpg",
    imageAlt:
      "Paket Family Komplit 1 Liter dengan cireng, dimsum, dan Susu Jelly untuk keluarga",
  },
  {
    id: "paket-tampah-party",
    name: "Paket Tampah / Party Warga",
    category: "Paket",
    tag: "Hemat",
    tagTone: "emerald",
    badge: "Hemat & Komplit",
    includes: "Komplit untuk Acara",
    description:
      "Paket komplit hemat untuk pesta, arisan komplek, mabar, atau acara keluarga besar.",
    highlight: "Paling hemat untuk acara ramai",
    price: 160000,
    compareAt: 170000,
    unit: "paket",
    isi: "7 item",
    composition:
      "2 Pack Cireng Original & Ayam + 1 Pack Risol Mayo + 1 Pack Tahu Bakso + 1 Pack Dimsum + 2 Botol Susu Jelly 1 Liter",
    image: "/umkm/img/paket-tampah.jpg",
    imageAlt:
      "Paket Tampah / Party Warga dengan cireng, risol, tahu bakso, dimsum, dan 2 Susu Jelly 1 Liter",
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
