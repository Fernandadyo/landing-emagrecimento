import TestimonialCard from '@/components/ui/TestimonialCard'

// Depoimentos representativos — substituir por depoimentos reais quando disponíveis
const testimonials = [
  {
    name: 'Carolina Souza',
    profession: 'Empreendedora, dona de e-commerce',
    result: 'Perdeu 7kg em 2 meses',
    quote:
      'Eu não acreditava que conseguiria emagrecer com minha rotina de 12h por dia trabalhando. O método se encaixou perfeitamente na minha agenda — faço os treinos de 20 minutos de manhã cedo e a alimentação ficou muito mais simples do que eu imaginava.',
    avatarInitials: 'CS',
    avatarColor: '#D4654A',
  },
  {
    name: 'Renata Lima',
    profession: 'Gerente de Marketing, CLT',
    result: 'Perdeu 5kg sem academia',
    quote:
      'Depois de anos tentando dietas que não duravam nem um mês, finalmente encontrei algo que eu consigo manter. Não preciso cozinhar por horas nem ir à academia todo dia. Em 6 semanas já sinto diferença no corpo e na disposição.',
    avatarInitials: 'RL',
    avatarColor: '#8B9E6E',
  },
  {
    name: 'Juliana Ferreira',
    profession: 'Professora e mãe de dois filhos',
    result: 'Perdeu 6kg em 3 meses',
    quote:
      'Mãe, professora, esposa — sempre fui a última da fila para me cuidar. Com esse curso aprendi que não precisa ser tudo perfeito. Pequenas mudanças que cabem na minha rotina fizeram uma diferença enorme. Me sinto outra pessoa.',
    avatarInitials: 'JF',
    avatarColor: '#B5763D',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" aria-label="Depoimentos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-foreground/40 uppercase tracking-widest mb-4">
            Histórias reais
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto leading-tight">
            Elas já viveram o que você está vivendo —{' '}
            <span className="text-primary">e mudaram</span>
          </h2>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Nota de rodapé */}
        <p className="text-center text-foreground/40 text-xs mt-8">
          * Depoimentos representativos. Resultados individuais podem variar.
        </p>

      </div>
    </section>
  )
}
