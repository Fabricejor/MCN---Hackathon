import React from 'react'
import EventCard from './evenements/EventCard'
import EventsSection from './evenements/EventsSection'
import { upcomingEvents } from './evenements/EventsData'

export default function UpcomingEvents() {
  return (
    <EventsSection title="Événements à venir">
      {upcomingEvents.map((event) => (
        <EventCard key={event.title} {...event} />
      ))}
    </EventsSection>
  )
}


