interface TestimonialCardProps {
  name: string
  profession: string
  result: string
  quote: string
  avatarInitials: string
  avatarColor: string
}

export default function TestimonialCard({
  name,
  profession,
  result,
  quote,
  avatarInitials,
  avatarColor,
}: TestimonialCardProps) {
  return (
    <div
      data-testid="testimonial-card"
      className="flex flex-col gap-4 bg-white rounded-2xl p-6 border border-accent shadow-sm"
    >
      {/* Resultado em destaque */}
      <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-semibold px-3 py-1.5 rounded-full self-start">
        <span>✓</span>
        <span>{result}</span>
      </div>

      {/* Citação */}
      <blockquote className="text-foreground/75 text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Perfil */}
      <div className="flex items-center gap-3 pt-2 border-t border-accent">
        {/* Avatar com iniciais */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
          aria-hidden="true"
        >
          {avatarInitials}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-foreground/50 text-xs">{profession}</p>
        </div>
      </div>
    </div>
  )
}
