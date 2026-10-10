import { WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const message =
  "Halo admin, saya mau order jajanan Cireng Abidzar. Mohon info menu, total, dan ongkirnya.";

export default function FloatingWA() {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2 rounded-full bg-wa px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-wa/40 ring-1 ring-white/40 transition-transform hover:-translate-y-0.5 hover:bg-wa-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa-700 focus-visible:ring-offset-2 focus-visible:ring-offset-cream lg:hidden"
    >
      <WhatsAppIcon className="h-5 w-5" />
      Order via WA
    </a>
  );
}
