import type { Metadata, Viewport } from "next";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

const ogImage = "/umkm/img/og-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Cireng Abidzar | Pusat Jajanan Pasar, Cireng, Dimsum & Susu Jelly",
    template: "%s | Cireng Abidzar",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "pusat jajanan pasar",
    "jual cireng dan dimsum",
    "jual cireng rujak",
    "cireng rujak krispi",
    "cireng original bumbu rujak",
    "cireng isi ayam suwir pedas",
    "dimsum ayam premium",
    "risol mayo creamy",
    "tahu bakso daging",
    "pempek dos crispy",
    "susu jelly 1 liter",
    "paket combo jajanan",
    "catering arisan dan acara",
    "camilan frozen online",
    "reseller jajanan",
    "cireng abidzar",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "food",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Cireng Abidzar | Pusat Jajanan Pasar, Cireng, Dimsum & Susu Jelly",
    description: siteConfig.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Cireng Abidzar - pusat jajanan pasar, cireng, dimsum, dan susu jelly siap kirim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cireng Abidzar | Pusat Jajanan Pasar, Cireng, Dimsum & Susu Jelly",
    description: siteConfig.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#EA580C",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
