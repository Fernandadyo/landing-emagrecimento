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
      className={`inline-block btn-gradient text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg ${className}`}
    >
      {text}
    </a>
  )
}
