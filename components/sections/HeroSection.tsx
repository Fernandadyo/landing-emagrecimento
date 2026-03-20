import Image from 'next/image'
import CtaButton from '@/components/ui/CtaButton'
import { SOCIAL_PROOF_COUNT } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      aria-label="Seção principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Coluna de texto */}
          <div className="flex flex-col gap-6 order-1">

            {/* Prova social */}
            <div className="inline-flex items-center gap-2 text-sm text-secondary font-medium">
              <span className="w-5 h-5 flex items-center justify-center bg-secondary/20 rounded-full text-xs">✓</span>
              <span>Mais de {SOCIAL_PROOF_COUNT} mulheres já transformaram sua vida</span>
            </div>

            {/* Headline principal — h1 único da página */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-tight">
              Emagreça sem abrir mão{' '}
              <span className="text-primary">da sua rotina</span>
            </h1>

            {/* Subheadline */}
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-lg">
              O método prático para mulheres ocupadas que querem emagrecer com
              saúde — sem dietas complexas, sem treinos longos, sem culpa.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <CtaButton location="hero" />
            </div>

            {/* Micro-credenciais */}
            <div className="flex flex-wrap gap-4 text-sm text-foreground/50">
              <span className="flex items-center gap-1">
                <span>🔒</span> Pagamento seguro
              </span>
              <span className="flex items-center gap-1">
                <span>⚡</span> Acesso imediato
              </span>
              <span className="flex items-center gap-1">
                <span>↩️</span> Garantia de 7 dias
              </span>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="order-2 relative">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Mulher sorrindo feliz e com saúde, transmitindo leveza e bem-estar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* Overlay sutil para integração com o fundo */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Badge flutuante */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-accent">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-foreground/60 leading-none mb-0.5">Resultado real</p>
                <p className="text-sm font-bold text-foreground">Método comprovado</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
