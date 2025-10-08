// la page qui acceuillera la billeterie
import React from 'react'
import VisitInfo from '@/components/VisitInfo'
import AnimatedHero from '@/components/AnimatedHero'
import UpcomingEvents from '@/components/UpcomingEvents'
import MuseumShop from '@/components/MuseumShop'
import ReservationPricing from '@/components/ReservationPricing'

export default function BilleteriePage() {
  return (
    <div>
      <AnimatedHero />
      <VisitInfo />
      <ReservationPricing />
      <UpcomingEvents />
      <MuseumShop />
    </div>
  )
}
