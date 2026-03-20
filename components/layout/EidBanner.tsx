'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function EidBanner({ onDismiss }: { onDismiss?: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the banner
    const dismissed = localStorage.getItem('eid-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('eid-banner-dismissed', 'true');
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-eid-gold to-eid-gold-light text-eid-navy py-2.5 px-4 text-center z-[60] shadow-md border-b border-eid-navy/10 flex items-center justify-center min-h-[40px]">
      <p className="text-sm md:text-base font-medium pr-8">
        Eid Mubarak from Vanspire! ✨
      </p>
      <button
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-eid-navy/10 rounded-full transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} className="text-eid-navy" />
      </button>
    </div>
  );
}
