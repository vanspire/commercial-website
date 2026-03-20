'use client'

import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // KEEP THIS IN SYNC WITH Header.tsx darkHeroRoutes!
  // These routes have edge-to-edge dark heroes that sit neatly behind the transparent header.
  const darkHeroRoutes = [
    '/',
  ]

  const isDarkHeroRoute = darkHeroRoutes.includes(pathname)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('eid-banner-dismissed')) {
      setBannerVisible(false)
    }
  }, [])

  // If it's NOT a dark hero route, the header is solid white.
  // We must push the main content down so it doesn't render underneath the fixed header.
  return (
    <>
      {bannerVisible && <div className="h-[40px] w-full transition-all duration-300" />}
      <div className={!isDarkHeroRoute ? 'pt-[75px] md:pt-[85px]' : ''}>
        {children}
      </div>
    </>
  )
}
