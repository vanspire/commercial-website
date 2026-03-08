import type { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import BrandStatement from '@/components/sections/BrandStatement'
import CurrentFocus from '@/components/sections/CurrentFocus'
import Capabilities from '@/components/sections/Capabilities'
import Philosophy from '@/components/sections/Philosophy'
import FutureReady from '@/components/sections/FutureReady'
import ValuesSection from '@/components/sections/ValuesSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Best Website Development, Digital Marketing & Mobile App Company in India | Vanspire',
  description:
    'Vanspire is the top choice for software solutions, website development, mobile apps, and digital marketing in India and Kerala, delivering scalable cloud and IoT solutions.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Website Development, Digital Marketing & Mobile App Company in India | Vanspire",
    "description": "Vanspire is the top choice for software solutions, website development, mobile apps, and digital marketing in India and Kerala, delivering scalable cloud and IoT solutions.",
    "url": "https://vanspire.in",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <BrandStatement />
      <CurrentFocus />
      <Capabilities />
      <Philosophy />
      <FutureReady />
      <ValuesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
