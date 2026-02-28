import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Cloud & System Architecture Services | Vanspire Technology',
  description:
    'Vanspire designs and builds secure, scalable cloud infrastructure across AWS, GCP, and Azure. Cloud migrations, DevOps pipelines, hybrid architecture, and infrastructure-as-code for enterprise organisations.',
  keywords: [
    'cloud architecture services',
    'scalable infrastructure design',
    'secure system design',
    'AWS cloud consulting India',
    'DevOps pipeline setup',
    'cloud migration services',
    'infrastructure as code',
    'enterprise cloud engineering',
  ],
  openGraph: {
    title: 'Cloud & System Architecture | Vanspire Technology',
    description: 'Enterprise cloud infrastructure designed for reliability, cost efficiency, and security. AWS, GCP, Azure.',
    url: '/ventures/technology/services/cloud-system-architecture',
  },
  alternates: { canonical: '/ventures/technology/services/cloud-system-architecture' },
}

export default function CloudSystemArchitecturePage() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>
              <Link href="/ventures/technology" className="hover:text-brand-black transition-colors">Technology</Link>
              {' / '}Service
            </SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.02] mt-4 mb-8 max-w-4xl">
              Cloud &amp; System<br />Architecture
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Secure, scalable infrastructure built for growth. We design and provision
              cloud architectures that prioritise reliability, cost efficiency, security
              compliance, and developer experience - across AWS, GCP, and Azure.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <MotionWrapper>
                <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-[-0.03em] text-brand-black mb-6">
                  Infrastructure is not an afterthought. It is a foundation.
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.1}>
                <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                  <p>
                    Scalable cloud infrastructure is the foundation of resilient enterprise software.
                    Organizations that rush to cloud without architectural discipline pay a long-term
                    tax - in reliability incidents, engineering overhead, security exposure, and
                    spiraling infrastructure costs that are difficult to reverse.
                  </p>
                  <p>
                    Our cloud and infrastructure practice approaches every engagement at the
                    architecture level. We assess your current state, define your target state,
                    and design a transition path that minimises disruption while building lasting
                    operational advantage. Whether you are migrating from on-premise, modernising
                    a fragile cloud setup, or designing infrastructure for a new product - we bring
                    engineering discipline to every decision.
                  </p>
                  <p>
                    We work across AWS, Google Cloud, and Microsoft Azure, and implement
                    infrastructure-as-code practices that make your infrastructure versioned,
                    reproducible, and owned by your organisation - not locked to a consultant.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-6 tracking-tight">Core capabilities</h3>
                <div className="space-y-4">
                  {[
                    { t: 'Cloud Architecture Design', d: 'Multi-region, high-availability architectures designed for your scale and compliance requirements.' },
                    { t: 'Cloud Migration', d: 'Greenfield migrations, lift-and-shift assessments, and re-architecture of legacy workloads into cloud-native equivalents.' },
                    { t: 'DevOps & CI/CD Pipelines', d: 'Automated build, test, and deployment pipelines. Git-based workflows, staging environments, and rollback strategies.' },
                    { t: 'Infrastructure as Code (IaC)', d: 'Terraform, Pulumi, and AWS CDK implementations that make your infrastructure auditable and version-controlled.' },
                    { t: 'Security & Compliance Engineering', d: 'IAM architecture, secrets management, VPC design, and cloud security posture management.' },
                    { t: 'Cost Optimisation', d: 'Infrastructure audit, resource rightsizing, reserved instance analysis, and ongoing cost governance frameworks.' },
                  ].map((item) => (
                    <div key={item.t} className="border-b border-brand-border pb-4">
                      <h4 className="text-[15px] font-medium text-brand-black mb-1">{item.t}</h4>
                      <p className="text-[14px] font-light text-brand-muted">{item.d}</p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">Platforms & tooling</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Datadog', 'Cloudflare', 'Nginx', 'PostgreSQL RDS', 'Redis'].map((tech) => (
                    <span key={tech} className="text-[12px] font-medium text-brand-muted border border-brand-border px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            <div className="lg:col-span-5">
              <MotionWrapper delay={0.15}>
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80"
                  alt="Cloud infrastructure architecture"
                  className="w-full h-[320px] object-cover mb-8"
                />
                <div className="bg-brand-offwhite p-8">
                  <p className="text-label text-brand-muted mb-4">Related Services</p>
                  <div className="space-y-3">
                    {[
                      { t: 'Software & Web Platforms', h: '/ventures/technology/services/software-web-platforms' },
                      { t: 'Digital Transformation', h: '/ventures/technology/services/digital-transformation' },
                      { t: 'IoT & Smart Solutions', h: '/ventures/technology/services/iot-smart-solutions' },
                    ].map((s) => (
                      <Link key={s.t} href={s.h} className="block text-[14px] font-light text-brand-muted hover:text-brand-black transition-colors border-b border-brand-border pb-3 last:border-0">
                        {s.t} →
                      </Link>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#060608]">
        <div className="container-site max-w-3xl">
          <MotionWrapper>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-white mb-6">
              Rethinking your infrastructure?
            </h2>
            <p className="text-[15px] font-light text-white/50 mb-10 leading-[1.85]">
              We begin cloud engagements with an infrastructure discovery - reviewing your existing
              architecture, identifying risk points, and mapping a structured path forward.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 h-[52px] px-10 bg-white text-[#060608] text-[14px] font-medium hover:bg-white/90 transition-all">
              Start a Conversation →
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
