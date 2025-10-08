'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script'; // Import Next.js Script component
import ModelViewer from '@/components/ModelViewer'; // Import the new component
// import Navbar from '@/components/layouts/Navbar';
// import Footer from '@/components/layouts/Footer';

export default function OeuvreDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [activeTab, setActiveTab] = useState<'3D' | 'Photos' | 'Video'>('Photos');
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Unwrap the params Promise using React.use()
  const { id } = use(params);

  // Données simulées de l'œuvre
  const oeuvre = {
    id: id,
    title: "Masque Rituel Dogon",
    epoque: "XVIe siècle",
    origine: "Mali, Plateau de Bandiagara",
    artiste: "Maître sculpteur Dogon",
    materiau: "Bois d'ébène, pigments naturels",
    dimensions: "45 x 28 x 15 cm",
    images: [
      "/images/sculture -mcn drive.jpg",
      "/images/exposition sculture 2.png",
      "/images/collection sculture 1.png",
      "/images/collection sculture 2.png"
    ],
    description: [
      "Ce masque rituel Dogon représente l'esprit ancestral Awa, gardien des traditions et protecteur de la communauté. Sculpté dans un bois d'ébène précieux, il témoigne de la maîtrise technique exceptionnelle des artisans Dogon.",
      "Les motifs géométriques gravés racontent l'histoire de la création du monde selon la cosmogonie Dogon, tandis que les pigments naturels utilisés symbolisent les éléments terre, eau, feu et air."
    ],
    audioGuide: "Audio-guide (5:32)",
    documentaire: "Documentaire (12:45)",
    modele3D: true,
    modele3DPath: "/3D/maske -mcn drive.glb", // Path to the 3D model
    contexte: [
      "Utilisé lors des cérémonies funéraires Dama",
      "Symbole de communication avec les ancêtres",
      "Patrimoine UNESCO depuis 1989"
    ]
  };

  const handleTabClick = (tab: '3D' | 'Photos' | 'Video') => {
    if (tab === '3D') {
      // Toggle between 3D and Photos view
      setActiveTab(activeTab === '3D' ? 'Photos' : '3D');
    } else {
      setActiveTab(tab);
    }
  };
  
  const oeuvresSimilaires = [
    {
      id: 1,
      title: "Masque Bambara",
      region: "Mali, XVIIIe siècle",
      image: "/images/collection sculture 1.png"
    },
    {
      id: 2,
      title: "Masque Senoufo",
      region: "Côte d'Ivoire, XVIIIe siècle",
      image: "/images/collection sculture 2.png"
    },
    {
      id: 3,
      title: "Masque Bozo",
      region: "Mali, XIXe siècle",
      image: "/images/collection sculture 3.png"
    },
    {
      id: 4,
      title: "Masque Mossi",
      region: "Burkina Faso, XVIIIe siècle",
      image: "/images/colllection sculture 3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E6]">
      {/* <Navbar /> */}

      <main className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Colonne gauche - Image principale et galerie */}
            <div className="space-y-4">
              {/* Image principale */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative">
                <div className="relative aspect-square">
                  {activeTab === '3D' && oeuvre.modele3DPath ? (
                    <ModelViewer modelPath={oeuvre.modele3DPath} />
                  ) : (
                    <Image
                      src={oeuvre.images[selectedImage]}
                      alt={oeuvre.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  
                  {/* Boutons d'action */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#c5a033] transition-colors">
                      <span className="text-[#1C1C1C]">🔍</span>
                    </button>
                    <button className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#c5a033] transition-colors">
                      <span className="text-[#1C1C1C]">🔄</span>
                    </button>
                    <button className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#c5a033] transition-colors">
                      <span className="text-[#1C1C1C]">⛶</span>
                    </button>
                  </div>

                  {/* Onglets */} 
                  {/* lobject 3d a integrer lorsque on touche le button 3d */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {(['3D', 'Photos', 'Video'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          activeTab === tab
                            ? 'bg-white text-[#1C1C1C]'
                            : 'bg-white/60 text-[#1C1C1C] hover:bg-white/80'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Galerie de miniatures */}
              <div className="grid grid-cols-4 gap-3">
                {oeuvre.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-[#D4AF37] scale-95'
                        : 'border-transparent hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${oeuvre.title} - vue ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Colonne droite - Informations */}
            <div className="space-y-6">
              {/* Titre et informations principales */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {oeuvre.title}
                </h1>

                <div className="space-y-3 text-[#1C1C1C]">
                  <div>
                    <span className="font-semibold">Époque:</span> {oeuvre.epoque}
                  </div>
                  <div>
                    <span className="font-semibold">Origine:</span> {oeuvre.origine}
                  </div>
                  <div>
                    <span className="font-semibold">Artiste:</span> {oeuvre.artiste}
                  </div>
                  <div>
                    <span className="font-semibold">Matériau:</span> {oeuvre.materiau}
                  </div>
                  <div>
                    <span className="font-semibold">Dimensions:</span> {oeuvre.dimensions}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Description
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {oeuvre.description.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Contenus multimédias */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Contenus multimédias
                </h2>
                
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-[#F5F1E6] rounded-lg hover:bg-[#e8e3d6] transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎧</span>
                      <span className="font-medium text-[#1C1C1C]">{oeuvre.audioGuide}</span>
                    </div>
                    <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">▶</span>
                  </button>

                  <button className="w-full flex items-center justify-between p-4 bg-[#F5F1E6] rounded-lg hover:bg-[#e8e3d6] transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📹</span>
                      <span className="font-medium text-[#1C1C1C]">{oeuvre.documentaire}</span>
                    </div>
                    <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">▶</span>
                  </button>

                  <button className="w-full flex items-center justify-between p-4 bg-[#F5F1E6] rounded-lg hover:bg-[#e8e3d6] transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🕶️</span>
                      <span className="font-medium text-[#1C1C1C]">Modèle 3D interactif</span>
                    </div>
                    <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">↗</span>
                  </button>

                  {/* ElevenLabs Convai Widget */}
                  <div className="mt-4">
                    <elevenlabs-convai agent-id="agent_6401k72h8jh3ekatzfqnqpg0h5wz"></elevenlabs-convai>
                  </div>
                </div>
              </div>

              {/* Contexte culturel */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Contexte culturel
                </h2>
                
                <ul className="space-y-3">
                  {oeuvre.contexte.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Œuvres similaires */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Œuvres similaires
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {oeuvresSimilaires.map((oeuvre) => (
                <Link
                  key={oeuvre.id}
                  href={`/decouvertes/${oeuvre.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={oeuvre.image}
                      alt={oeuvre.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-[#1C1C1C] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {oeuvre.title}
                    </h3>
                    <p className="text-sm text-gray-600">{oeuvre.region}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
    </div>
  );
}
