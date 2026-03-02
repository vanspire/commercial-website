import type { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import BrandStatement from '@/components/sections/BrandStatement'
import CurrentFocus from '@/components/sections/CurrentFocus'
import Capabilities from '@/components/sections/Capabilities'
import Philosophy from '@/components/sections/Philosophy'
import FutureReady from '@/components/sections/FutureReady'
import ValuesSection from '@/components/sections/ValuesSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Best Digital Marketing Company in Kerala | Vanspire Innovations',
  description:
    'Vanspire is recognized as the best digital marketing company in Kerala. We specialize in comprehensive cloud marketing, SEO, and technology-driven growth strategies.',
  alternates: {
    canonical: '/best-digital-marketing-company-in-kerala',
  },
}

export default function KeralaDigitalMarketingPage() {
  return (
    <>
      <HomeHero />
      <BrandStatement />
      <CurrentFocus />
      <Capabilities />
      <Philosophy />
      <FutureReady />
      <ValuesSection />
      <CTASection />
    </>
  )
}
