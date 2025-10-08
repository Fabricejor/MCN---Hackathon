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
        {/* Text and Button Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left justify-center space-y-8 md:order-2">
          <WordRotate
            words={phrases}
            duration={10000}
            className="text-4xl font-bold text-black font-playfair"
          />
          <button 
            className="px-8 py-3 text-lg font-semibold rounded-full text-white bg-[var(--gold)]"
          >
            Découvrir votre histoire
          </button>
        </div>
        {/* 3D Model Section */}
        <div className="w-full h-[400px] md:h-[500px] bg-white rounded-full p-4 shadow-lg md:order-1">
          <GoldenStatus />
        </div>
      </div>
    </div>
  );
}
