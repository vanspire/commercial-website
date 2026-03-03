import type { Metadata } from 'next'
import DigitalTransformationPage from './DigitalTransformationPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Digital Transformation – Enterprise System Modernisation | Vanspire',
  description:
    'Vanspire leads enterprise digital transformation engagements — transitioning legacy systems and processes into modern, agile, and technology-native operations built for scale.',
  alternates: { canonical: '/services/digital-solutions/digital-transformation' },
  openGraph: {
    title: 'Digital Transformation | Vanspire',
    description: 'Strategic enterprise system modernisation from legacy to future-ready digital operations.',
    url: `${SITE_URL}/services/digital-solutions/digital-transformation`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation | Vanspire',
    description: 'Strategic enterprise modernisation for future-ready digital operations.',
  },
}

export default function Page() {
  return <DigitalTransformationPage />
}
