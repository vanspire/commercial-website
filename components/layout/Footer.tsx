'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Vanspire', href: '/about' },
    { name: 'Ventures', href: '/ventures' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ],
  ventures: [
    { name: 'Technology', href: '/ventures/technology' },
  ],
  legal: [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleSubscribe = () => {
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      {/* Top section */}
      <div className="container-site py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left: Brand block */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <img src="/whitelogo.svg" alt="Vanspire" className="h-8 w-auto" />
            </Link>
            <p className="text-white/50 font-light text-[15px] leading-relaxed max-w-sm mb-8">
              A future-focused brand group building technology-driven ventures.
              Structured for the long term.
            </p>

            {/* Contact info */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/40 text-[14px] font-light">
                <MapPin size={14} className="flex-shrink-0" />
                India
              </li>
              <li className="flex items-center gap-3 text-white/40 text-[14px] font-light">
                <Mail size={14} className="flex-shrink-0" />
                <a
                  href="mailto:hello@vanspire.in"
                  className="hover:text-white transition-colors duration-200"
                >
                  hello@vanspire.in
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Newsletter */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-4">
              Stay informed
            </p>
            <h3 className="text-2xl md:text-3xl font-light tracking-tighter text-white mb-6 leading-tight">
              Thought leadership,<br />straight to your inbox.
            </h3>
            <div className="flex gap-0 max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                disabled={subscribed}
                className="flex-1 px-4 h-[48px] text-[14px] bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-white/30 transition-colors font-light"
              />
              <button
                onClick={handleSubscribe}
                disabled={subscribed}
                className="h-[48px] px-6 bg-white text-brand-black text-[13px] font-medium hover:bg-white/90 transition-colors disabled:opacity-60 flex-shrink-0"
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </div>
            {error && <p className="text-red-400 text-[13px] mt-2">{error}</p>}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-12 border-t border-white/10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-5">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-5">Ventures</p>
            <ul className="space-y-3">
              {footerLinks.ventures.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-[13px] font-light text-white/20 italic">
                  More coming soon
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-5">Legal</p>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
          <p className="text-[13px] text-white/30 font-light">
            © {year} Vanspire. All rights reserved.
          </p>
          <p className="text-[13px] text-white/20 font-light">
            Building tomorrow&apos;s ventures, today.
          </p>
        </div>
      </div>
    </footer>
  )
}
