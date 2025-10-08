'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Découvertes
          </h1>
          <p className="text-lg text-gray-300">
            Explorez notre patrimoine à travers des expériences immersives
          </p>
        </div>
      </section>

      {/* Section Visite Augmentée */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visite Augmentée
          </h2>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Partie gauche - Options */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Explorez le musée<br />autrement
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-[#D4AF37]">👉</span>
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

              {/* Partie droite - Carte interactive */}
              <div className="bg-[#1C1C1C] rounded-2xl p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                {/* Image de la carte du musée */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/visite augmente map.png"
                    alt="Carte interactive du musée"
                    width={600}
                    height={400}
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
          <div className="space-y-6">
            {filteredExpositions.map((expo) => (
              <div
                key={expo.id}
                className="bg-[#F5F1E6] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  {/* Image */}
                  <div className="relative h-48 md:h-auto rounded-xl overflow-hidden">
                    <Image
                      src={expo.image}
                      alt={expo.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="md:col-span-2 flex flex-col justify-between">
    <div>
                      <h3 className="text-2xl font-bold mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {expo.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {expo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>🏛️</span>
                        <span>{expo.date}</span>
                      </div>
                      <Link href={`/decouvertes/${expo.id}`}>
                        <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2 rounded-lg font-semibold hover:bg-[#c5a033] transition-colors">
                          Explorer
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours Thématiques */}
      <section className="py-16 px-8 bg-[#6B4423]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Parcours Thématiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Parcours 1 */}
            <div className="bg-[#F5F1E6] rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">
                <svg className="w-16 h-16 mx-auto" fill="#D4AF37" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                L'Afrique des Royaumes
              </h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Découvrez les grandes dynasties africaines et leurs trésors artistiques
              </p>
              <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2.5 rounded-full font-semibold hover:bg-[#c5a033] transition-colors">
                Suivre le parcours
              </button>
            </div>

            {/* Parcours 2 */}
            <div className="bg-[#F5F1E6] rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">
                <svg className="w-16 h-16 mx-auto" fill="#D4AF37" viewBox="0 0 24 24">
                  <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4M12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7M12 9C13.66 9 15 10.34 15 12S13.66 15 12 15 9 13.66 9 12 10.34 9 12 9Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Arts et Spiritualité
              </h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                L'art sacré africain et ses dimensions spirituelles profondes
              </p>
              <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2.5 rounded-full font-semibold hover:bg-[#c5a033] transition-colors">
                Suivre le parcours
              </button>
            </div>

            {/* Parcours 3 */}
            <div className="bg-[#F5F1E6] rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">
                <svg className="w-16 h-16 mx-auto" fill="#D4AF37" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Diaspora Africaine
              </h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                L'influence de l'Afrique dans le monde et les échanges culturels
              </p>
              <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2.5 rounded-full font-semibold hover:bg-[#c5a033] transition-colors">
                Suivre le parcours
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
