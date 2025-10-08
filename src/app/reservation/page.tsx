import React from 'react'
import Link from 'next/link'
import BenefitsSection from '@/components/reservation/BenefitsSection'
import ReservationForm from '@/components/reservation/ReservationForm'

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-[var(--beige)]">
      {/* Hero Section with Pattern */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--brown)] to-[var(--gold)] py-16">
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          {/* Breadcrumb */}
          <Link href="/billeterie" className="inline-flex items-center gap-2 text-sm text-[var(--light)]/90 hover:text-[var(--light)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la billeterie
          </Link>

          <div className="mt-8">
            <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--light)] sm:text-5xl lg:text-6xl">
              Planifiez votre visite
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--beige)]">
              Découvrez les trésors du patrimoine africain. Réservez dès maintenant votre visite guidée ou libre et profitez d&apos;une expérience culturelle inoubliable.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--light)]">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ouvert mar-dim 10h-19h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+221 33 849 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--light)] opacity-10" />
        <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--light)] opacity-10" />
        
        {/* Gradient blend to content */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--beige)]" />
      </div>

      {/* Content */}
      <div className="px-4 py-12">
        <BenefitsSection />
        <ReservationForm />
      </div>
    </div>
  )
}
