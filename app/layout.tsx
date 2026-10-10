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

const ogImage = "/images/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Cireng Abidzar | Jual Cireng Isi & Dimsum Frozen Enak, Krispi & Halal",
    template: "%s | Cireng Abidzar",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "jual cireng isi",
    "cireng isi ayam suwir pedas",
    "cireng isi mozzarella",
    "cireng isi sosis",
    "cireng isi bakso",
    "cireng isi abon",
    "dimsum frozen enak",
    "dimsum ayam premium",
    "dimsum mentai",
    "camilan frozen online",
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
    title: "Cireng Abidzar | Cireng Isi & Dimsum Krispi Outside, Chewy Inside",
    description: siteConfig.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Cireng Abidzar - aneka cireng isi dan dimsum krispi siap goreng dan kukus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cireng Abidzar | Jual Cireng Isi & Dimsum Frozen Enak",
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
