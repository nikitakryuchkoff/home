import { HeroCanvas } from "@/components/HeroCanvas";
import { HeroHeading } from "@/components/HeroHeading";
import {
  IntroSection,
  ServicesSection,
  ApproachSection,
  FaqSection,
  ContactSection,
} from "@/components/HomeSections";
import { CONTENT, SITE } from "@/lib/content";

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: String(SITE.founded),
  description:
    "Engineering studio of architectural lighting and DMX/SPI control systems for hotels, business centres and landmark facades.",
  address: SITE.offices.map((line) => ({
    "@type": "PostalAddress",
    streetAddress: line,
  })),
  areaServed: ["Moscow", "Dubai", "Almaty"],
  sameAs: [],
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: ["ru-RU", "en-US"],
  publisher: { "@type": "Organization", name: SITE.name },
};

const WEBPAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUMEN ARCHITECTURE — DMX, фасадная анимация, медиафасады",
  url: SITE.url,
  inLanguage: "ru-RU",
  isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
  about: [
    "DMX control systems",
    "Facade animation",
    "Pixel facades",
    "Media facades",
    "Architectural lighting",
  ],
  description:
    "Architectural lighting engineering studio. We design and build DMX/SPI control, pixel and media facades and authored facade animation for premium objects.",
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTENT.faq.map((item) => ({
    "@type": "Question",
    name: item.q.ru,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a.ru,
    },
  })),
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CONTENT.home.services.items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: it.title.ru,
      description: it.body.ru,
      provider: { "@type": "Organization", name: SITE.name },
    },
  })),
};

export default function Page() {
  return (
    <main id="main">
      <p className="sr-only">
        LUMEN ARCHITECTURE — инженерная студия архитектурного света. С 2014 года: DMX/SPI системы
        управления, пиксельные и медиафасады, фасадная анимация, гибкий неон, сервис и
        техобслуживание. Москва · Дубай · Алматы.
      </p>

      <section className="hero" aria-label="Hero">
        <div className="hero-grid">
          <HeroHeading />
          <HeroCanvas />
        </div>
      </section>

      <IntroSection />
      <ServicesSection />
      <ApproachSection />
      <FaqSection />
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }}
      />
    </main>
  );
}
