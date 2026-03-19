interface ModuleCardProps {
  icon: string
  title: string
  benefit: string
}

export default function ModuleCard({ icon, title, benefit }: ModuleCardProps) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl border border-accent hover:shadow-md transition-shadow duration-200">
      <span className="text-3xl flex-shrink-0 leading-none mt-0.5">{icon}</span>
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
        <p className="text-foreground/60 text-sm leading-snug">{benefit}</p>
      </div>
    </div>
  )
}
