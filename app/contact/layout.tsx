import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Vanspire',
  description:
    'Get in touch with Vanspire. Enterprise technology partnerships, software enquiries, and group-level conversations - we respond within two business days.',
  openGraph: {
    title: 'Contact Vanspire | Start a Conversation',
    description:
      'Enterprise enquiries for technology partnerships, software, and digital transformation. Get in touch with Vanspire.',
    url: '/contact',
  },
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
