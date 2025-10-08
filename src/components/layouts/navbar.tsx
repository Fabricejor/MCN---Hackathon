
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Découvertes', href: '/decouvertes' },
    { name: 'Apprentissage', href: '/apprentissage' },
    { name: 'Billeterie', href: '/billeterie' },
  ]

  return (
    <header className="sticky top-0 z-50 p-4 bg-transparent backdrop-blur-md">
      <nav className="bg-[#1C1C1C] text-white rounded-full w-full max-w-7xl mx-auto">


        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/Logo_MCN_Final_V2_2_1.jpg" alt="MCN Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-white font-['Playfair_Display'] text-lg hover:text-[#D4AF37] transition-colors duration-300">
                {link.name}
            </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-[#D4AF37] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1C1C1C] rounded-lg mt-2 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-[#D4AF37]">
                {link.name}
            </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}