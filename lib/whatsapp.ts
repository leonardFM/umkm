import { siteConfig } from "./site";

export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(productName: string, qty: number = 1): string {
  const jumlah = qty > 0 ? qty : 1;
  return `Halo admin, saya mau pesan Cireng (Pack isi 5): ${productName} sebanyak ${jumlah} pack. Mohon info total dan ongkirnya.`;
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
