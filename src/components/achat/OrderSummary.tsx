'use client'
import React from 'react'

interface OrderSummaryProps {
  productTitle: string
  productPrice: number
  productImage: string
  quantity: number
  setQuantity: (quantity: number) => void
}

export default function OrderSummary({
  productTitle,
  productPrice,
  productImage,
  quantity,
  setQuantity
}: OrderSummaryProps) {
  const totalPrice = productPrice * quantity

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-4 rounded-2xl bg-[var(--light)] p-6 shadow-md ring-1 ring-black/5">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[var(--brown)]">
          Récapitulatif
        </h2>

        {productImage && (
          <img
            src={productImage}
            alt={productTitle}
            className="mb-4 h-32 w-full rounded-lg object-cover"
          />
        )}

        <div className="mb-4">
          <h3 className="font-semibold text-[var(--brown)]">{productTitle}</h3>
          <p className="mt-1 text-sm text-[color:rgb(0_0_0_/_0.7)]">
            {productPrice} FCFA / unité
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[var(--brown)]">
            Quantité
          </label>
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 font-semibold text-[var(--brown)] hover:bg-black/5"
            >
              −
            </button>
            <span className="w-12 text-center font-semibold text-[var(--black)]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 font-semibold text-[var(--brown)] hover:bg-black/5"
            >
              +
            </button>
          </div>
        </div>

        <div className="space-y-2 border-t border-black/10 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-[color:rgb(0_0_0_/_0.7)]">Sous-total:</span>
            <span className="font-medium text-[var(--black)]">{totalPrice} FCFA</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[color:rgb(0_0_0_/_0.7)]">Livraison:</span>
            <span className="font-medium text-[var(--black)]">Gratuite</span>
          </div>
          <div className="border-t border-black/10 pt-2" />
          <div className="flex justify-between text-base">
            <span className="font-semibold text-[var(--brown)]">Total:</span>
            <span className="font-bold text-[var(--brown)]">{totalPrice} FCFA</span>
          </div>
        </div>
      </div>
    </div>
  )
}

