import { SeoLandingPageProps } from './types'
import SectionLabel from '@/components/ui/SectionLabel'
import { MapPin } from 'lucide-react'

export default function CitiesVariant({ data }: { data: SeoLandingPageProps['cities'] }) {
  if (!data || !data.list) return null;

  return (
    <section className="py-24 bg-white border-y border-brand-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Service Areas</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-black">
              {data.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {data.list.map((city, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-6 bg-brand-light border border-brand-border"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white border border-brand-border shrink-0">
                <MapPin className="w-5 h-5 text-brand-black" />
              </div>
              <h3 className="text-lg font-medium tracking-wide">
                {city}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
