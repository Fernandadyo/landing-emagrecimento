import ModuleCard from '@/components/ui/ModuleCard'

const modules = [
  {
    icon: '🥗',
    title: 'Alimentação express',
    benefit: 'Monte refeições nutritivas em menos de 15 minutos',
  },
  {
    icon: '🏃‍♀️',
    title: 'Treinos de 20min',
    benefit: 'Exercícios que cabem em qualquer agenda, sem academia',
  },
  {
    icon: '💤',
    title: 'Sono e metabolismo',
    benefit: 'Como dormir melhor acelera o emagrecimento naturalmente',
  },
  {
    icon: '🧠',
    title: 'Mentalidade anti-dieta',
    benefit: 'Pare de sabotar seus resultados e crie hábitos que duram',
  },
  {
    icon: '📅',
    title: 'Planejamento semanal',
    benefit: 'Organize sua alimentação em 30 minutos por semana',
  },
  {
    icon: '💧',
    title: 'Hidratação estratégica',
    benefit: 'O papel da água no seu metabolismo e como usar a seu favor',
  },
  {
    icon: '💊',
    title: 'Suplementação inteligente',
    benefit: 'O que realmente funciona — e o que é só propaganda',
  },
  {
    icon: '📊',
    title: 'Acompanhamento de progresso',
    benefit: 'Como medir resultados sem depender da balança',
  },
]

export default function WhatYouLearnSection() {
  return (
    <section
      className="py-20 bg-background"
      aria-label="O que você vai aprender"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-14">
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

        {/* Grid de módulos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((mod, i) => (
            <ModuleCard
              key={i}
              icon={mod.icon}
              title={mod.title}
              benefit={mod.benefit}
            />
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
