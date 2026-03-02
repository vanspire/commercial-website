import { SeoLandingPageProps } from './types'
import Button from '@/components/ui/Button'

export default function ConversionUXVariant({ data }: { data: SeoLandingPageProps['conversion'] }) {
  if (!data) return null;

  return (
    <section className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-x-0 top-0 h-[1000px] w-full [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 font-light leading-relaxed">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={data.ctaLink}
              variant="secondary"
              size="lg"
            >
              {data.ctaText}
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10 hover:border-white"
            >
              Contact Sales
            </Button>
          </div>
          
          {/* Trust Badges placeholder */}
          <div className="mt-16 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="text-sm font-medium tracking-widest uppercase">Trusted By Leaders</div>
            {/* Real logos would go here */}
          </div>
        </div>
      </div>
    </section>
  )
}
