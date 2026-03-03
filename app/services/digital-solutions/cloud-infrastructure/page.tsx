import type { Metadata } from 'next'
import CloudInfrastructurePage from './CloudInfrastructurePage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export const metadata: Metadata = {
  title: 'Cloud Infrastructure – Resilient Enterprise Cloud Architecture | Vanspire',
  description:
    'Vanspire architects and manages enterprise cloud infrastructure across AWS, Azure, and GCP. Secure, scalable, and cost-efficient cloud systems built for mission-critical workloads.',
  alternates: { canonical: '/services/digital-solutions/cloud-infrastructure' },
  openGraph: {
    title: 'Cloud Infrastructure | Vanspire',
    description: 'Resilient, secure cloud architecture built for enterprise-scale, mission-critical workloads.',
    url: `${SITE_URL}/services/digital-solutions/cloud-infrastructure`,
    images: [{ url: '/ogimage.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Infrastructure | Vanspire',
    description: 'Enterprise cloud architecture built for uptime, scalability, and cost-efficiency.',
  },
}

export default function Page() {
  return <CloudInfrastructurePage />
}
