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
  title: 'Vanspire | Building the Foundations for Tomorrow\'s Industries',
  description:
    'Vanspire is a future-focused brand group creating scalable systems, solutions, and ventures - starting with technology and expanding with purpose. Enterprise software, web platforms, cloud architecture, and IoT solutions.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
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
