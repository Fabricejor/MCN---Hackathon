"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const backgroundImages: { [key: string]: string } = {
  '/': '/images/footer 0.png',
  '/billeterie': '/images/footer 2.png',
  '/decouvertes': '/images/footer 3.png',
  '/apprentissage': '/images/footer 4.png',
  'default': '/images/footer 5.png'
};

export default function Footer() {
  const pathname = usePathname();
  const [bgImage, setBgImage] = useState(backgroundImages['default']);

  useEffect(() => {
    let currentBg = backgroundImages['default'];
    if (pathname === '/') {
      currentBg = backgroundImages['/'];
    } else if (pathname.startsWith('/decouvertes')) {
      currentBg = backgroundImages['/decouvertes'];
    } else if (backgroundImages[pathname]) {
      currentBg = backgroundImages[pathname];
    }
    setBgImage(currentBg);
  }, [pathname]);

  return (
    <footer 
      className="relative bg-cover bg-center text-[var(--light)] py-12 px-6"
      // Encode URI to handle spaces in filenames
      style={{ backgroundImage: `url("${encodeURI(bgImage)}")` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--gold)]" style={{ fontFamily: "'Playfair Display', serif" }}>MCN</h3>
            <p className="font-sans">Musée des Civilisations Noires - Préserver, célébrer et partager l'héritage culturel africain.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--gold)]" style={{ fontFamily: "'Playfair Display', serif" }}>Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
              <li><Link href="/decouvertes" className="hover:underline">Découvertes</Link></li>
              <li><Link href="/apprentissage" className="hover:underline">Apprentissage</Link></li>
              <li><Link href="#" className="hover:underline">La CASEMAG</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--gold)]" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</h3>
            <p>Route de la Corniche Ouest</p>
            <p>Dakar, Sénégal</p>
            <p>+221 33 XXX XX XX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--gold)]" style={{ fontFamily: "'Playfair Display', serif" }}>Newsletter</h3>
            <div className="flex">
              <input type="email" placeholder="Votre email" className="bg-white/20 text-white placeholder-gray-300 px-4 py-2 rounded-l-md focus:outline-none w-full" />
              <button className="bg-[var(--gold)] text-black font-bold px-4 py-2 rounded-r-md hover:bg-opacity-90">S'abonner</button>
            </div>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Youtube"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Musée des Civilisations Noires. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}