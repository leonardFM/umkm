export type ProductTag = "Best Seller" | "Pedas" | "Favorit" | "Hemat";
export type ProductCategory = "Cireng" | "Dimsum";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
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

export const categories: ProductCategory[] = ["Cireng", "Dimsum"];

export const products: Product[] = [
  {
    id: "cireng-original",
    name: "Cireng Original Bumbu Rujak",
    category: "Cireng",
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
    category: "Cireng",
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
    category: "Cireng",
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
    category: "Cireng",
    tag: "Hemat",
    tagTone: "emerald",
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
    description:
      "Dimsum yang digoreng hingga keemasan dan ekstra krispi. Cocok untuk camilan sore atau lauk praktis.",
    highlight: "Ekstra krispi & wangi",
    price: 25000,
    unit: "pack",
    isi: "isi 6 pcs",
    image: "/umkm/img/dimsum-goreng.jpg",
    imageAlt: "Dimsum goreng crispy berwarna keemasan",
  },
];

export type PackOption = {
  id: string;
  name: string;
  category: ProductCategory;
  detail: string;
  isi: string;
  price: number;
  compareAt?: number;
  badge?: string;
};

export const packOptions: PackOption[] = products.map((product) => ({
  id: product.id,
  name: product.name,
  category: product.category,
  detail: `1 ${product.unit} (${product.isi})`,
  isi: product.isi,
  price: product.price,
  compareAt: product.compareAt,
  badge: product.tag === "Hemat" ? "Hemat" : undefined,
}));
