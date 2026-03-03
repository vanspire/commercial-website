import type { Metadata } from 'next'
import HMSPage from './HMSPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Hospital Management System – Enterprise Healthcare SaaS Platform | Vanspire',
  description:
    'Vanspire HMS is a proprietary enterprise SaaS platform designed for modern healthcare facilities. Complete hospital management with OP, IP, Pharmacy, Billing, Laboratory, Radiology, and Admin modules — secure, scalable, and cloud-native.',
  alternates: { canonical: '/services/integration/hospital-management-system' },
  openGraph: {
    title: 'Hospital Management System | Vanspire HMS',
    description: 'Proprietary enterprise SaaS for modern healthcare facility operations. Complete clinical and administrative management in one platform.',
    url: `${SITE_URL}/services/integration/hospital-management-system`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Management System | Vanspire HMS',
    description: 'Enterprise SaaS for modern healthcare facility management. OP, IP, Pharmacy, Billing, and more.',
  },
}

export default function Page() {
  return <HMSPage />
}
