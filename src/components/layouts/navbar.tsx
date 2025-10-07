import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Découvertes', href: '/decouvertes' },
    { name: 'Billeterie', href: '/billeterie' },
    { name: 'Apprentissage', href: '/apprentissage' },
  ];

  return (
    <header className="sticky top-0 z-50 p-4 bg-transparent">
      <nav 
        className="bg-[#1C1C1C] text-white rounded-full w-full max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex-shrink-0">
            <Link href="/">
                <Image src="/images/logo.png" alt="MCN Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
