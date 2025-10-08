'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { HotelCard } from '@/components/ui/card';
import { FeatureCard } from '@/components/ui/feature-card';

type FilterType = 'Toutes' | 'Peintures' | 'Sculptures' | 'Textiles' | 'Contemporain';

export default function DecouvertesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Toutes');

  const expositions = [
    {
      id: 1,
      title: "Masques Sacrés d'Afrique",
      description: "Plongez dans l'univers mystérieux des masques traditionnels africains, témoins des rituels ancestraux et des croyances qui façonnent leur identité culturelle. Cette exposition présente plus de 150 masques provenant de 25 pays africains.",
      image: "/images/exposition sculture.png",
      category: "Sculptures",
      date: "Jusqu'au 15 Mars 2025",
      permanent: false
    },
    {
      id: 2,
      title: "Royaumes d'Afrique",
      description: "Plongez dans l'histoire des grands royaumes africains à travers leurs œuvres d'art. Sculptures en bronze du Bénin, objets royaux du Ghana, regalia des cours d'Éthiopie... Une collection exceptionnelle qui révèle la sophistication artistique des civilisations africaines.",
      image: "/images/exposition sculture 2.png",
      category: "Sculptures",
      date: "Exposition permanente",
      permanent: true
    },
    {
      id: 3,
      title: "L'Art du Textile",
      description: "Les étoffes africaines racontent des histoires. Du Kente ghanéen aux bogolans maliens, chaque tissu possède une signification profonde. Cette exposition interactive vous permet de comprendre les techniques ancestrales de tissage et de teinture.",
      image: "/images/exposition textille.png",
      category: "Textiles",
      date: "Du 1er au 30 Juin 2025",
      permanent: false
    },
    {
      id: 4,
      title: "Afrique Contemporaine",
      description: "L'art africain contemporain dialogue avec la tradition. Cette exposition présente les œuvres de 30 artistes africains contemporains qui réinventent l'héritage culturel du continent. Peintures, sculptures, installations et art numérique moderne et novateur.",
      image: "/images/exposition peinture.png",
      category: "Contemporain",
      date: "Exposition temporaire",
      permanent: false
    }
  ];

  const filteredExpositions = activeFilter === 'Toutes' 
    ? expositions 
    : expositions.filter(expo => expo.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F5F1E6]">

      {/* Section Visite Augmentée (Hero) */}
      <HeroGeometric badge="Musée des Cultures" title1="Découvertes" title2="" />

      {/* Visite Augmentée - Bloc fonctionnalités + image */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visite Augmentée
          </h2>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Colonne gauche - liste fonctionnalités */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Explorez le musée<br />autrement
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-[#D4AF37]">🧭</span>
                    <span className="text-gray-800 text-lg">Parcours thématiques guidés</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-[#D4AF37]">📷</span>
                    <span className="text-gray-800 text-lg">Réalité augmentée interactive</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-[#D4AF37]">🗺️</span>
                    <span className="text-gray-800 text-lg">Navigation GPS indoor</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-[#D4AF37]">👓</span>
                    <span className="text-gray-800 text-lg">Expérience 360° à distance</span>
                  </div>
                </div>

                <button className="bg-[#D4AF37] text-[#1C1C1C] py-3 px-8 rounded-full font-semibold hover:bg-[#c5a033] transition-colors text-lg">
                  Commencer la visite
                </button>
              </div>

              {/* Colonne droite - image carte */}
              <div className="bg-[#1C1C1C] rounded-2xl p-8 flex items-center justify-center min-h-[420px] relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/visite augmente map.png"
                    alt="Carte interactive du musée"
                    width={900}
                    height={540}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expositions */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Expositions
          </h2>

          {/* Filtres */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#1C1C1C] rounded-full p-1 gap-1">
              {(['Toutes', 'Peintures', 'Sculptures', 'Textiles', 'Contemporain'] as FilterType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#D4AF37] text-[#1C1C1C]'
                      : 'text-white hover:text-[#D4AF37]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Cartes d'expositions */}
          <div className="space-y-8 flex flex-col items-center">
            {filteredExpositions.map((expo) => (
              <HotelCard
                key={expo.id}
                className="w-full max-w-5xl"
                imageUrl={expo.image}
                imageAlt={expo.title}
                roomType={expo.category}
                hotelName={expo.title}
                location={expo.permanent ? "Exposition permanente" : expo.date}
                rating={4.8}
                reviewCount={128}
              >
                <Link href={`/decouvertes/${expo.id}`}>
                  <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2 rounded-full font-semibold hover:bg-[#c5a033] transition-colors">
                    Explorer
                  </button>
                </Link>
              </HotelCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours Thématiques */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Parcours Thématiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<span className="text-3xl">🏛️</span>}
              title="L'Afrique des Royaumes"
              description="Découvrez les grandes dynasties africaines et leurs trésors artistiques"
              className="bg-[#F5F1E6]"
            />

            <FeatureCard
              icon={<span className="text-3xl">🕯️</span>}
              title="Arts et Spiritualité"
              description="L'art sacré africain et ses dimensions spirituelles profondes"
              className="bg-[#F5F1E6]"
            />

            <FeatureCard
              icon={<span className="text-3xl">🌍</span>}
              title="Diaspora Africaine"
              description="L'influence de l'Afrique dans le monde et les échanges culturels"
              className="bg-[#F5F1E6]"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
