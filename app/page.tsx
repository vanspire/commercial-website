import type { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import BrandIntro from '@/components/sections/BrandIntro'
import VenturesOverview from '@/components/sections/VenturesOverview'
import WhyVanspire from '@/components/sections/WhyVanspire'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Vanspire | Future-Focused Brand Group',
  description:
    'Vanspire is a future-focused brand group building technology-driven ventures. Scalable digital systems, enterprise software, and cloud infrastructure - engineered for long-term growth.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandIntro />
      <VenturesOverview />
      <WhyVanspire />
      <CTASection />
    </>
  )
}
