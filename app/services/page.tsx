import type { Metadata } from 'next'
import ServicesHubPage from './ServicesHubPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Enterprise Technology Services – Digital Solutions & Systems Integration | Vanspire',
  description:
    'Vanspire delivers enterprise-grade digital solutions and systems integration. From web platform development and cloud infrastructure to ERP implementation and Hospital Management Systems.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Enterprise Technology Services | Vanspire',
    description:
      'Digital Solutions and Integration & Implementation services built for enterprise scale and long-term operational resilience.',
    url: `${SITE_URL}/services`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Technology Services | Vanspire',
    description: 'Digital Solutions and Integration & Implementation services at enterprise scale.',
  },
}

export default function ServicesPage() {
  return <ServicesHubPage />
}
