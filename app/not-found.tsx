import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-serif font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Página não encontrada
        </h1>
        <p className="text-foreground/60 mb-8">
          Ops! Esta página não existe. Que tal voltar para a página principal e
          conhecer o método?
        </p>
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Voltar para o início →
        </Link>
      </div>
    </main>
  )
}
