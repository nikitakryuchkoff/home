import type { Metadata } from "next";

import { PricingPageClient } from "@/components/pages/PricingPageClient";
import { CONTENT, SITE } from "@/lib/content";

const TITLE = "Стоимость DMX, фасадной анимации и медиафасадов";
const DESC =
  "Тарифная сетка по сценам, экспертные ответы и интерактивный калькулятор: DMX, фасадная анимация, пиксельный фасад, объединение фасадов.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/pricing`,
    title: TITLE,
    description: DESC,
  },
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTENT.faq.map((item) => ({
    "@type": "Question",
    name: item.q.ru,
    acceptedAnswer: { "@type": "Answer", text: item.a.ru },
  })),
};

const BREADCRUMBS_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "LUMEN", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Стоимость", item: `${SITE.url}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <PricingPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS_LD) }}
      />
    </>
  );
}
