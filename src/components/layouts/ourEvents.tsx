"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const events = [
  {
    date: '15 Mars 2024',
    title: 'Exposition : Art Contemporain Africain',
    description: 'Une exposition unique présentant les œuvres des plus grands artistes contemporains du continent.',
    image: '/images/event 1.png',
  },
  {
    date: '22 Mars 2024',
    title: 'Festival des Traditions',
    description: 'Célébrez la richesse des traditions africaines avec des spectacles et des démonstrations.',
    image: '/images/event 2.png',
  },
  {
    date: '5 Avril 2024',
    title: 'Conférence : Histoire des Royaumes',
    description: 'Une série de conférences sur les grands royaumes africains et leur héritage.',
    image: '/images/event 3.png',
  },
  {
    date: '12 Avril 2024',
    title: 'Atelier de Poterie',
    description: "Initiez-vous à l'art de la poterie avec des artisans chevronnés.",
    image: '/images/event 4.png',
  },
  {
    date: '19 Avril 2024',
    title: 'Concert de Kora',
    description: "Une soirée magique au son de la kora, instrument emblématique de l'Afrique de l'Ouest.",
    image: '/images/event 5.png',
  },
  {
    date: '26 Avril 2024',
    title: 'Projection de Documentaires',
    description: "Découvrez des documentaires poignants sur l'histoire et la culture africaines.",
    image: '/images/event 6.png',
  },
  {
    date: '3 Mai 2024',
    title: 'Journée Portes Ouvertes',
    description: "Profitez d'un accès gratuit à toutes nos expositions et participez à des activités spéciales.",
    image: '/images/event 7.png',
  },
];

type EventCardProps = {
  date: string;
  title: string;
  description: string;
  image: string;
};

const EventCard: React.FC<EventCardProps> = ({ date, title, description, image }) => (
  <div className="bg-[var(--beige)] rounded-lg p-6 flex flex-col h-full shadow-md border border-gray-200">
    <div className="relative h-56 w-full rounded-md overflow-hidden mb-4">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <p className="font-sans text-[var(--brown)] text-sm mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{date}</p>
    <h3 className="text-black text-xl font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>{title}</h3>
    <p className="text-black text-base mb-4 flex-grow" style={{ fontFamily: "'Open Sans', sans-serif" }}>{description}</p>
    <button className="bg-[var(--gold)] text-white font-bold py-2 px-4 rounded-lg mt-auto self-start hover:bg-opacity-90 transition-colors">
      Réserver des places
    </button>
  </div>
);

export default function OurEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[var(--light)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
          Événements à venir
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex  snap-x snap-mandatory gap-8 pb-8 scrollbar-hide overflow-x-hidden"
          >
            {events.map((event, index) => (
              <div key={index} className="snap-start flex-shrink-0 w-full md:w-[calc((100%-64px)/3)]">
                <EventCard {...event} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10"
            aria-label="Previous event"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10"
            aria-label="Next event"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
