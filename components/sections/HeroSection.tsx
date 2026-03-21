import Image from 'next/image'
import CtaButton from '@/components/ui/CtaButton'
import { SOCIAL_PROOF_COUNT } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-screen flex items-center" aria-label="Seção principal">

      {/* Partículas decorativas */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Coluna da imagem */}
          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="relative">
              {/* Anel decorativo */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary via-neon to-secondary opacity-30 blur-xl scale-110" />

              <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/hero-fitness.jpg"
                  alt="Mulher com corpo definido e saudável em roupa fitness"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 380px"
                  className="object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>

              {/* Badge resultado */}
              <div className="animate-float absolute -bottom-4 -left-6 glass-card rounded-2xl shadow-2xl px-5 py-3.5 flex items-center gap-3 border border-primary/30">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-[11px] text-foreground/60 leading-none mb-0.5">Primeiros resultados</p>
                  <p className="text-sm font-bold text-foreground">em 2 semanas</p>
                </div>
              </div>

              {/* Badge avaliação */}
              <div className="animate-float [animation-delay:1.5s] absolute -top-4 -right-4 glass-card rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2.5 border border-secondary/30">
                <div className="flex gap-0.5 text-amber-400">★★★★★</div>
                <p className="text-xs font-bold text-foreground">4.9/5</p>
              </div>
            </div>
          </div>

          {/* Coluna de texto */}
          <div className="flex flex-col gap-6 order-2 md:order-1">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-secondary/20 text-secondary font-semibold text-sm px-4 py-2 rounded-full border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              +{SOCIAL_PROOF_COUNT} mulheres transformadas
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08]">
              Emagreça sem{' '}
              <span className="text-gradient">abrir mão</span>
              {' '}da sua rotina
            </h1>

            {/* Sub */}
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
              O método prático para mulheres ocupadas que querem emagrecer com saúde — sem dietas complexas, sem treinos longos, sem culpa.
            </p>

            {/* Contador */}
            <div className="flex items-center gap-4 py-1">
              <span className="text-5xl font-extrabold text-gradient">10.000+</span>
              <span className="text-white/50 text-sm leading-tight">mulheres já<br />transformaram sua vida</span>
            </div>

            {/* CTA */}
            <CtaButton location="hero" className="animate-pulse-glow text-base md:text-lg" />

            {/* Trust */}
            <div className="flex flex-wrap gap-5 text-sm text-white/40">
              <span className="flex items-center gap-1.5">🔒 Pagamento seguro</span>
              <span className="flex items-center gap-1.5">⚡ Acesso imediato</span>
              <span className="flex items-center gap-1.5">🛡️ Garantia de 7 dias</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
