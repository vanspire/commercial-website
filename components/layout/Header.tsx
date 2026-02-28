'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'About', href: '/about' },
  {
    name: 'Ventures',
    href: '/ventures',
    children: [{ name: 'Technology', href: '/ventures/technology' }],
  },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const pathname = usePathname()

  // Pages where header is always scrolled (solid bg)
  const alwaysSolid = [
    '/about',
    '/ventures',
    '/insights',
    '/contact',
    '/terms',
    '/privacy',
  ].some((p) => pathname.startsWith(p))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isSolid = alwaysSolid || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-white border-b border-brand-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex items-center justify-between h-[75px] md:h-[85px]">
        {/* Logo / Wordmark */}
        <Link href="/" aria-label="Vanspire home" className="flex items-center gap-2 group">
          <span
            className={`text-[1.4rem] font-semibold tracking-[-0.04em] transition-colors duration-300 ${
              isSolid ? 'text-brand-black' : 'text-white'
            }`}
          >
            Vanspire
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[14px] font-light transition-colors duration-300 ${
                  isSolid
                    ? 'text-brand-black hover:text-brand-muted'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className="mt-[1px] opacity-60 transition-transform group-hover:rotate-180 duration-200"
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute left-0 top-[calc(100%+12px)] min-w-[180px] bg-white border border-brand-border shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="block px-5 py-3 text-[13px] text-brand-black hover:bg-brand-offwhite transition-colors duration-150 font-light"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={ `hidden lg:inline-flex items-center h-[42px] px-6 text-[13px] font-medium border transition-all duration-300 hover:scale-[0.98] ${isSolid ? 'bg-brand-black text-white border-brand-black hover:bg-white hover:text-brand-black' : 'bg-white text-brand-black border-brand-black hover:bg-brand-black hover:text-white'}`}
        >
          Get in Touch
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          className="lg:hidden p-2"
        >
          <Menu
            size={22}
            className={`transition-colors duration-300 ${isSolid ? 'text-brand-black' : 'text-white'}`}
          />
        </button>
      </div>

      {/* Mobile Menu (full-screen overlay) */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />

        {/* Slide panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white flex flex-col transform transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 h-[75px] border-b border-brand-border">
            <span className="text-[1.4rem] font-semibold tracking-tightest text-brand-black">
              Vanspire
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={20} className="text-brand-black" />
            </button>
          </div>

          {/* Panel nav */}
          <nav className="flex flex-col flex-1 overflow-y-auto px-6 py-6 gap-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      className="w-full flex items-center justify-between py-4 text-[15px] font-light text-brand-black border-b border-brand-border"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="pl-4">
                        {item.children.map((child, i) => (
                          <Link
                            key={i}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 text-[14px] font-light text-brand-muted hover:text-brand-black transition-colors border-b border-brand-border/50"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-[15px] font-light text-brand-black border-b border-brand-border"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Panel CTA */}
          <div className="px-6 py-6 border-t border-brand-border">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center h-[50px] leading-[50px] bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
