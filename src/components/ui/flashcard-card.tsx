"use client"; // Required for state and event handlers

import * as React from 'react';
import { cn } from '../../utils';
import type { Flashcard } from '../../types';

// --- PROPS INTERFACE ---
interface FlashcardCardProps {
  card: Flashcard;
  className?: string;
}

// --- COMPONENT DEFINITION ---
// A single-face flashcard built on the "card-7" interactive aesthetic: a 3D
// cursor-tilt, a photo background with glassmorphism panels, and the FluentUI 3D
// hero art from the PopQuiz brand. The term AND its definition both live on the
// front - no flip needed.
export function FlashcardCard({ card, className }: FlashcardCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState<React.CSSProperties>({});
  const [imgOk, setImgOk] = React.useState(true);

  // Reset the texture flag whenever the card changes so a new image gets a try.
  React.useEffect(() => {
    setImgOk(true);
  }, [card.id]);

  // --- MOUSE MOVE HANDLER (cursor-following 3D tilt) ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -6; // Max rotation 6deg
    const rotateY = ((x - width / 2) / (width / 2)) * 6; // Max rotation 6deg

    setTilt({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  // --- MOUSE LEAVE HANDLER ---
  const handleMouseLeave = () => {
    setTilt({
      transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-in-out',
    });
  };

  return (
    <div
      style={{ perspective: '1200px' }}
      className={cn('mx-auto h-full w-full max-w-[440px]', className)}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...tilt, transformStyle: 'preserve-3d' }}
        className="relative h-full max-h-[720px] min-h-[440px] w-full overflow-hidden rounded-[32px] shadow-xl"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{ background: card.gradient }}
        />

        {/* Optional Unsplash texture (gracefully falls back to gradient) */}
        {imgOk && (
          <img
            src={card.imageUrl}
            alt=""
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 mix-blend-overlay"
          />
        )}

        {/* Depth overlay - darker top & bottom for legible native text, lighter
            middle so the glowing hero icon pops. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/80" />

        {/* Decorative floating accents (brand) to fill negative space */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[14%] top-[16%] h-2 w-2 rounded-full bg-[#FFDA85]/70 blur-[1px]" />
          <div className="absolute right-[15%] top-[26%] h-3 w-3 rounded-full bg-[#FFDA85]/45 blur-[2px]" />
          <div className="absolute bottom-[30%] left-[18%] h-2.5 w-2.5 rounded-full bg-[#9B8FFF]/45 blur-[2px]" />
          <div className="absolute bottom-[22%] right-[20%] h-1.5 w-1.5 rounded-full bg-white/40" />
          <div className="absolute right-[24%] top-[40%] h-1 w-1 rounded-full bg-white/35" />
        </div>

        {/* Content (lifted in 3D space) - text sits natively on the card.
            The block is centered together so it reads full, not sparse. */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-7 text-center"
          style={{ transform: 'translateZ(45px)' }}
        >
          {/* Topic (above the icon) */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]">
              {card.category}
            </span>
            <h3 className="mt-2 text-[33px] font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
              {card.term}
            </h3>
          </div>

          {/* Hero 3D icon with the signature warm radial glow */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_#FFE099_0%,_transparent_65%)] opacity-60 blur-md" />
            <img
              src={card.emojiUrl}
              alt={card.term}
              className="relative z-10 h-44 w-44 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Description (below the icon) */}
          <p className="max-w-[310px] text-[15.5px] font-medium leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
            {card.definition}
          </p>
        </div>
      </div>
    </div>
  );
}
