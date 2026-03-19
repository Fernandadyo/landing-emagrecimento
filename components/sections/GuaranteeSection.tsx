import CtaButton from '@/components/ui/CtaButton'
import { GARANTIA_DAYS } from '@/lib/constants'

export default function GuaranteeSection() {
  return (
    <section
      className="py-20 bg-accent"
      aria-label="Garantia de satisfação"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Badge visual de garantia */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full border-4 border-primary bg-white flex flex-col items-center justify-center shadow-xl text-center p-4">
              <span className="text-3xl mb-1" aria-hidden="true">🔒</span>
              <p className="font-bold text-primary text-lg leading-none">
                {GARANTIA_DAYS} dias
              </p>
              <p className="text-foreground/60 text-xs mt-1 font-medium uppercase tracking-wide">
                de garantia
              </p>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Você não tem nada a perder —{' '}
              <span className="text-primary">e muito a ganhar</span>
            </h2>

            <p className="text-foreground/70 text-lg leading-relaxed">
              Experimente o curso por <strong>{GARANTIA_DAYS} dias</strong> com
              acesso completo a todo o conteúdo. Se por qualquer motivo você não
              ficar satisfeita, basta solicitar o reembolso diretamente pela
              Hotmart — sem perguntas, sem burocracia, 100% do seu dinheiro de
              volta.
            </p>

            <ul className="flex flex-col gap-2 text-sm text-foreground/65 md:text-left text-center">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-secondary font-bold">✓</span>
                Acesso imediato após a compra
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-secondary font-bold">✓</span>
                Reembolso via Hotmart em até 5 dias úteis
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-secondary font-bold">✓</span>
                Sem letra miúda, sem condições escondidas
              </li>
            </ul>

            <div className="pt-2">
              <CtaButton
                text="Quero começar com garantia →"
                location="guarantee"
              />
              <p className="text-xs text-foreground/40 mt-3">
                🔒 Pagamento seguro • Processado pela Hotmart
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
