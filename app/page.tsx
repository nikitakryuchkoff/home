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
  url: SITE.url,
  email: SITE.email,
  description: "Architectural lighting, facade control and facade animation estimates.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      url: `https://t.me/${SITE.telegram.replace(/^@/, "")}`,
    },
  ],
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
  name: "DMX — стоимость фасадного освещения и анимации",
  url: SITE.url,
  inLanguage: "ru-RU",
  isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
  about: ["Facade animation", "Pixel facades", "Architectural lighting"],
  description:
    "Architectural lighting engineering studio. We design and build facade control, pixel facades and authored facade animation for premium objects.",
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
        DMX: стоимость систем управления, пиксельных фасадов, фасадной анимации, гибкого неона,
        сервиса и техобслуживания.
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
