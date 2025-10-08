import React from 'react'

interface EventsSectionProps {
  title?: string
  children: React.ReactNode
}

export default function EventsSection({ title = 'Événements à venir', children }: EventsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="text-center">
        <h3 className="font-serif text-2xl font-semibold text-[var(--brown)] sm:text-3xl">
          {title}
        </h3>
      </div>

      <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  )
}

