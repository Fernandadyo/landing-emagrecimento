import Image from 'next/image'
import CtaButton from '@/components/ui/CtaButton'

export default function TransformacaoSection() {
  return (
    <section
      className="py-20 bg-foreground"
      aria-label="A transformação que você merece"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            A transformação que você merece
          </h2>
        </div>

        {/* Galeria 2x2 */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 mb-12">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/images/resultado-corpo.jpg"
              alt="Resultado — corpo de frente, leggings e top cinza"
              width={400}
              height={533}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/images/vida-social.jpg"
              alt="Vida social — vestido elegante verde em evento noturno"
              width={400}
              height={533}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/images/bikini-resultado.jpg"
              alt="Biquíni verde de frente na piscina — resultado conquistado"
              width={400}
              height={533}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/images/festa-danca.jpg"
              alt="Dançando em festa — celebrando a vida com confiança"
              width={400}
              height={533}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Copy inspiracional */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-8">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed italic">
            &ldquo;Imagine se vestir bem, se sentir leve e curtir cada momento com o corpo que você sempre quis. Isso é possível. E mais rápido do que você imagina.&rdquo;
          </p>
          <CtaButton location="transformacao" text="Eu quero isso para mim →" />
        </div>
      </div>
    </section>
  )
}
