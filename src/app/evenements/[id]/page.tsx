'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { upcomingEvents } from '@/components/evenements/EventsData'

export default function EventDetailPage() {
  const params = useParams()
  const event = upcomingEvents.find(e => e.id === params.id)

  if (!event) {
    return (
      <div className="min-h-screen bg-[var(--beige)] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[var(--brown)]">
            Événement non trouvé
          </h1>
          <Link href="/billeterie" className="mt-4 inline-block text-[var(--gold)] hover:underline">
            Retour à la billeterie
          </Link>
        </div>
      </div>
    )
  }

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

          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <div className="mb-4">
                <span className="rounded-full bg-[var(--light)] px-4 py-1.5 text-sm font-semibold text-[var(--brown)]">
                  {event.category}
                </span>
              </div>
              <h1 className="font-serif text-3xl font-bold leading-tight text-[var(--light)] sm:text-4xl lg:text-5xl">
                {event.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--light)]">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
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
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={event.image} 
                alt={event.title} 
                className="h-[400px] w-full object-cover"
              />
            </div>

            <div className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-[var(--brown)]">
                À propos de cet événement
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[color:rgb(0_0_0_/_0.75)]">
                {event.fullDescription}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-[var(--brown)]">
                Points forts
              </h2>
              <ul className="mt-5 space-y-4">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base leading-relaxed text-[color:rgb(0_0_0_/_0.75)]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Info Card */}
              <div className="rounded-2xl bg-[var(--light)] p-6 shadow-md ring-1 ring-black/5">
                <h3 className="font-serif text-lg font-semibold text-[var(--brown)]">
                  Informations pratiques
                </h3>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--brown)]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Lieu
                    </div>
                    <p className="mt-1 text-sm text-[color:rgb(0_0_0_/_0.7)]">
                      {event.location}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--brown)]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tarif
                    </div>
                    <p className="mt-1 text-sm text-[color:rgb(0_0_0_/_0.7)]">
                      {event.price}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--brown)]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Capacité
                    </div>
                    <p className="mt-1 text-sm text-[color:rgb(0_0_0_/_0.7)]">
                      {event.capacity}
                    </p>
                  </div>
                </div>

                <Link 
                  href="/reservation"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--gold)] px-6 py-3 font-serif font-semibold text-[var(--black)] shadow-md transition hover:brightness-95"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver
                </Link>
              </div>

              {/* Contact Card */}
              <div className="rounded-2xl bg-[var(--light)] p-6 shadow-md ring-1 ring-black/5">
                <h3 className="font-serif text-lg font-semibold text-[var(--brown)]">
                  Besoin d&apos;aide ?
                </h3>
                <p className="mt-2 text-sm text-[color:rgb(0_0_0_/_0.7)]">
                  Notre équipe est à votre disposition pour toute question
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[color:rgb(0_0_0_/_0.7)]">
                    <svg className="h-4 w-4 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +221 33 849 23 00
                  </div>
                  <div className="flex items-center gap-2 text-[color:rgb(0_0_0_/_0.7)]">
                    <svg className="h-4 w-4 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@mcn.sn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

