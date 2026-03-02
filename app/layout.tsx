import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vanspire.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Vanspire | Best Software, Web & App Development Company in India",
    template: "%s | Vanspire",
  },

  description:
    "Vanspire is the best software solutions, website development, mobile apps, and digital marketing company in India and Kerala. We specialize in IoT solutions, cloud infrastructure, and enterprise software.",

  keywords: [
    "best software solutions",
    "best website development company",
    "best digital marketing company",
    "best website solution",
    "best mobile applications development in india",
    "IoT solution",
    "software website apps",
    "cloud marketing",
    "kerala",
    "india",
    "Vanspire",
    "enterprise software",
    "scalable cloud systems",
  ],

  openGraph: {
    title: "Vanspire Innovations | Best Software & Web Development Company",
    description:
      "Vanspire offers the best software solutions, website development, mobile apps, IoT, and digital marketing in India and Kerala.",
    url: SITE_URL,
    siteName: "Vanspire",
    images: [
      {
        url: "/ogimage.webp",
        width: 1200,
        height: 630,
        alt: "Vanspire - Software and Web Development",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vanspire Innovations | Best Software & Web Development Company",
    description:
      "Vanspire offers the best software solutions, website development, mobile apps, IoT, and digital marketing in India and Kerala.",
    images: ["/ogimage.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Structured Data - Organization + Website schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vanspire Innovations",
      url: SITE_URL,
      description:
        "Vanspire Innovations is the best software solutions, website development, mobile apps, and digital marketing company in India and Kerala, specializing in IoT and cloud infrastructure.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Kerala",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@vanspire.in",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Vanspire Innovations",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-brand-black">
        <Header />
        <LayoutWrapper>
          <main className="flex-1">{children}</main>
        </LayoutWrapper>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
