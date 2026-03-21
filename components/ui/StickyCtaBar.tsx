'use client'

import { useEffect, useState } from 'react'
import { trackCTAClick } from '@/lib/analytics'
import { HOTMART_URL, PRICE_PROMO, GARANTIA_DAYS } from '@/lib/constants'

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const finalCta = document.getElementById('final-cta')

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY < 400) { setIsVisible(false); return }

      if (finalCta) {
        const rect = finalCta.getBoundingClientRect()
        const ctaVisible = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(!ctaVisible)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* ── MOBILE: barra completa na base ── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 animate-slide-up
                   bg-foreground/95 backdrop-blur-md border-t border-white/10
                   px-4 py-3 flex items-center gap-3 shadow-2xl"
        role="complementary"
        aria-label="Oferta rápida"
      >
        <div className="flex flex-col leading-tight shrink-0">
          <span className="text-white/40 text-[11px] line-through">R$ 297</span>
          <span className="text-white font-bold text-base">{PRICE_PROMO}</span>
        </div>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTAClick('sticky-mobile')}
          aria-label="Comprar curso agora"
          className="btn-gradient flex-1 text-white font-bold py-3 px-4 rounded-xl text-sm text-center animate-pulse-glow"
        >
          🔥 Quero começar agora →
        </a>
      </div>

      {/* ── DESKTOP: botão flutuante canto inferior direito ── */}
      <div
        className="hidden md:flex fixed bottom-8 right-8 z-50 animate-slide-up flex-col items-end gap-2"
        aria-label="Oferta flutuante"
      >
        {/* Balãozinho de preço */}
        <div className="glass-card rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm">
          <span className="text-foreground/40 line-through text-xs">R$ 297</span>
          <span className="font-bold text-foreground">{PRICE_PROMO}</span>
          <span className="text-foreground/40 text-xs">• {GARANTIA_DAYS}d garantia</span>
        </div>

        {/* Botão principal flutuante */}
        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTAClick('sticky-desktop')}
          aria-label="Comprar curso agora na Hotmart"
          className="btn-gradient animate-pulse-glow text-white font-bold py-4 px-7
                     rounded-full text-base shadow-2xl flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">🔥</span>
          Quero começar agora →
        </a>
      </div>
    </>
  )
}
