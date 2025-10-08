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
    <div className="overflow-hidden rounded-xl border border-black/10 bg-[var(--light)] shadow-sm">
      <img src={image} alt="" className="h-40 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h4 className="text-base font-semibold text-[var(--black)]">{title}</h4>
        <p className="text-xs text-[color:rgb(0_0_0_/_0.6)]">{date}</p>
        <p className="text-sm text-[color:rgb(0_0_0_/_0.7)]">{description}</p>
        <Link href="/evenements" className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[var(--gold)] px-4 py-2.5 text-sm font-semibold text-[var(--black)] hover:brightness-95">
          Réserver vos places
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
      image: '/images/billeterie%20v1%20event.png',
    },
    {
      title: 'Concert de musique traditionnelle',
      date: '20h00',
      description: 'Une soirée musicale exceptionnelle avec des artistes renommés.',
      image: '/images/billeterie%20v1%20event%20(2).png',
    },
    {
      title: 'Atelier céramique',
      date: '18h00',
      description: 'Apprenez les techniques ancestrales de poterie.',
      image: '/images/billeterie%20v1%20event%20(3).png',
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


