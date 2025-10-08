import React from 'react';
import { LayoutGrid } from '../ui/layout-grid';

export default function OurExposition() {
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

  return (
    <div className="py-20 bg-[var(--beige)]">
      <h2 className="text-4xl font-bold text-center text-black mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
        Nos Collections
      </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}