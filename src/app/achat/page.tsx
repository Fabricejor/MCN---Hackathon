'use client'
import React, { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import HeroAchat from '@/components/achat/HeroAchat'
import CheckoutForm from '@/components/achat/CheckoutForm'
import OrderSummary from '@/components/achat/OrderSummary'

// Composant qui utilise useSearchParams, enveloppé dans Suspense
function AchatContent() {
  const searchParams = useSearchParams()
  const [quantity, setQuantity] = useState(1)

  const productTitle = searchParams.get('title') || 'Produit'
  const productPrice = parseInt(searchParams.get('price') || '0')
  const productImage = searchParams.get('image') || ''

  return (
    <>
      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-semibold text-[var(--brown)] sm:text-4xl">
            Finaliser votre achat
          </h1>
          <p className="mt-2 text-sm text-[color:rgb(0_0_0_/_0.65)]">
            Complétez vos informations pour finaliser la commande
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          <CheckoutForm />
          <OrderSummary
            productTitle={productTitle}
            productPrice={productPrice}
            productImage={productImage}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>
    </>
  )
}

export default function AchatPage() {
  return (
    <div className="min-h-screen bg-[var(--beige)]">
      {/* Hero Section */}
      <div className="relative">
        <HeroAchat />
      </div>

      {/* Wrap content using useSearchParams in Suspense */}
      <Suspense fallback={
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-3xl font-semibold text-[var(--brown)] sm:text-4xl">
              Chargement...
            </h1>
          </div>
        </div>
      }>
        <AchatContent />
      </Suspense>
    </div>
  )
}

