'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/decouvertes', label: 'Découvertes' },
    { href: '/apprentissage', label: 'Apprentissage' },
    { href: '/la-casemas', label: 'La CASEMAS' },
    { href: '/billeterie', label: 'Billeterie' },
  ];

  return (
    <nav className="bg-black text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider">
          MCN
        </Link>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-[#D4AF37] transition-colors ${
                  pathname === link.href || 
                  (link.href === '/apprentissage' && pathname === link.href)
                    ? 'text-[#D4AF37]'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
