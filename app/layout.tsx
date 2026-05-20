import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import { Nav } from "@/components/Nav";
import { SITE } from "@/lib/content";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const TITLE = "LUMEN ARCHITECTURE — DMX, фасадная анимация, медиафасады";
const DESC =
  "Инженерная студия архитектурного света. Проектируем и собираем DMX/SPI системы управления, пиксельные и медиафасады для отелей, бизнес-центров и landmark-объектов в Москве, Дубае и Алматы.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s · LUMEN",
  },
  description: DESC,
  keywords: [
    "DMX",
    "SPI",
    "медиафасад",
    "фасадная анимация",
    "архитектурное освещение",
    "пиксельный фасад",
    "гибкий неон",
    "media facade",
    "facade animation",
    "architectural lighting",
    "Lumen Architecture",
  ],
  authors: [{ name: "LUMEN ARCHITECTURE" }],
  creator: "LUMEN ARCHITECTURE",
  publisher: "LUMEN ARCHITECTURE",
  alternates: {
    canonical: "/",
    languages: { ru: "/", en: "/?lang=en" },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESC,
    locale: "ru_RU",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
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
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={jetbrainsMono.variable}>
      <body>
        <LanguageProvider>
          <div className="shell">
            <Nav />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
