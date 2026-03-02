import { SeoLandingPageProps } from './types'
import Button from '@/components/ui/Button'
import { ShieldCheck, Award, Zap } from 'lucide-react'

export default function ConversionUXVariant({ data }: { data: SeoLandingPageProps['conversion'] }) {
  if (!data) return null;

  return (
    <section className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative background grid and gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-brand-black to-brand-black opacity-80 z-0"></div>
      <div className="absolute inset-x-0 top-0 h-[1000px] w-full [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-14 font-light leading-relaxed max-w-3xl mx-auto">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={data.ctaLink}
              size="lg"
              className="bg-white text-brand-black hover:bg-white/90 shadow-xl shadow-white/5 hover:-translate-y-1 transition-all duration-300"
            >
              {data.ctaText}
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/50">
            <div className="flex flex-col items-center justify-center gap-3">
              <ShieldCheck className="w-8 h-8 opacity-70" />
              <span className="text-sm font-medium tracking-widest uppercase">Enterprise Secure</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Award className="w-8 h-8 opacity-70" />
              <span className="text-sm font-medium tracking-widest uppercase">Award Winning Agency</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Zap className="w-8 h-8 opacity-70" />
              <span className="text-sm font-medium tracking-widest uppercase">Data-Driven Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
