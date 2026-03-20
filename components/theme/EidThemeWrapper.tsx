'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function EidThemeWrapper() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Handle client-side initialization
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle No-Animations Global Class toggle
  useEffect(() => {
    if (animationsEnabled) {
      document.documentElement.classList.remove('no-animations');
    } else {
      document.documentElement.classList.add('no-animations');
    }
  }, [animationsEnabled]);

  // Handle Cursor Trail
  useEffect(() => {
    if (!animationsEnabled || windowSize.width < 768) return; // Disable cursor on mobile or if disabled

    const handleMouseMove = (e: MouseEvent) => {
      // Don't spawn particles over text or interactive elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'P' || 
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        return;
      }

      // Throttle particle creation a bit randomly
      if (Math.random() > 0.4) return;

      const particle = document.createElement('div');
      particle.className = 'fixed pointer-events-none z-[40] w-1.5 h-1.5 rounded-full bg-eid-gold opacity-100';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      // Randomize initial motion
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed + 1; // Slight downward drift

      document.body.appendChild(particle);

      let opacity = 0.6;
      let x = e.clientX;
      let y = e.clientY;

      const animate = () => {
        opacity -= 0.02;
        x += vx;
        y += vy;
        
        if (opacity <= 0) {
          particle.remove();
        } else {
          particle.style.opacity = opacity.toString();
          particle.style.transform = `translate(${x - e.clientX}px, ${y - e.clientY}px) scale(${opacity * 2})`;
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animationsEnabled, windowSize]);

  // Generate background particles once
  const bgParticles = React.useMemo(() => {
    if (windowSize.width === 0) return []; // skip initial server render
    const count = windowSize.width < 768 ? 8 : 20;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 20,
      isStar: Math.random() > 0.3
    }));
  }, [windowSize]);

  return (
    <>
      {/* Background Islamic Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zM15 15l15 15-15 15L0 30l15-15zm30 0l15 15-15 15-15-15 15-15z' fill='%23D4AF37' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Background Particles System */}
      {animationsEnabled && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {bgParticles.map((p) => (
            <div
              key={p.id}
              className="absolute text-eid-gold/20"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                fontSize: `${p.size}px`,
                animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
              }}
            >
              {p.isStar ? '★' : '☪'}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setAnimationsEnabled(!animationsEnabled)}
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center p-3 rounded-full bg-eid-navy/80 backdrop-blur-md border border-eid-gold/30 text-eid-cream shadow-lg transition-transform hover:scale-105"
        aria-label="Toggle Festive Animations"
        title="Toggle Festive Animations"
      >
        <Sparkles size={20} className={animationsEnabled ? 'text-eid-gold' : 'text-brand-muted'} />
      </button>
    </>
  );
}
