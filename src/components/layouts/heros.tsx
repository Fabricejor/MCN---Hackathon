import React from 'react';
import GoldenStatus from '../ui/GoldenStatus';
import { WordRotate } from '../ui/word-rotate';

export default function Heros() {
  const phrases = [
    "Préserver notre patrimoine, c'est honorer nos ancêtres et inspirer les générations futures.",
    "L'Afrique n'est pas seulement notre passé, elle est notre présent et notre avenir.",
    "L'art africain est la racine de toute création humaine."
  ];

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-8 overflow-x-hidden' style={{ backgroundColor: 'var(--background)'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
        <div className="w-full h-[500px] bg-white rounded-full p-4 shadow-lg">
          <GoldenStatus />
        </div>
        <div className="flex flex-col items-start justify-center space-y-12">
          <WordRotate
            words={phrases}
            className="text-4xl font-bold text-black  font-playfair"
          />
          <button 
            className="px-8 py-3 text-lg font-semibold rounded-full text-white bg-[var(--gold)]"
          >
            Découvrir votre histoire
          </button>
        </div>
      </div>
    </div>
  );
}
