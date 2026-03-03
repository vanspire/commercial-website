import type { Metadata } from 'next'
import EnterpriseIntegrationPage from './EnterpriseIntegrationPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Enterprise System Integration – API & Middleware Architecture | Vanspire',
  description:
    'Vanspire designs and implements enterprise system integration across complex technology stacks - REST APIs, middleware platforms, event-driven architectures, and data synchronisation.',
  alternates: { canonical: '/services/integration/enterprise-system-integration' },
  openGraph: {
    title: 'Enterprise System Integration | Vanspire',
    description: 'Seamless enterprise system integration across complex technology stacks and middleware platforms.',
    url: `${SITE_URL}/services/integration/enterprise-system-integration`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise System Integration | Vanspire',
    description: 'Enterprise system integration across APIs, middleware, and event-driven architectures.',
  },
}

export default function Page() {
  return <EnterpriseIntegrationPage />
}
