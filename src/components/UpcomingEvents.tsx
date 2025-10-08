import React from 'react'
import Link from 'next/link'

type EventCardProps = {
  title: string
  date: string
  description: string
  image: string
}

function EventCard({ title, date, description, image }: EventCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-[var(--light)] shadow-sm transition hover:shadow-md">
      <div className="relative">
        <img src={image} alt="" className="w-full aspect-[4/3] object-cover" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[color:rgb(0_0_0_/_0.35)] to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <h4 className="font-serif text-lg font-semibold leading-snug text-[var(--brown)]">{title}</h4>
        <div className="flex items-center gap-2 text-xs text-[color:rgb(0_0_0_/_0.6)]">
          <ClockIcon className="h-3.5 w-3.5" />
          <span>{date}</span>
        </div>
        <p className="text-sm leading-relaxed text-[color:rgb(0_0_0_/_0.75)] line-clamp-3">{description}</p>
        <Link href="/evenements" className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-4 py-2.5 text-sm font-semibold text-[var(--black)] ring-offset-2 transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[color:rgb(212_175_55_/_0.5)]">
          Réserver vos places
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function UpcomingEvents() {
  const cards: EventCardProps[] = [
    {
      title: 'Exposition temporaire : Art contemporain africain',
      date: '15 Décembre 2024 - 18h00',
      description: 'Découvrez les œuvres d’artistes contemporains africains émergents.',
      image: '/images/exposition peinture.png',
    },
    {
      title: 'Concert de musique traditionnelle',
      date: '20h00',
      description: 'Une soirée musicale exceptionnelle avec des artistes renommés.',
      image: '/images/exposition music.png',
    },
    {
      title: 'Atelier céramique',
      date: '18h00',
      description: 'Apprenez les techniques ancestrales de poterie.',
      image: '/images/exposition sculture.png',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="text-center">
        <h3 className="font-serif text-2xl font-semibold text-[var(--brown)] sm:text-3xl">
          Événements à venir
        </h3>
      </div>

      <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <EventCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-4a1 1 0 110-2h3V7a1 1 0 112 0v5a1 1 0 01-1 1z" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L16.586 12H4a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
    </svg>
  )
}


