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
              className="group flex flex-col md:flex-row md:items-center gap-4 p-6 md:px-8 bg-white border border-brand-border/60 hover:bg-brand-black hover:border-brand-black transition-colors duration-300 rounded-2xl shadow-sm hover:shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-brand-light rounded-full border border-brand-border/50 shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-brand-black group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium tracking-wide text-brand-black group-hover:text-white transition-colors duration-300">
                {city}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
