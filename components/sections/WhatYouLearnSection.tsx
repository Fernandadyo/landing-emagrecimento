import ModuleCard from '@/components/ui/ModuleCard'

const modules = [
  {
    icon: '🥗',
    title: 'Alimentação express',
    benefit: 'Monte refeições nutritivas em menos de 15 minutos',
    number: '01',
  },
  {
    icon: '🏃‍♀️',
    title: 'Treinos de 20min',
    benefit: 'Exercícios que cabem em qualquer agenda, sem academia',
    number: '02',
  },
  {
    icon: '💤',
    title: 'Sono e metabolismo',
    benefit: 'Como dormir melhor acelera o emagrecimento naturalmente',
    number: '03',
  },
  {
    icon: '🧠',
    title: 'Mentalidade anti-dieta',
    benefit: 'Pare de sabotar seus resultados e crie hábitos que duram',
    number: '04',
  },
  {
    icon: '📅',
    title: 'Planejamento semanal',
    benefit: 'Organize sua alimentação em 30 minutos por semana',
    number: '05',
  },
  {
    icon: '💧',
    title: 'Hidratação estratégica',
    benefit: 'O papel da água no seu metabolismo e como usar a seu favor',
    number: '06',
  },
  {
    icon: '💊',
    title: 'Suplementação inteligente',
    benefit: 'O que realmente funciona — e o que é só propaganda',
    number: '07',
  },
  {
    icon: '📊',
    title: 'Acompanhamento de progresso',
    benefit: 'Como medir resultados sem depender da balança',
    number: '08',
  },
]

export default function WhatYouLearnSection() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-accent/30"
      aria-label="O que você vai aprender"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-10">
          {/* Badge de destaque */}
          <span className="inline-block bg-secondary/20 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
            Aprenda no seu ritmo, no seu tempo
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Tudo que você vai dominar para transformar seu corpo{' '}
            <span className="text-primary">sem virar sua vida de cabeça pra baixo</span>
          </h2>

          <p className="mt-5 text-foreground/65 text-lg max-w-xl mx-auto">
            8 módulos práticos, diretos e feitos para quem tem agenda cheia.
          </p>
        </div>

        {/* Linha de destaques do curso */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-10 py-4 px-6 bg-white/60 rounded-2xl border border-foreground/10 max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-foreground/70">
            📚 8 módulos completos
          </span>
          <span className="hidden md:block w-px h-4 bg-foreground/20" />
          <span className="text-sm font-semibold text-foreground/70">
            🎥 +40 videoaulas
          </span>
          <span className="hidden md:block w-px h-4 bg-foreground/20" />
          <span className="text-sm font-semibold text-foreground/70">
            📱 Acesso vitalício
          </span>
        </div>

        {/* Grid de módulos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((mod, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-xs font-bold text-primary/60 px-1">
                {mod.number}
              </span>
              <ModuleCard
                icon={mod.icon}
                title={mod.title}
                benefit={mod.benefit}
              />
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <p className="text-center text-foreground/50 text-sm mt-10">
          + Bônus: comunidade exclusiva e suporte direto com a instrutora
        </p>

      </div>
    </section>
  )
}
