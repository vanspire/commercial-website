import React from 'react'
import { EnterpriseAppLandingPageProps } from './types'
import EnterpriseHero from './EnterpriseHero'
import AppShowcase from './AppShowcase'
import TechStack from './TechStack'
import ArchitectureDiagram from './ArchitectureDiagram'
import BentoFeatureShowcase from './BentoFeatureShowcase'
import AgileTimeline from './AgileTimeline'
import IndustrySolutions from './IndustrySolutions'
import SecurityCompliance from './SecurityCompliance'
import NationwideCoverage from './NationwideCoverage'
import EnterpriseCTA from './EnterpriseCTA'

export default function EnterpriseAppLandingPage({ data }: { data: EnterpriseAppLandingPageProps }) {
  // Generate JSON-LD schema for Service/SoftwareApplication
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Mobile App Development',
    provider: {
      '@type': 'Organization',
      name: 'Vanspire Innovations',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in',
    },
    areaServed: data.coverage.cities.map(city => ({
      '@type': 'City',
      name: city
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: data.bentoFeatures.items.map((item, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.description
        },
        position: index + 1
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-white selection:bg-brand-black selection:text-white">
        <EnterpriseHero data={data.hero} />
        <AppShowcase data={data.showcase} />
        <TechStack data={data.techStack} />
        <ArchitectureDiagram data={data.architecture} />
        <BentoFeatureShowcase data={data.bentoFeatures} />
        <AgileTimeline data={data.timeline} />
        <IndustrySolutions data={data.solutions} />
        <SecurityCompliance data={data.security} />
        <NationwideCoverage data={data.coverage} />
        <EnterpriseCTA data={data.conversion} />
      </div>
    </>
  )
}
