// la page qui acceuillera la billeterie
import React from 'react'
import VisitInfo from '@/components/VisitInfo'
import AnimatedHero from '@/components/AnimatedHero'
import UpcomingEvents from '@/components/UpcomingEvents'
import MuseumShop from '@/components/MuseumShop'

export default function page() {
  return (
    <div>
      <AnimatedHero />
      <VisitInfo />
      <UpcomingEvents />
      <MuseumShop />
    </div>
  )
}
