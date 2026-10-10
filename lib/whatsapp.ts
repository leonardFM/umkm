import { siteConfig } from "./site";

export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(productName: string, qty?: number): string {
  const variant = productName.replace(/^cireng\s+/i, "");
  const jumlah = qty && qty > 0 ? ` sebanyak ${qty} pack` : "";
  return `Halo admin, saya ingin pesan Cireng ${variant}${jumlah}. Mohon info ketersediaan, harga, dan cara pembayarannya. Terima kasih!`;
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
