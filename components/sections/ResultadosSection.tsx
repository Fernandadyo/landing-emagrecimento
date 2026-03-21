import ImageCube from '@/components/ui/ImageCube'
import CtaButton from '@/components/ui/CtaButton'

export default function ResultadosSection() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden" aria-label="Resultados reais">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-neon to-secondary" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Cubo 3D */}
          <div className="flex justify-center">
            <ImageCube />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest">
              Resultados Reais
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              A transformação que{' '}
              <span className="text-gradient">você merece</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed">
              Imagine se vestir bem, se sentir leve e curtir cada momento com o corpo que você sempre quis. Isso é possível — e mais rápido do que você imagina.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '5–8kg',  label: 'média perdida' },
                { num: '60d',    label: 'de método' },
                { num: '98%',    label: 'satisfação' },
              ].map((s) => (
                <div key={s.num} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-extrabold text-gradient">{s.num}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <CtaButton location="resultados" text="Eu quero isso para mim →" />
          </div>

        </div>
      </div>
    </section>
  )
}
