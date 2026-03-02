import { SeoLandingPageProps } from './types'
import HeroVariant from './HeroVariant'
import StatsVariant from './StatsVariant'
import ServicesVariant from './ServicesVariant'
import CitiesVariant from './CitiesVariant'
import FAQVariant from './FAQVariant'
import ConversionUXVariant from './ConversionUXVariant'

export default function SeoLandingPage({ data }: { data: SeoLandingPageProps }) {
  // Generate FAQ Schema dynamically based on props
  const faqSchema = data.faqs?.items ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.items.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Generate Service/Local Schema based on props
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing & Software Solutions',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Vanspire',
      address: {
        '@type': 'PostalAddress',
        addressRegion: data.location,
        addressCountry: 'IN',
      }
    },
    areaServed: data.cities?.list?.map(city => ({
      '@type': 'City',
      name: city
    })) || [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: data.services?.items?.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      })) || []
    }
  };

  return (
    <>
      {/* Inject JSON-LD structured data */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* 
        Breadcrumb Navigation for Internal Linking
        In a real app, this might be dynamic based on the URL path. 
      */}
      <div className="bg-brand-light border-b border-brand-border py-4">
        <div className="container mx-auto px-4 md:px-8 text-sm text-brand-gray flex items-center gap-2">
          <a href="/" className="hover:text-brand-black transition-colors">Home</a>
          <span>/</span>
          <span className="text-brand-black font-medium">{data.location}</span>
        </div>
      </div>

      <HeroVariant data={data.hero} />
      <StatsVariant data={data.stats} />
      <ServicesVariant data={data.services} />
      <CitiesVariant data={data.cities} />
      <FAQVariant data={data.faqs} />
      <ConversionUXVariant data={data.conversion} />
    </>
  )
}
