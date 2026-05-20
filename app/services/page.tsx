import type { Metadata } from "next";

import { ServicesPageClient } from "@/components/pages/ServicesPageClient";
import { CONTENT, SERVICES_DETAIL, SITE } from "@/lib/content";

const TITLE = "Услуги";
const DESC =
  "Полный цикл: DMX/SPI системы управления, пиксельные и медиафасады, фасадная анимация, гибкий неон, сервис и объединение фасадов в единую драматургию.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/services`,
    title: TITLE,
    description: DESC,
  },
};

const SERVICES_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CONTENT.home.services.items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: it.title.ru,
      description: it.body.ru,
      serviceType: it.code,
      provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
      areaServed: ["Moscow", "Dubai", "Almaty"],
      offers: {
        "@type": "Offer",
        description: SERVICES_DETAIL[i]?.pricing.ru,
      },
    },
  })),
};

const BREADCRUMBS_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "LUMEN", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE.url}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS_LD) }}
      />
    </>
  );
}
