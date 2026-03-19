const pains = [
  {
    icon: '⏰',
    text: 'Você acorda cedo, tem mil compromissos e quando lembra já é noite — sem tempo para dieta ou treino.',
  },
  {
    icon: '😞',
    text: 'Já tentou tantos métodos que perdeu a conta. Começa animada e depois a rotina engole tudo.',
  },
  {
    icon: '💭',
    text: 'Sente aquela culpa silenciosa de saber que deveria cuidar mais da saúde, mas simplesmente não consegue encaixar.',
  },
  {
    icon: '🚫',
    text: 'Toda promessa milagrosa soa falsa — porque você já foi enganada antes e não quer perder dinheiro de novo.',
  },
  {
    icon: '🪞',
    text: 'Você tem sucesso na vida profissional, mas se olha no espelho e sente que não se cuida como merece.',
  },
]

const solutions = [
  {
    icon: '⚡',
    title: 'Rápido',
    description: 'Resultados visíveis em semanas, não meses. Método direto ao ponto.',
  },
  {
    icon: '🔄',
    title: 'Adaptável',
    description: 'Funciona com qualquer agenda. Sem horários fixos, sem academia obrigatória.',
  },
  {
    icon: '✅',
    title: 'Sem complicação',
    description: 'Sem contar caloria, sem planilha, sem culpa. Simples o suficiente para durar.',
  },
]

export default function PainSolutionSection() {
  return (
    <section className="py-20 bg-white" aria-label="Seção dor e solução">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bloco de dor */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-foreground/40 uppercase tracking-widest mb-4">
            Eu sei como você se sente
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 max-w-2xl">
            Se você se identificou com alguma dessas situações, esse curso foi feito para você.
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pains.map((pain, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-foreground/[0.03] border border-foreground/10"
              >
                <span className="text-2xl flex-shrink-0">{pain.icon}</span>
                <p className="text-foreground/75 leading-relaxed text-sm md:text-base">
                  {pain.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Transição emocional */}
        <div className="text-center py-12 my-4">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary font-bold italic max-w-2xl mx-auto leading-snug">
            &ldquo;E se eu te dissesse que existe um jeito diferente?&rdquo;
          </p>
          <div className="mt-4 w-16 h-1 bg-primary/30 rounded-full mx-auto" />
        </div>

        {/* Bloco de solução */}
        <div className="bg-accent rounded-3xl p-8 md:p-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            A solução
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Um método criado para quem <span className="text-primary">não tem tempo a perder</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl">
            Emagreça com saúde no tempo que você tem — sem abrir mão da sua rotina, da sua vida e do seu prazer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3"
              >
                <span className="text-3xl">{sol.icon}</span>
                <h3 className="font-bold text-lg text-foreground">{sol.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
