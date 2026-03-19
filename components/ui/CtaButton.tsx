'use client'

import { trackCTAClick } from '@/lib/analytics'
import { HOTMART_URL } from '@/lib/constants'

interface CtaButtonProps {
  text?: string
  className?: string
  location?: string
}

export default function CtaButton({
  text = 'Quero começar minha transformação →',
  className = '',
  location = 'unknown',
}: CtaButtonProps) {
  return (
    <a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Comprar curso de emagrecimento na Hotmart"
      data-location={location}
      onClick={() => trackCTAClick(location)}
      className={`inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {text}
    </a>
  )
}
