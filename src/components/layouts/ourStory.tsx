import React from 'react';
import Image from 'next/image';
import { Marquee } from '../ui/marquee';

const images1 = [
  '/images/heros 1.png',
  '/images/heros 2.png',
  '/images/heros 3 public.png',
  '/images/heros 4.png',
];

const images2 = [
  '/images/heros 5.png',
  '/images/heros 6 public.png',
  '/images/heros 7 public.png',
  '/images/heros 8.png',
];

const LocationPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    style={{ color: 'var(--brown)' }}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function OurStory() {
  return (
    <section className="bg-[var(--light)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'black' }}>
              Notre Histoire
            </h2>
            <div className="space-y-4 text-lg" style={{ fontFamily: "'Merriweather', serif", color: 'black' }}>
              <p>
                Le Musée des Civilisations Noires a été créé pour célébrer, préserver et partager la richesse culturelle des civilisations africaines et de la diaspora. Depuis notre ouverture, nous nous engageons à être un pont entre le passé et l'avenir, un lieu de mémoire et de découverte.
              </p>
              <p>
                Notre mission est de valoriser l'héritage africain sous toutes ses formes, de l'art traditionnel aux expressions contemporaines, en offrant un espace de dialogue interculturel et d'éducation pour tous.
              </p>
            </div>
          </div>
          <div className="space-y-4 overflow-hidden">
             <Marquee speed={80} reverse className="[--gap:1rem]">
               {images1.map((src, idx) => (
                 <div
                   key={idx}
                   className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                 >
                   <Image
                     src={src}
                     alt={`Image ${idx + 1}`}
                     fill
                     className="object-cover"
                   />
                 </div>
               ))}
             </Marquee>
             <Marquee speed={80} reverse className="[--gap:1rem]">
               {images2.map((src, idx) => (
                 <div
                   key={idx}
                   className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                 >
                   <Image
                     src={src}
                     alt={`Image ${idx + 5}`}
                     fill
                     className="object-cover"
                   />
                 </div>
               ))}
             </Marquee>
           </div>
        </div>

        <div className="mt-20 bg-[var(--beige)] rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'black' }}>
              Horaires d'ouverture
            </h3>
            <div className="space-y-2 text-lg" style={{ fontFamily: "'Merriweather', serif", color: 'black' }}>
              <p>Tous les jours de 10h00 à 19h00</p>
              <p>Dimanches : fermé</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LocationPin />
            <div className="text-lg" style={{ fontFamily: "'Merriweather', serif", color: 'var(--brown)' }}>
              <p className="font-semibold">Dakar, Sénégal</p>
              <p>Route de la Corniche Ouest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
