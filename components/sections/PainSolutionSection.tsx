const pains = [
  {
    icon: '😩',
    text: 'Já tentei tudo e nada funciona por mais de 2 semanas',
  },
  {
    icon: '⏰',
    text: 'Não tenho tempo — trabalho 10h por dia e ainda cuido da casa',
  },
  {
    icon: '🍕',
    text: 'Faço dieta de segunda a sexta e compensa tudo no fim de semana',
  },
  {
    icon: '💪',
    text: 'Academia? Já paguei 3 anos de mensalidade e fui 4 vezes',
  },
  {
    icon: '😔',
    text: 'Me sinto culpada quando como algo que "não devia"',
  },
]

const solutions = [
  {
    icon: '⚡',
    title: 'Treinos de 20 min',
    description: 'Exercícios que cabem em qualquer agenda, sem precisar de academia ou equipamento.',
    tag: 'Incluso no curso',
  },
  {
    icon: '🥗',
    title: 'Receitas de 10 min',
    description: 'Refeições nutritivas e gostosas que qualquer pessoa consegue preparar rápido.',
    tag: 'Incluso no curso',
  },
  {
    icon: '🧠',
    title: 'Mindset sem culpa',
    description: 'Pare de sabotar seus resultados e construa uma relação saudável com a comida.',
    tag: 'Incluso no curso',
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
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-foreground/10 border-l-4 border-l-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="flex-shrink-0 leading-none mt-0.5" style={{ fontSize: '2rem' }}>{pain.icon}</span>
                <p className="text-foreground/75 leading-relaxed text-sm md:text-base">
                  {pain.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Transição emocional — quote inspiracional em destaque */}
        <div className="text-center py-14 my-4">
          <div className="inline-block rounded-3xl px-8 py-10 max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl lg:text-[2rem] text-primary font-bold italic leading-snug">
              &ldquo;O problema não é você. É o método que foi feito para outra realidade.&rdquo;
            </p>
            <div className="mt-6 w-16 h-1 bg-primary/30 rounded-full mx-auto" />
          </div>
        </div>

        {/* Bloco de solução */}
        <div className="rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #F0E6D3 0%, #F0E6D3cc 100%)' }}>
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
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3 border border-primary/30 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{sol.icon}</span>
                <h3 className="font-bold text-lg text-foreground">{sol.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed flex-1">
                  {sol.description}
                </p>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  ✓ {sol.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
