import type { Metadata } from 'next'
import AppDevelopmentPage from './AppDevelopmentPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Application Development – Mobile & Enterprise Apps | Vanspire',
  description:
    'Vanspire delivers cross-platform mobile and enterprise application development built around real-world business workflows. iOS, Android, and cross-platform solutions for complex organisations.',
  alternates: { canonical: '/services/digital-solutions/application-development' },
  openGraph: {
    title: 'Application Development | Vanspire',
    description: 'Cross-platform mobile and enterprise app development built for complex business workflows.',
    url: `${SITE_URL}/services/digital-solutions/application-development`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application Development | Vanspire',
    description: 'Mobile and enterprise application development for complex organisations.',
  },
}

export default function Page() {
  return <AppDevelopmentPage />
}
