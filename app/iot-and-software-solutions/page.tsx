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
  title: 'Top IoT and Software Solutions Company | Vanspire Innovations',
  description:
    'Vanspire provides industry-leading IoT solutions, enterprise software, and scalable technology infrastructure designed for long-term growth and digital transformation.',
  alternates: {
    canonical: '/iot-and-software-solutions',
  },
}

export default function IotSoftwareSolutionsPage() {
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
