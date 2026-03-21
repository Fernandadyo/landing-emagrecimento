export default function AnnouncementBar() {
  const items = [
    '✨ +10.000 mulheres transformadas',
    '⭐ 4.9/5 avaliações',
    '🔒 Garantia de 7 dias',
    '⚡ Acesso imediato',
    '💳 12x sem juros',
  ]

  // Duplicamos para criar o efeito de loop infinito perfeito
  const allItems = [...items, ...items]

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <div
        className="w-full overflow-hidden bg-[#D4654A] text-white py-2.5"
        aria-label="Barra de anúncio"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {allItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-8 text-sm font-semibold"
            >
              {item}
              <span className="opacity-40 ml-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
