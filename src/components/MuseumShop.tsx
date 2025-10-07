"use client"
import React from 'react'
import Link from 'next/link'

type ShopItem = {
  title: string
  price: string
  image: string
}

function ShopCard({ title, price, image }: ShopItem) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-[var(--light)] shadow-sm">
      <img src={image} alt="" className="h-36 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h4 className="text-base font-semibold text-[var(--black)]">{title}</h4>
        <p className="text-sm text-[var(--brown)]">{price}</p>
        <Link href="/boutique" className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[var(--gold)] px-4 py-2.5 text-sm font-semibold text-[var(--black)] hover:brightness-95">
          Acheter
        </Link>
      </div>
    </div>
  )
}

export default function MuseumShop() {
  const [activeFilter, setActiveFilter] = React.useState<'Tous' | 'Livres' | 'Artisanat' | 'Reproductions'>('Tous')
  const items: ShopItem[] = [
    {
      title: 'Catalogue des collections',
      price: '8 500 FCFA',
      image: '/images/billeterie%20v1%20boutique.png',
    },
    {
      title: 'Masque artisanal',
      price: '12 000 FCFA',
      image: '/images/billeterie%20v1%20boutique%20(2).png',
    },
    {
      title: 'Cartes postales',
      price: '2 000 FCFA',
      image: '/images/billeterie%20v1%20boutique%20(3).png',
    },
    {
      title: 'Bijou inspiré des collections',
      price: '9 500 FCFA',
      image: '/images/billeterie%20v1%20boutique%20(4).png',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="text-center">
        <h3 className="font-serif text-2xl font-semibold text-[var(--brown)] sm:text-3xl">
          Boutique du musée
        </h3>
        <p className="mt-2 text-sm text-[color:rgb(0_0_0_/_0.7)]">Découvrez une sélection d’objets inspirés de nos collections.</p>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-md bg-[var(--beige)] px-2 py-2">
          {(['Tous', 'Livres', 'Artisanat', 'Reproductions'] as const).map((label) => {
            const isActive = activeFilter === label
            return (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                type="button"
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[var(--gold)] text-[var(--black)] shadow'
                    : 'bg-transparent text-[var(--black)] hover:bg-[color:rgb(0_0_0_/_0.04)]'
                }`}
                aria-pressed={isActive}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <ShopCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  )
}


