'use client'

import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import { useState } from 'react'

// Metadata is exported from app/contact/layout.tsx (server component)
// This is a client component due to form state

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required.'
    if (!form.company.trim()) newErrors.company = 'Company name is required.'
    if (form.message.trim().length < 20) newErrors.message = 'Please provide more detail (min 20 characters).'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        // Surface server-side error to user
        setErrors({ message: data.error || 'Something went wrong. Please try again.' })
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setErrors({ message: 'Network error. Please check your connection and try again.' })
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>Contact</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-display-lg text-brand-black max-w-3xl mt-4 mb-8">
              Let&apos;s start with a conversation.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-body-lg text-brand-muted max-w-2xl">
              Whether you are exploring a technology partnership, seeking enterprise software
              solutions, or want to understand what Vanspire is building - we welcome serious
              enquiries. Use the form below and our team will respond within two business days.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Form + Info */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <MotionWrapper className="lg:col-span-7">
              {status === 'success' ? (
                <div className="bg-brand-offwhite border border-brand-border p-12 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h2 className="text-xl font-light tracking-tight text-brand-black mb-3">
                    Message received.
                  </h2>
                  <p className="text-[14px] font-light text-brand-muted">
                    Thank you. We&apos;ll review your enquiry and respond within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-label text-brand-muted block mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full h-[50px] px-4 border text-[14px] font-light bg-white text-brand-black placeholder-brand-border outline-none focus:border-brand-black transition-colors duration-200 ${
                          errors.name ? 'border-red-400' : 'border-brand-border'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-label text-brand-muted block mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full h-[50px] px-4 border text-[14px] font-light bg-white text-brand-black placeholder-brand-border outline-none focus:border-brand-black transition-colors duration-200 ${
                          errors.email ? 'border-red-400' : 'border-brand-border'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-6">
                    <label htmlFor="company" className="text-label text-brand-muted block mb-2">
                      Company / Organisation *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={`w-full h-[50px] px-4 border text-[14px] font-light bg-white text-brand-black placeholder-brand-border outline-none focus:border-brand-black transition-colors duration-200 ${
                        errors.company ? 'border-red-400' : 'border-brand-border'
                      }`}
                    />
                    {errors.company && <p className="text-red-400 text-[12px] mt-1">{errors.company}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="text-label text-brand-muted block mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, or enquiry..."
                      className={`w-full px-4 py-3 border text-[14px] font-light bg-white text-brand-black placeholder-brand-border outline-none focus:border-brand-black transition-colors duration-200 resize-none ${
                        errors.message ? 'border-red-400' : 'border-brand-border'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-[12px] mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="h-[52px] px-10 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-colors duration-300 disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </MotionWrapper>

            {/* Info panel */}
            <MotionWrapper delay={0.15} className="lg:col-span-5">
              <div className="space-y-10 pt-2">
                <div>
                  <p className="text-label text-brand-muted mb-3">Email</p>
                  <a href="mailto:hello@vanspire.in" className="text-[16px] font-light text-brand-black hover:text-brand-muted transition-colors">
                    hello@vanspire.in
                  </a>
                </div>

                <div>
                  <p className="text-label text-brand-muted mb-3">Response time</p>
                  <p className="text-[15px] font-light text-brand-black">Within 2 business days</p>
                </div>

                <div>
                  <p className="text-label text-brand-muted mb-3">Location</p>
                  <p className="text-[15px] font-light text-brand-black">India</p>
                </div>

                <div className="border-t border-brand-border pt-8">
                  <p className="text-[13px] font-light text-brand-muted leading-relaxed">
                    We work with organisations globally. Our Technology venture is fully
                    operational and accepting new engagements. Enterprise enquiries only.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
