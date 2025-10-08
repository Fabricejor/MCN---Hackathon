import React from 'react'
import PricingCardTwo, { type PricingFeature } from '@/components/pricing-card-triple'

export default function ReservationPricing() {
  const commonFeatures: PricingFeature[] = [
    { label: 'Accès aux collections permanentes' },
    { label: 'Accès expositions temporaires' },
    { label: 'Audioguide mobile' },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="text-center">
        <h3 className="font-serif text-2xl font-semibold text-[var(--brown)] sm:text-3xl">
          Réservation des billets
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-[color:rgb(0_0_0_/_0.65)]">
          Choisissez votre formule et réservez en ligne. Tarifs en FCFA.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PricingCardTwo
          name="Visite libre"
          subtitle="Idéale pour découvrir à votre rythme"
          price={3000}
          currency="FCFA "
          periodLabel="/pers"
          features={commonFeatures}
          tone="amber"
          cta={{ href: '/reservation', label: 'Réserver' }}
          nameClassName="text-[var(--black)] font-serif"
          ctaClassName="bg-[var(--gold)] text-[var(--black)] hover:brightness-95 rounded-xl shadow-md font-serif"
        />

        <PricingCardTwo
          name="Visite guidée"
          subtitle="Accompagné par un médiateur"
          price={5000}
          currency="FCFA "
          periodLabel="/pers"
          features={[...commonFeatures, { label: 'Guide dédié' }]}
          tone="amber"
          cta={{ href: '/reservation', label: 'Réserver' }}
          nameClassName="text-[var(--black)] font-serif"
          ctaClassName="bg-[var(--gold)] text-[var(--black)] hover:brightness-95 rounded-xl shadow-md font-serif"
        />

        <PricingCardTwo
          name="Groupe scolaire"
          subtitle="Sortie pédagogique encadrée"
          price={1000}
          currency="FCFA "
          periodLabel="/élève"
          features={[...commonFeatures, { label: 'Créneau réservé' }]}
          tone="amber"
          cta={{ href: '/reservation', label: 'Réserver' }}
          nameClassName="text-[var(--black)] font-serif"
          ctaClassName="bg-[var(--gold)] text-[var(--black)] hover:brightness-95 rounded-xl shadow-md font-serif"
        />
      </div>
    </section>
  )
}


