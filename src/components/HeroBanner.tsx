"use client"
import React from 'react'

export default function HeroBanner() {
  const slides = [
    {
      src: '/images/art_contemporain_senegalais.jpg',
      alt: "Art contemporain sénégalais",
    },
    {
      src: '/images/danse_traditionnelle_senegalaise.jpg',
      alt: 'Danse traditionnelle sénégalaise',
    },
    {
      src: '/images/musee_civilisation_africaine_senegal.jpg',
      alt: "Musée des Civilisations Noires - Dakar",
    },
  ]

  const [index, setIndex] = React.useState(0)
  const goTo = (i: number) => setIndex((i + slides.length) % slides.length)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  React.useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [index])

  return (
    <section className="relative">
      <div className="relative h-[42vh] w-full overflow-hidden rounded-none sm:h-[56vh] lg:h-[72vh]">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--light)]/90 to-transparent" />

        <button
          type="button"
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[var(--light)]/70 p-2 text-[var(--black)] hover:bg-[var(--light)]"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Suivant"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[var(--light)]/70 p-2 text-[var(--black)] hover:bg-[var(--light)]"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à la diapositive ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? 'bg-[var(--gold)]' : 'bg-[var(--light)]/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


