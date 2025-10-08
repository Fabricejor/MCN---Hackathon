import React from 'react';
import { InfiniteSlider } from '../ui/infinite-slider';
import Image from 'next/image';

const images = [
  '/images/heros 1.png',
  '/images/heros 2.png',
  '/images/heros 3 public.png',
  '/images/heros 4.png',
  '/images/heros 5.png',
  '/images/heros 6 public.png',
  '/images/heros 7 public.png',
  '/images/heros 8.png',
];

export default function OurStory() {
  return (
    <div className="bg-[var(--light)] py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre Histoire
            </h2>
            <p className="text-black mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Le Musée des Civilisations Noires a été créé pour célébrer, préserver et partager la richesse culturelle des civilisations africaines et de la diaspora. Depuis notre ouverture, nous nous engageons à être un pont entre le passé et l&apos;avenir, un lieu de mémoire et de découverte.
            </p>
            <p className="text-black" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Notre mission est de valoriser l&apos;héritage africain sous toutes ses formes, de l&apos;art traditionnel aux expressions contemporaines, en offrant un espace de dialogue interculturel et d&apos;éducation pour tous.
            </p>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <InfiniteSlider duration={40}>
              {images.slice(0, 4).map((src, i) => (
                <Image key={i} src={src} alt="Museum" width={300} height={200} className="rounded-lg object-cover" />
              ))}
            </InfiniteSlider>
            <InfiniteSlider duration={40} reverse>
              {images.slice(4, 8).map((src, i) => (
                <Image key={i} src={src} alt="Museum" width={300} height={200} className="rounded-lg object-cover" />
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-[var(--beige)] rounded-lg p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Horaires d&apos;ouverture
            </h3>
            <p className="text-black text-lg">Tous les jours de 10h00 à 19h00</p>
            <p className="text-black text-lg">Dimanches : fermé</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[var(--brown)] text-lg font-semibold">Dakar, Sénégal</p>
            <p className="text-[var(--brown)] text-lg">Route de la Corniche Ouest</p>
          </div>
        </div>
      </div>
    </div>
  );
}
