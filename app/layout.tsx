import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Vanspire | Future-Focused Brand Group',
    template: '%s | Vanspire',
  },

  description:
    'Vanspire is a future-focused brand group building technology-driven ventures. Our first active vertical is Technology - engineering scalable digital systems, enterprise software, and cloud infrastructure for the companies of tomorrow.',

  keywords: [
    'Vanspire',
    'future-focused technology company',
    'scalable digital systems',
    'enterprise software solutions',
    'technology-driven growth',
    'brand group',
    'digital transformation',
    'software innovation',
    'enterprise web development',
    'scalable cloud systems',
  ],

  openGraph: {
    title: 'Vanspire | Future-Focused Brand Group',
    description:
      'Vanspire builds technology-driven ventures. Scalable systems, enterprise software, and cloud infrastructure - engineered for long-term growth.',
    url: SITE_URL,
    siteName: 'Vanspire',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vanspire - Future-Focused Brand Group',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vanspire | Future-Focused Brand Group',
    description:
      'Vanspire builds technology-driven ventures. Scalable systems, enterprise software, and cloud infrastructure - engineered for long-term growth.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  alternates: {
    canonical: SITE_URL,
  },
}

// JSON-LD Structured Data - Organization + Website schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Vanspire',
      url: SITE_URL,
      description:
        'Vanspire is a future-focused brand group building technology-driven ventures across enterprise software, cloud infrastructure, and digital transformation.',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@vanspire.in',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Vanspire',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
