'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type VisitType = 'libre' | 'guidee' | 'groupe'

export default function ReservationForm() {
  const [step, setStep] = useState(1)
  const [visitType, setVisitType] = useState<VisitType>('libre')
  const [visitDate, setVisitDate] = useState('')
  const [visitTime, setVisitTime] = useState('')
  const [visitors, setVisitors] = useState(1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const prices = {
    libre: 3000,
    guidee: 5000,
    groupe: 2500,
  }

  const totalPrice = prices[visitType] * visitors

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Réservation confirmée ! Vous recevrez un email de confirmation.')
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-semibold text-[var(--brown)] sm:text-4xl">
          Réserver une visite
        </h2>
        <p className="mt-2 text-sm text-[color:rgb(0_0_0_/_0.65)]">
          Complétez votre réservation en 3 étapes simples
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8 flex items-center justify-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition ${
                step >= s
                  ? 'bg-[var(--gold)] text-[var(--black)]'
                  : 'bg-[var(--light)] text-[color:rgb(0_0_0_/_0.4)] ring-1 ring-black/10'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`h-1 w-12 rounded ${step > s ? 'bg-[var(--gold)]' : 'bg-black/10'}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Form Card */}
      <div className="rounded-2xl bg-[var(--light)] p-6 shadow-md ring-1 ring-black/5 sm:p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Type de visite */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl font-semibold text-[var(--brown)]">
                1. Choisissez votre type de visite
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { type: 'libre' as VisitType, label: 'Visite libre', price: 3000 },
                  { type: 'guidee' as VisitType, label: 'Visite guidée', price: 5000 },
                  { type: 'groupe' as VisitType, label: 'Groupe scolaire', price: 2500 },
                ].map((option) => (
                  <label
                    key={option.type}
                    className={`cursor-pointer rounded-xl border-2 p-4 text-center transition ${
                      visitType === option.type
                        ? 'border-[var(--gold)] bg-[var(--gold)]/10'
                        : 'border-black/10 hover:border-[var(--gold)]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="visitType"
                      value={option.type}
                      checked={visitType === option.type}
                      onChange={(e) => setVisitType(e.target.value as VisitType)}
                      className="sr-only"
                    />
                    <div className="font-semibold text-[var(--brown)]">{option.label}</div>
                    <div className="mt-1 text-sm text-[color:rgb(0_0_0_/_0.65)]">
                      {option.price} FCFA/pers
                    </div>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--brown)]">
                  Nombre de visiteurs
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={visitors}
                  placeholder="Entrez le nombre de visiteurs"
                  title="Nombre de visiteurs"
                  aria-label="Nombre de visiteurs"
                  onChange={(e) => setVisitors(parseInt(e.target.value) || 1)}
                  className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Date et heure */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl font-semibold text-[var(--brown)]">
                2. Sélectionnez la date et l&apos;heure
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--brown)]">
                    Date de visite
                  </label>
                  <input
                    type="date"
                    id="visit-date"
                    name="visit-date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    placeholder="Sélectionnez la date de visite"
                    title="Date de visite"
                    aria-label="Date de visite"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--brown)]">
                    Heure de visite
                  </label>
                  <select
                    id="visit-time"
                    name="visit-time"
                    value={visitTime}
                    onChange={(e) => setVisitTime(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
                    required
                    title="Heure de visite"
                    aria-label="Heure de visite"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div className="rounded-lg bg-[var(--beige)] p-4">
                <p className="text-sm text-[color:rgb(0_0_0_/_0.7)]">
                  <strong>Note:</strong> Le musée est ouvert du mardi au dimanche de 10h00 à 19h00.
                  Dernière entrée à 18h00.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Coordonnées */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl font-semibold text-[var(--brown)]">
                3. Vos coordonnées
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--brown)]">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
                    placeholder="Entrez votre nom complet"
                    title="Nom complet"
                    aria-label="Nom complet"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--brown)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
                    placeholder="Entrez votre adresse email"
                    title="Adresse email"
                    aria-label="Adresse email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--brown)]">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
                    placeholder="Entrez votre numéro de téléphone"
                    title="Numéro de téléphone"
                    aria-label="Numéro de téléphone"
                    required
                  />
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="rounded-xl border-2 border-[var(--gold)]/30 bg-[var(--beige)] p-6">
                <h3 className="mb-4 font-serif text-lg font-semibold text-[var(--brown)]">
                  Récapitulatif de votre réservation
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[color:rgb(0_0_0_/_0.7)]">Type de visite:</dt>
                    <dd className="font-medium text-[var(--black)]">
                      {visitType === 'libre'
                        ? 'Visite libre'
                        : visitType === 'guidee'
                        ? 'Visite guidée'
                        : 'Groupe scolaire'}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[color:rgb(0_0_0_/_0.7)]">Date:</dt>
                    <dd className="font-medium text-[var(--black)]">{visitDate || '—'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[color:rgb(0_0_0_/_0.7)]">Heure:</dt>
                    <dd className="font-medium text-[var(--black)]">{visitTime || '—'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[color:rgb(0_0_0_/_0.7)]">Visiteurs:</dt>
                    <dd className="font-medium text-[var(--black)]">{visitors}</dd>
                  </div>
                  <div className="border-t border-black/10 pt-2" />
                  <div className="flex justify-between text-base">
                    <dt className="font-semibold text-[var(--brown)]">Total:</dt>
                    <dd className="font-bold text-[var(--brown)]">{totalPrice} FCFA</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-lg border-2 border-[var(--gold)] px-6 py-2.5 font-semibold text-[var(--brown)] transition hover:bg-[var(--gold)]/10"
              >
                Précédent
              </button>
            ) : (
              <Link
                href="/billeterie"
                className="rounded-lg border-2 border-black/10 px-6 py-2.5 font-semibold text-[color:rgb(0_0_0_/_0.6)] transition hover:border-black/20"
              >
                Annuler
              </Link>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg bg-[var(--gold)] px-8 py-2.5 font-serif font-semibold text-[var(--black)] shadow-md transition hover:brightness-95"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-lg bg-[var(--gold)] px-8 py-2.5 font-serif font-semibold text-[var(--black)] shadow-md transition hover:brightness-95"
              >
                Confirmer la réservation
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

