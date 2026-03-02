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
  title: 'Best Website Development Company in Kochi | Vanspire Innovations',
  description:
    'Looking for the best website development company in Kochi? Vanspire delivers premium, scalable web solutions, enterprise software, and robust cloud infrastructure.',
  alternates: {
    canonical: '/best-website-development-company-in-kochi',
  },
}

export default function KochiWebDevelopmentPage() {
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
