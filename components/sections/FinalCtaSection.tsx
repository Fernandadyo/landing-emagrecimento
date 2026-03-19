import CtaButton from '@/components/ui/CtaButton'
import {
  PRICE_FULL,
  PRICE_PROMO,
  PRICE_INSTALLMENTS,
  GARANTIA_DAYS,
  SHOW_SCARCITY,
} from '@/lib/constants'

const benefits = [
  'Método adaptável à rotina de quem trabalha muito',
  'Resultados visíveis sem dietas restritivas',
  'Treinos de no máximo 20 minutos por dia',
  'Suporte e comunidade exclusiva inclusos',
  'Acesso vitalício ao conteúdo e atualizações',
]

export default function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="py-20 bg-foreground text-white"
      aria-label="Oferta final"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Escassez condicional */}
        {SHOW_SCARCITY && (
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <span>🔥</span>
            <span>Oferta por tempo limitado — últimas vagas com desconto</span>
          </div>
        )}

        {/* Headline de fechamento */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Sua transformação começa com uma{' '}
          <span className="text-primary">decisão.</span>{' '}
          Essa decisão pode ser hoje.
        </h2>

        <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
          Tudo que você precisa para emagrecer com saúde — no seu ritmo, na sua rotina, sem abrir mão da sua vida.
        </p>

        {/* Lista de benefícios */}
        <ul className="flex flex-col gap-3 text-left max-w-md mx-auto mb-10">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-secondary font-bold text-lg leading-none mt-0.5 flex-shrink-0">
                ✅
              </span>
              <span className="text-white/80 text-sm md:text-base">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Bloco de preço */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-sm mx-auto">
          <p className="text-white/40 text-sm line-through mb-1">
            De {PRICE_FULL}
          </p>
          <p className="text-white font-bold text-4xl mb-1">{PRICE_PROMO}</p>
          <p className="text-white/60 text-sm">
            ou <strong className="text-white/80">{PRICE_INSTALLMENTS}</strong> sem juros
          </p>
        </div>

        {/* CTA principal */}
        <div className="flex flex-col items-center gap-4">
          <CtaButton
            text="Quero começar minha transformação agora →"
            location="final-cta"
            className="text-lg py-5 px-10 w-full sm:w-auto"
          />

          {/* Micro-copy de segurança */}
          <p className="text-white/40 text-xs flex items-center gap-1">
            🔒 Acesso imediato • Garantia de {GARANTIA_DAYS} dias • Pagamento seguro
          </p>
        </div>

      </div>
    </section>
  )
}
