import type { Metadata } from 'next'
import ERPImplementationPage from './ERPImplementationPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'ERP Implementation – Enterprise Resource Planning Deployment | Vanspire',
  description:
    'Vanspire delivers end-to-end ERP implementation, customisation, and change management for enterprise organisations seeking operational clarity and system-wide integration.',
  alternates: { canonical: '/services/integration/erp-implementation' },
  openGraph: {
    title: 'ERP Implementation | Vanspire',
    description: 'End-to-end ERP deployment and change management for enterprise operational clarity.',
    url: `${SITE_URL}/services/integration/erp-implementation`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Implementation | Vanspire',
    description: 'Enterprise ERP deployment and change management for operational clarity.',
  },
}

export default function Page() {
  return <ERPImplementationPage />
}
