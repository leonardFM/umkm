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
      "Cireng Abidzar | Jual Cireng Rujak Krispi & Dimsum Enak",
    template: "%s | Cireng Abidzar",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "jual cireng rujak",
    "cireng rujak krispi",
    "cireng original bumbu rujak",
    "cireng isi ayam suwir pedas",
    "cireng mozzarella melt",
    "paket combo cireng",
    "jual dimsum frozen",
    "dimsum ayam premium",
    "dimsum mentai",
    "dimsum mozzarella",
    "dimsum goreng crispy",
    "camilan cireng dan dimsum online",
    "reseller cireng dan dimsum",
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
    title: "Cireng Abidzar | Cireng Rujak Krispi & Dimsum, Krispi di Luar Kenyal di Dalam",
    description: siteConfig.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Cireng Abidzar - cireng rujak krispi dan dimsum premium siap goreng dan kukus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cireng Abidzar | Jual Cireng Rujak Krispi & Dimsum Enak",
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
