// la page qui acceuillera la billeterie
import React from 'react'
import VisitInfo from '@/components/VisitInfo'
import HeroBanner from '@/components/HeroBanner'
import UpcomingEvents from '@/components/UpcomingEvents'
import MuseumShop from '@/components/MuseumShop'

export default function page() {
  return (
    <div>
      <HeroBanner />
      <VisitInfo />
      <UpcomingEvents />
      <MuseumShop />
    </div>
  )
}
