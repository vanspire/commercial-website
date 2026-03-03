import type { Metadata } from 'next'
import WebPlatformPage from './WebPlatformPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Web Platform Development – Enterprise-Grade Digital Platforms | Vanspire',
  description:
    'Vanspire builds scalable, high-performance web platforms for enterprise organisations. From architecture design to deployment - structured for long-term growth and operational depth.',
  alternates: { canonical: '/services/digital-solutions/web-platform-development' },
  openGraph: {
    title: 'Web Platform Development | Vanspire',
    description: 'Enterprise-grade web platforms built for scalability, performance, and long-term operational depth.',
    url: `${SITE_URL}/services/digital-solutions/web-platform-development`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Platform Development | Vanspire',
    description: 'Enterprise-grade web platforms engineered for scale and longevity.',
  },
}

export default function Page() {
  return <WebPlatformPage />
}
