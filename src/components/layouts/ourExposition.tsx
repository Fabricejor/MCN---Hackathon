"use client";
import React, { useRef } from 'react';
import { LayoutGrid } from '../ui/layout-grid';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const cards = [
  {
    id: 1,
    title: <h3 className="font-merriweather text-black text-xl font-bold">Peintures Traditionnelles</h3>,
    description: <p className="font-playfair text-[var(--brown)] mt-2">Découvrez les œuvres picturales qui racontent l'histoire et les traditions des peuples africains.</p>,
    className: "md:col-span-1",
    thumbnail: "/images/collection peinture 1 .png",
  },
    {
      id: 2,
      title: <h3 className="font-merriweather text-black text-xl font-bold">Sculptures Ancestrales</h3>,
      description: <p className="font-playfair text-[var(--brown)] mt-2">Une collection exceptionnelle de sculptures qui témoignent du génie artistique africain.</p>,
      className: "md:col-span-1",
      thumbnail: "/images/collection sculture 1.png",
    },
    {
      id: 3,
      title: <h3 className="font-merriweather text-black text-xl font-bold">Tapisseries Royales</h3>,
      description: <p className="font-playfair text-[var(--brown)] mt-2">Explorez l'art du textile africain à travers des tapisseries d'une beauté extraordinaire.</p>,
      className: "md:col-span-1",
      thumbnail: "/images/collection tapisserie 1.png",
    },
    {
      id: 4,
      title: <h3 className="font-merriweather text-black text-xl font-bold">Photographies Historiques</h3>,
      description: <p className="font-playfair text-[var(--brown)] mt-2">Revivez l'histoire à travers des photographies rares et authentiques.</p>,
      className: "md:col-span-1",
      thumbnail: "/images/collection photographie 1.png",
    },
    {
      id: 5,
      title: <h3 className="font-merriweather text-black text-xl font-bold">Art Vidéo Contemporain</h3>,
      description: <p className="font-playfair text-[var(--brown)] mt-2">Plongez dans l'art contemporain africain à travers des créations vidéo innovantes.</p>,
      className: "md:col-span-1",
      thumbnail: "/images/collection video 1.png",
    },
    {
      id: 6,
      title: <h3 className="font-merriweather text-black text-xl font-bold">Installations Modernes</h3>,
      description: <p className="font-playfair text-[var(--brown)] mt-2">Expérimentez des installations artistiques qui repoussent les limites de la créativité.</p>,
      className: "md:col-span-1",
      thumbnail: "/images/collection installation 1.png",
    },
];

type ExpositionCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  thumbnail: string;
};

const ExpositionCard: React.FC<ExpositionCardProps> = ({ title, description, thumbnail }) => (
  <div className="bg-[var(--light)] rounded-lg p-4 flex flex-col h-full shadow-md border border-gray-200">
    <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
      <Image src={thumbnail} alt="Collection" layout="fill" objectFit="cover" />
    </div>
    {title}
    {description}
  </div>
);

export default function OurExposition() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 16; 
      const scrollAmount = (cardWidth + gap) * 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-20 bg-[var(--beige)]">
      <h2 className="text-4xl font-bold text-center text-black mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
        Nos Collections
      </h2>
      {/* Desktop View */}
      <div className="hidden md:block">
        <LayoutGrid cards={cards} />
      </div>
      {/* Mobile View */}
      <div className="md:hidden px-4">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide"
          >
            {cards.map((card) => (
              <div key={card.id} className="snap-start flex-shrink-0 w-[calc((100%-16px)/2)]">
                <ExpositionCard {...card} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Previous collection"
          >
            <FaArrowLeft size={16}/>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Next collection"
          >
            <FaArrowRight size={16}/>
          </button>
        </div>
      </div>
    </div>
  );
}