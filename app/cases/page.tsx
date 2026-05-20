import type { Metadata } from "next";

import { CasesPageClient } from "@/components/pages/CasesPageClient";
import { CASES, SITE } from "@/lib/content";

const TITLE = "Кейсы и контакты";
const DESC =
  "Editorial-разворот по знаковым объектам: задача, инженерное решение, результат и драйверы стоимости. Контакты офисов в Москве, Дубае и Алматы.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/cases" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/cases`,
    title: TITLE,
    description: DESC,
  },
};

const CASES_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CASES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: c.ttl.ru,
      about: c.type.ru,
      description: c.task.ru,
    },
  })),
};

const BREADCRUMBS_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "LUMEN", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Кейсы", item: `${SITE.url}/cases` },
  ],
};

export default function CasesPage() {
  return (
    <>
      <CasesPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CASES_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS_LD) }}
      />
    </>
  );
}
