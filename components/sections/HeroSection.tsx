import Image from 'next/image'
import CtaButton from '@/components/ui/CtaButton'
import { SOCIAL_PROOF_COUNT } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Blobs decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Coluna de texto */}
          <div className="flex flex-col gap-6 order-2 md:order-1">

            {/* Pílula de prova social */}
            <div className="inline-flex items-center gap-2 self-start bg-secondary/15 text-secondary font-semibold text-sm px-4 py-2 rounded-full border border-secondary/25">
              <span className="w-4 h-4 flex items-center justify-center bg-secondary rounded-full text-white text-[10px]">✓</span>
              <span>+{SOCIAL_PROOF_COUNT} mulheres transformadas</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.12]">
              Emagreça sem abrir{' '}
              <span className="relative inline-block">
                <span className="text-primary">mão da sua</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 4 Q50 1 100 3 Q150 5 198 2" stroke="#D4654A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                </svg>
              </span>{' '}
              <span className="text-primary">rotina</span>
            </h1>

            {/* Subheadline */}
            <p className="text-foreground/65 text-lg md:text-xl leading-relaxed max-w-lg">
              O método prático para mulheres ocupadas que querem emagrecer com
              saúde — sem dietas complexas, sem treinos longos, sem culpa.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <CtaButton location="hero" className="animate-pulse-glow" />
            </div>

            {/* Micro-credenciais */}
            <div className="flex flex-wrap gap-5 text-sm text-foreground/50">
              <span className="flex items-center gap-1.5">
                <span className="text-base">🔒</span> Pagamento seguro
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-base">⚡</span> Acesso imediato
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-base">🛡️</span> Garantia de 7 dias
              </span>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="order-1 md:order-2 relative">
            {/* Círculo decorativo atrás da imagem */}
            <div className="absolute inset-4 bg-gradient-to-br from-accent via-primary/10 to-secondary/10 rounded-3xl" />

            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85"
                alt="Mulher com corpo saudável e tonificado, feliz e confiante"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Overlay gradiente suave na base */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
            </div>

            {/* Badge flutuante 1 — resultado */}
            <div className="animate-float absolute -bottom-5 -left-4 glass-card rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-[11px] text-foreground/50 leading-none mb-0.5">Resultado médio</p>
                <p className="text-sm font-bold text-foreground">5–8 kg em 60 dias</p>
              </div>
            </div>

            {/* Badge flutuante 2 — avaliação */}
            <div className="animate-float [animation-delay:1.5s] absolute -top-3 -right-3 glass-card rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5">
              <div className="flex gap-0.5 text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs font-semibold text-foreground">4.9/5</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
