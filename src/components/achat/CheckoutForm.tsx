'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function CheckoutForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Commande confirmée ! Vous recevrez un email de confirmation avec les détails de paiement.')
  }

  return (
    <div className="lg:col-span-2">
      <div className="rounded-2xl bg-[var(--light)] p-6 shadow-md ring-1 ring-black/5 sm:p-8">
        <h2 className="mb-6 font-serif text-xl font-semibold text-[var(--brown)]">
          Informations de livraison
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--brown)]">
              Nom complet
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--brown)]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--brown)]">
              Téléphone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--brown)]">
              Adresse de livraison
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-lg border border-black/10 px-4 py-2.5 text-[var(--black)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20"
              required
            />
          </div>

          <div className="pt-4">
            <h3 className="mb-4 font-serif text-lg font-semibold text-[var(--brown)]">
              Mode de paiement
            </h3>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-[var(--gold)] bg-[var(--gold)]/10 p-4 transition hover:bg-[var(--gold)]/15">
                <input
                  type="radio"
                  name="payment"
                  value="wave"
                  defaultChecked
                  className="h-4 w-4 text-[var(--gold)] focus:ring-[var(--gold)]"
                />
                <img 
                  src="/images/wave.png" 
                  alt="Wave" 
                  className="h-8 w-auto object-contain"
                />
                <span className="font-medium text-[var(--brown)]">Wave</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-black/10 p-4 transition hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/5">
                <input
                  type="radio"
                  name="payment"
                  value="orange"
                  className="h-4 w-4 text-[var(--gold)] focus:ring-[var(--gold)]"
                />
                <img 
                  src="/images/orangemoney.png" 
                  alt="Orange Money" 
                  className="h-8 w-auto object-contain"
                />
                <span className="font-medium text-[var(--brown)]">Orange Money</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-black/10 p-4 transition hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/5">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  className="h-4 w-4 text-[var(--gold)] focus:ring-[var(--gold)]"
                />
                <svg className="h-8 w-8 text-[var(--brown)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium text-[var(--brown)]">Paiement à la livraison</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-6">
            <Link
              href="/billeterie"
              className="rounded-lg border-2 border-black/10 px-6 py-2.5 font-semibold text-[color:rgb(0_0_0_/_0.6)] transition hover:border-black/20"
            >
              Retour
            </Link>
            <button
              type="submit"
              className="rounded-lg bg-[var(--gold)] px-8 py-2.5 font-serif font-semibold text-[var(--black)] shadow-md transition hover:brightness-95"
            >
              Confirmer la commande
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

