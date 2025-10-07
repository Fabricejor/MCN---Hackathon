import React from 'react'
import Link from 'next/link'

type PriceRow = {
  label: string
  value: string
}

type VisitCardProps = {
  title: string
  icon: React.ReactNode
  items: PriceRow[]
}

function VisitCard({ title, icon, items }: VisitCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[var(--beige)] px-6 py-6 shadow-sm sm:px-8 sm:py-8">
      <div className="mb-4 flex items-center gap-3 text-[var(--brown)]">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/20">
          {icon}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <dl className="space-y-4">
        {items.map((row) => (
          <div key={row.label} className="grid grid-cols-2 items-baseline gap-4 text-sm sm:text-base">
            <dt className="text-[color:rgb(0_0_0_/_0.7)]">{row.label}</dt>
            <dd className="text-right font-medium text-[var(--black)]">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function VisitInfo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-semibold text-[var(--brown)] sm:text-4xl">
          Informations de visite
        </h2>
        <p className="mt-3 text-sm text-[color:rgb(0_0_0_/_0.7)] sm:text-base">
          Le Musée est ouvert du mardi au dimanche de 10h00 à 19h00.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
        <VisitCard
          title="Visite libre"
          icon={<UserIcon className="h-5 w-5 text-[#5C3A21]" />}
          items={[
            { label: 'Tarif plein', value: '3000 FCFA' },
            { label: 'Tarif scolaire et étudiant', value: '500 FCFA' },
            { label: 'Groupe (10 à 30 personnes)', value: '2500 FCFA/pers' },
          ]}
        />

        <VisitCard
          title="Visite guidée"
          icon={<UsersIcon className="h-5 w-5 text-[#5C3A21]" />}
          items={[
            { label: 'Tarif plein', value: '5000 FCFA' },
            { label: 'Tarif scolaire', value: '1000 FCFA' },
            { label: 'Tarif étudiant', value: '1500 FCFA' },
            { label: 'Groupe (10 à 30 personnes)', value: '4000 FCFA/pers' },
          ]}
        />
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <Link
          href="/reservation"
          className="rounded-md bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--black)] shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[color:rgb(212_175_55_/_0.5)] sm:px-8 sm:py-3.5"
        >
          Réserver une visite
        </Link>
      </div>
    </section>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h2a5 5 0 015-5 5 5 0 015 5h2c0-3.866-3.134-7-7-7z" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-8 0c2.21 0 4-1.79 4-4S10.21 3 8 3 4 4.79 4 7s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h2a4 4 0 014-4h4c1.86 0 3.41 1.28 3.86 3h2.02c-.49-2.84-2.94-5-5.88-5H8zm8 0c-.7 0-1.37.12-2 .34 2.33.82 4 3.04 4 5.66h4c0-3.31-2.69-6-6-6z" />
    </svg>
  )
}


