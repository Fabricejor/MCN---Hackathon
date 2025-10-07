'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'abonnement à implémenter
    console.log('Email inscrit:', email);
    setEmail('');
  };

  return (
    <footer className="text-white py-12 px-8 relative overflow-hidden">
      {/* Image de fond décorative africaine */}
      <div 
        className="absolute inset-0 blur-sm" 
        style={{
          backgroundImage: `url('/images/footer 5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-y'
        }}
      ></div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Liens rapides */}
        <div>
          <h3 className="text-[#D4AF37] text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Liens rapides
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#D4AF37] transition-colors text-sm">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/decouvertes" className="hover:text-[#D4AF37] transition-colors text-sm">
                Découvertes
              </Link>
            </li>
            <li>
              <Link href="/apprentissage" className="hover:text-[#D4AF37] transition-colors text-sm">
                Apprentissage
              </Link>
            </li>
            <li>
              <Link href="/billeterie" className="hover:text-[#D4AF37] transition-colors text-sm">
                Billeterie
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-[#D4AF37] text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Réseaux sociaux
          </h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#D4AF37] text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Newsletter
          </h3>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email..."
              className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-[#D4AF37] text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#D4AF37] text-[#1C1C1C] rounded font-medium hover:bg-[#F5F1E6] transition-colors text-sm"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm relative z-10">
        <p>© 2024 Musée des Civilisations Noires. Tous droits réservés.</p>
        <p className="mt-1 text-xs text-white/80">
          Réalisé de la Centaine Quartz Dakar Sénégal
        </p>
      </div>
    </footer>
  );
}
