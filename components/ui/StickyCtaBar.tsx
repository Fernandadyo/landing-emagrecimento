'use client'

import { useEffect, useState } from 'react'
import { HOTMART_URL, GARANTIA_DAYS } from '@/lib/constants'

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar a barra após scrollar além da hero (300px)
    // Esconder quando a seção final CTA estiver visível
    const finalCta = document.getElementById('final-cta')

    const handleScroll = () => {
      const scrollY = window.scrollY
      const showBar = scrollY > 300

      if (!showBar) {
        setIsVisible(false)
        return
      }

      // Esconder quando o CTA final estiver na viewport
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
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-foreground border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl"
      role="complementary"
      aria-label="Oferta rápida"
    >
      <div className="flex flex-col leading-tight">
        <span className="text-white/60 text-xs line-through">R$ 297,00</span>
        <span className="text-white font-bold text-sm">R$ 197,00</span>
      </div>

      <a
        href={HOTMART_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar curso de emagrecimento na Hotmart"
        className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl text-sm text-center transition-colors duration-150"
      >
        Quero começar agora →
      </a>

      <p className="text-white/30 text-xs hidden xs:block">
        🔒 {GARANTIA_DAYS}d
      </p>
    </div>
  )
}
