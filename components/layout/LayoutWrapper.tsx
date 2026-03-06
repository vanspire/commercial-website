'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // KEEP THIS IN SYNC WITH Header.tsx darkHeroRoutes!
  // These routes have edge-to-edge dark heroes that sit neatly behind the transparent header.
  const darkHeroRoutes = [
    '/',
  ]

  const isDarkHeroRoute = darkHeroRoutes.includes(pathname)

  // If it's NOT a dark hero route, the header is solid white.
  // We must push the main content down so it doesn't render underneath the fixed header.
  return (
    <div className={!isDarkHeroRoute ? 'pt-[75px] md:pt-[85px]' : ''}>
      {children}
    </div>
  )
}
