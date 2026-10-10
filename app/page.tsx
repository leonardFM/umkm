import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Catalog from "@/components/Catalog";
import OrderCalculator from "@/components/OrderCalculator";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { products } from "@/lib/products";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jual Cireng Isi & Dimsum Frozen Enak, Krispi & Halal",
};

const abs = (path: string) =>
  new URL(path, siteConfig.url).toString();

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Home() {
  const storeId = `${siteConfig.url}/#store`;

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": storeId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: abs("/images/hero-cireng.png"),
    logo: abs("/images/logo.svg"),
    telephone: `+${siteConfig.whatsapp}`,
    priceRange: "Rp20.000 - Rp175.000",
    servesCuisine: "Indonesian Snack",
    currenciesAccepted: "IDR",
    paymentAccepted: "Transfer Bank, E-Wallet, QRIS, COD",
    openingHours: "Mo-Su 08:00-21:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.instagram, siteConfig.tiktok],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Cireng Isi & Dimsum Cireng Abidzar",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: abs(product.image),
        description: product.description,
        brand: { "@type": "Brand", name: siteConfig.name },
        category: "Camilan Frozen Indonesia",
        offers: {
          "@type": "Offer",
          url: `${siteConfig.url}/#katalog`,
          priceCurrency: "IDR",
          price: product.price,
          availability: "https://schema.org/InStock",
          seller: { "@id": storeId },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "320",
          bestRating: "5",
          worstRating: "1",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <JsonLd data={storeSchema} />
      <JsonLd data={productListSchema} />
      <JsonLd data={faqSchema} />

      <Hero />
      <Features />
      <Catalog />
      <OrderCalculator />
      <Testimonials />
      <Faq />
    </main>
  );
}
