import React from 'react'
import Link from 'next/link'

type EventCardProps = {
  id: string
  title: string
  date: string
  time: string
  description: string
  image: string
  category: string
}

export default function EventCard({ id, title, date, time, description, image, category }: EventCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-[var(--light)] shadow-sm transition hover:shadow-md">
      <div className="relative">
        <img src={image} alt="" className="w-full aspect-[4/3] object-cover" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[color:rgb(0_0_0_/_0.35)] to-transparent" />
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-semibold text-[var(--black)]">
            {category}
          </span>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h4 className="font-serif text-lg font-semibold leading-snug text-[var(--brown)]">{title}</h4>
        <div className="flex items-center gap-2 text-xs text-[color:rgb(0_0_0_/_0.6)]">
          <ClockIcon className="h-3.5 w-3.5" />
          <span>{date} - {time}</span>
        </div>
        <p className="text-sm leading-relaxed text-[color:rgb(0_0_0_/_0.75)] line-clamp-3">{description}</p>
        <Link href={`/evenements/${id}`} className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-4 py-2.5 text-sm font-semibold text-[var(--black)] ring-offset-2 transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[color:rgb(212_175_55_/_0.5)]">
          Voir les détails
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
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

