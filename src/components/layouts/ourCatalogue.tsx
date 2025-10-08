import React from 'react';
import Image from 'next/image';
import { RevealImageListItem } from '../ui/reveal-images';
import { FaPaintBrush, FaCamera, FaVideo, FaCube,} from 'react-icons/fa';
import { GiChessKing } from 'react-icons/gi';
import { FaScroll } from "react-icons/fa6";

const catalogueItems = [
  { text: 'Peintures', image: '/images/peinture -mcn drive.jpg', icon: <FaPaintBrush /> },
  { text: 'Sculptures', image: '/images/sculture -mcn drive.jpg', icon: <GiChessKing /> },
  { text: 'Tapisseries', image: '/images/tapisserie -mcn drive.jpg', icon: <FaScroll /> },
  { text: 'Photographies', image: '/images/photographie - mcn drive .jpg', icon: <FaCamera /> },
  { text: 'Vidéo arts', image: '/images/video - mcn drive.jpg', icon: <FaVideo /> },
  { text: 'Installations', image: '/images/installation - mcn drive .jpg', icon: <FaCube /> },
];

export default function OurCatalogue() {
  return (
    <div className="bg-[var(--brown)] py-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        {/* Text Section - Appears first on mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gold)] mb-8 text-center md:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ce qui est visible au musée
          </h2>
          <div className="space-y-4">
            {catalogueItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-[var(--gold)] text-2xl">{item.icon}</span>
                <RevealImageListItem
                  text={item.text}
                  images={[
                    { src: item.image, alt: item.text },
                    { src: item.image, alt: item.text }
                  ]}
                  textClassName="text-2xl md:text-3xl text-[var(--gold)] font-light font-merriweather"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Image Section - Appears second on mobile */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden order-2 md:order-1">
          <Image src="/images/visites 1.png" alt="Visites au musée" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
