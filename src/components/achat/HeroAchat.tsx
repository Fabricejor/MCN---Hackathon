import React from 'react'

export default function HeroAchat() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[var(--brown)] to-[var(--gold)] py-16 text-center">
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--light)] sm:text-5xl">
          Boutique en ligne
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--beige)]">
          Découvrez notre sélection d&apos;articles culturels et souvenez-vous de votre visite au Musée des Civilisations Noires
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[var(--light)]">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Livraison gratuite</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Support client 7j/7</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--light)] opacity-10" />
      <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--light)] opacity-10" />
      
      {/* Gradient blend to content */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--beige)]" />
    </div>
  )
}

