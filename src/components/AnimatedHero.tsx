"use client";

import { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';

// Using core GSAP only to avoid optional plugin dependencies

interface SectionData {
  text: string;
  img: string;
}

interface AnimatedSectionsProps {
  sections?: SectionData[];
  className?: string;
}

const defaultSections: SectionData[] = [
  {
    text: 'Art contemporain sénégalais',
    img: '/images/art_contemporain_senegalais.jpg',
  },
  {
    text: 'Danse traditionnelle sénégalaise',
    img: '/images/danse_traditionnelle_senegalaise.jpg',
  },
  {
    text: 'Musée des Civilisations Noires',
    img: '/images/musee_civilisation_africaine_senegal.jpg',
  },
];

export default function AnimatedHero({
  sections = defaultSections,
  className = '',
}: AnimatedSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  // Removed SplitText usage to avoid optional plugin dependency
  const currentIndexRef = useRef<number>(-1);
  const animatingRef = useRef<boolean>(false);
  const sectionsRefs = useRef<HTMLElement[]>([]);
  const imagesRefs = useRef<HTMLDivElement[]>([]);
  const outerRefs = useRef<HTMLDivElement[]>([]);
  const innerRefs = useRef<HTMLDivElement[]>([]);
  const headingRefs = useRef<HTMLHeadingElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedAutoPlayRef = useRef(false);

  useEffect(() => {
    let loaded = 0;
    sections.forEach((section) => {
      const img = new Image();
      img.src = section.img;
      img.onload = () => {
        loaded++;
        if (loaded === sections.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === sections.length) setImagesLoaded(true);
      };
    });
  }, [sections]);

  const gotoSection = useCallback((index: number, direction: number) => {
    if (!containerRef.current || animatingRef.current) return;

    const sectionsElements = sectionsRefs.current as Element[];
    const images = imagesRefs.current as Element[];
    const outerWrappers = outerRefs.current as Element[];
    const innerWrappers = innerRefs.current as Element[];

    const wrap = gsap.utils.wrap(0, sectionsElements.length);
    index = wrap(index);
    animatingRef.current = true;

    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;

    const tl = gsap.timeline({
      defaults: { duration: 1.9, ease: 'power1.inOut' },
      onComplete: () => {
        animatingRef.current = false;
      },
    });

    timelineRef.current = tl;

    if (currentIndexRef.current >= 0) {
      gsap.set(sectionsElements[currentIndexRef.current], { zIndex: 0 });
      tl.to(images[currentIndexRef.current], { xPercent: -15 * dFactor }).set(
        sectionsElements[currentIndexRef.current],
        { autoAlpha: 0 },
      );
    }

    gsap.set(sectionsElements[index], { autoAlpha: 1, zIndex: 1 });

    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { xPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor) },
      { xPercent: 0 },
      0,
    ).fromTo(images[index], { xPercent: 15 * dFactor }, { xPercent: 0 }, 0);

    // Simple heading reveal animation (no SplitText)
    const heading = headingRefs.current[index];
    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, yPercent: 20 },
        { opacity: 1, yPercent: 0, duration: 0.8, ease: 'power2.out' }
      );
    }

    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !imagesLoaded) return;

    const outerWrappers = outerRefs.current as Element[];
    const innerWrappers = innerRefs.current as Element[];
    const container = containerRef.current;

    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });

    // Use native event listeners instead of Observer plugin
    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 1000) return; // Throttle wheel events
      
      if (!animatingRef.current && Math.abs(e.deltaY) > 10) {
        lastWheelTime = now;
        // Stop auto-play when user interacts
        if (autoPlayTimerRef.current) {
          clearTimeout(autoPlayTimerRef.current);
          autoPlayTimerRef.current = null;
        }
        gotoSection(currentIndexRef.current + 1, 1);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (!animatingRef.current && Math.abs(diff) > 50) {
        // Stop auto-play when user interacts
        if (autoPlayTimerRef.current) {
          clearTimeout(autoPlayTimerRef.current);
          autoPlayTimerRef.current = null;
        }
        gotoSection(currentIndexRef.current + 1, 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Show first image
    gotoSection(0, 1);
    
    // Start auto-play after 3 seconds (only once)
    if (!hasStartedAutoPlayRef.current) {
      hasStartedAutoPlayRef.current = true;
      autoPlayTimerRef.current = setTimeout(() => {
        const autoPlay = () => {
          if (!animatingRef.current) {
            gotoSection(currentIndexRef.current + 1, 1);
          }
          autoPlayTimerRef.current = setTimeout(autoPlay, 5000);
        };
        autoPlay();
      }, 3000);
    }

    return () => {
      // Clean up auto-play timer
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      
      // Clean up event listeners
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [sections.length, imagesLoaded, gotoSection]);

  return (
    <div
      ref={containerRef}
      className={`relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden bg-black text-white uppercase ${className}`}
    >
      {/* Degradé de raccord avec la page (plus prononcé) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[color:rgb(255_255_255_/_0.95)] to-transparent" />

      {sections.map((section, i) => (
        <section
          key={`section-${i}`}
          className="absolute inset-0 invisible"
          ref={(el) => {
            if (el) sectionsRefs.current[i] = el;
          }}
        >
          <div className="outer w-full h-full overflow-hidden" ref={(el) => { if (el) outerRefs.current[i] = el; }}>
            <div className="inner w-full h-full overflow-hidden" ref={(el) => { if (el) innerRefs.current[i] = el; }}>
              <div
                className="bg flex items-center justify-center absolute top-0 h-full w-full bg-cover bg-center"
                ref={(el) => { if (el) imagesRefs.current[i] = el; }}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.0) 100%), url("${section.img}")`,
                }}
              >
                <h2
                  className="section-heading text-white text-center font-semibold w-[90vw] max-w-[1200px] text-[clamp(1.25rem,4vw,4rem)] normal-case leading-tight z-10"
                  ref={(el) => { if (el) headingRefs.current[i] = el; }}
                >
                  {section.text}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}


