import { siteConfig } from "./site";

export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(
  productName: string,
  qty: number = 1,
  unit: string = "pack",
  detail?: string,
): string {
  const jumlah = qty > 0 ? qty : 1;
  const label =
    detail && !productName.includes("(")
      ? `${productName} (${detail})`
      : productName;
  return `Halo admin, saya mau pesan: ${label} sebanyak ${jumlah} ${unit}. Mohon info total dan ongkirnya.`;
}

export type OrderItem = {
  name: string;
  composition?: string;
  unit?: string;
  qty: number;
};

export function multiOrderMessage(items: OrderItem[]): string {
  const lines = items
    .filter((item) => item.qty > 0)
    .map((item) => {
      const detail =
        item.composition && !item.name.includes("(")
          ? item.composition
          : undefined;
      return detail
        ? `- ${item.name} (${detail}) sebanyak ${item.qty} ${item.unit ?? "pack"}`
        : `- ${item.name} x${item.qty}`;
    });
  return `Halo admin, saya mau pesan:\n${lines.join("\n")}\n\nMohon info total dan ongkirnya.`;
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
