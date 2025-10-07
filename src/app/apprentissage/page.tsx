'use client';

import { useState } from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

export default function ApprentissagePage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentFact, setCurrentFact] = useState(0);
  const [score, setScore] = useState(0);
  const [commentaire, setCommentaire] = useState('');

  const question = {
    text: "Quel royaume africain était connu pour ses sculptures en bronze ?",
    options: [
      "Le royaume du Mali",
      "Le royaume du Bénin",
      "Le royaume d'Éthiopie",
      "Le royaume du Congo"
    ],
    correctAnswer: 1
  };

  const facts = [
    {
      title: "L'université de Tombouctou",
      content: "Le royaume du Mali au XIVe siècle possédait l'une des plus grandes universités du monde à Tombouctou. Cette institution accueillait des étudiants de toute l'Afrique et du monde arabe, avec une bibliothèque contenant plus de 700 000 manuscrits."
    },
    {
      title: "Les pyramides de Méroé",
      content: "Le royaume de Koush au Soudan a construit plus de pyramides que l'Égypte ancienne, avec environ 255 pyramides dans la région de Méroé."
    },
    {
      title: "Le Grand Zimbabwe",
      content: "Cette ancienne cité était le centre d'un vaste empire commercial qui s'étendait du Mozambique au Zimbabwe moderne, avec des structures en pierre impressionnantes construites sans mortier."
    }
  ];

  const handleValidate = () => {
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setScore(0);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Commentaire publié:', commentaire);
    setCommentaire('');
  };

  return (
    <div className="min-h-screen bg-[#F5F1E6]">
      <Navbar />

      {/* Section Quiz */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Quiz culturels et jeux interactifs
          </h1>
          <p className="text-gray-700">
            Testez vos connaissances sur les civilisations, artistes et symboles de l'Afrique noire.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="absolute top-6 right-6">
            <span className="bg-[#5C3A21] text-white px-4 py-1 rounded-full text-sm">
              Score: {score}/10
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-[#1C1C1C] pr-24">
            {question.text}
          </h3>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAnswer === index
                    ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                    : 'border-gray-200 hover:border-[#D4AF37]/50'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => setSelectedAnswer(index)}
                  className="w-5 h-5 text-[#D4AF37] focus:ring-[#D4AF37] mr-3"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleValidate}
              disabled={selectedAnswer === null}
              className="bg-[#D4AF37] text-[#1C1C1C] px-8 py-2 rounded-lg font-medium hover:bg-[#c5a033] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Valider
            </button>
            <button
              onClick={handleReset}
              className="bg-[#1C1C1C] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2C2C2C] transition-colors"
            >
              Rejouer le quiz
            </button>
          </div>
        </div>
      </section>

      {/* Section Le saviez-vous */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Le saviez-vous ?
          </h2>
          <p className="text-gray-700">
            Anecdotes historiques et culturelles fascinantes sur les civilisations noires.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F5F1E6] rounded-2xl p-8 flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {facts[currentFact].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {facts[currentFact].content}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {facts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFact(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentFact === index ? 'bg-[#D4AF37] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Fait ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Espace pédagogique */}
      <section className="py-16 px-8 bg-[#F5F1E6]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Espace pédagogique pour les écoles
          </h2>
          <p className="text-gray-700">
            Ressources pédagogiques et activités adaptées aux élèves selon leur niveau scolaire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* Niveau Primaire */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1C1C]">Niveau Primaire</h3>
                <p className="text-sm text-gray-600">
                  Découverte ludique des cultures africaines à travers des jeux et activités adaptées aux plus jeunes.
                </p>
              </div>
            </div>
            <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2 rounded-lg font-medium hover:bg-[#c5a033] transition-colors whitespace-nowrap">
              Télécharger la fiche pédagogique
            </button>
          </div>

          {/* Niveau Collège */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1C1C]">Niveau Collège</h3>
                <p className="text-sm text-gray-600">
                  Approfondissement historique et culturel avec des supports interactifs et des projets de groupe.
                </p>
              </div>
            </div>
            <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2 rounded-lg font-medium hover:bg-[#c5a033] transition-colors whitespace-nowrap">
              Télécharger la fiche pédagogique
            </button>
          </div>

          {/* Niveau Lycée */}
          <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#1C1C1C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1C1C1C]">Niveau Lycée</h3>
                <p className="text-sm text-gray-600">
                  Analyse critique et recherches approfondies sur l'art, l'histoire et la philosophie africaine.
                </p>
              </div>
            </div>
            <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2 rounded-lg font-medium hover:bg-[#c5a033] transition-colors whitespace-nowrap">
              Télécharger la fiche pédagogique
            </button>
          </div>
        </div>
      </section>

      {/* Section Trophées et communauté */}
      <section className="py-16 px-8 bg-[#1C1C1C] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Trophées et communauté
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Système de récompenses */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Système de récompenses</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Gagnez des points et débloquez des badges en découvrant les œuvres ou en réussissant les quiz.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Explorateur des Royaumes</h4>
                    <p className="text-sm text-gray-400">Visitez 10 expositions différentes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Gardien du Savoir</h4>
                    <p className="text-sm text-gray-400">Découvrez 5 quiz consécutifs</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Œil d'Artiste</h4>
                    <p className="text-sm text-gray-400">Analysez 20 œuvres d'art</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#2C2C2C] rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Niveau 3</span>
                  <span className="text-sm text-[#D4AF37]">750/1000 XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-[#D4AF37] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* Exprimez vos impressions */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Exprimez vos impressions</h3>

              <form onSubmit={handlePublish} className="bg-white text-[#1C1C1C] rounded-lg p-6 mb-6">
                <textarea
                  value={commentaire}
                  onChange={(e) => setCommentaire(e.target.value)}
                  placeholder="Partagez votre expérience au musée..."
                  className="w-full h-24 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-[#D4AF37] mb-4"
                  required
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <button type="button" className="text-gray-400 hover:text-[#D4AF37]">📷</button>
                    <button type="button" className="text-gray-400 hover:text-[#D4AF37]">😊</button>
                    <button type="button" className="text-gray-400 hover:text-[#D4AF37]">👍</button>
                    <button type="button" className="text-gray-400 hover:text-[#D4AF37]">❤️</button>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-2 rounded-lg font-medium hover:bg-[#c5a033] transition-colors"
                  >
                    Publier
                  </button>
                </div>
              </form>

              {/* Témoignages */}
              <div className="space-y-4">
                <div className="bg-white text-[#1C1C1C] rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">Aïcha Diallo</h4>
                      <p className="text-xs text-gray-600 mb-2">
                        Une expérience inoubliable ! Les masques traditionnels m'ont transportée.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-[#1C1C1C] rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">Mamadou Sow</h4>
                      <p className="text-xs text-gray-600 mb-2">
                        Les quiz sont parfaits pour apprendre en s'amusant. Mes enfants adorent !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
