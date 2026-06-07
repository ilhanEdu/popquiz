import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Shuffle, ChevronLeft, ChevronRight } from 'lucide-react';
import { FlashcardCard } from './ui/flashcard-card';
import { FLASHCARDS } from '../flashcardData';
import { shuffleArray } from '../utils';
import { Flashcard } from '../types';

type FlashcardsProps = {
  onBack: () => void;
};

// How far / fast a drag must be to count as a swipe.
const SWIPE_OFFSET = 70;
const SWIPE_VELOCITY = 450;

export default function Flashcards({ onBack }: FlashcardsProps) {
  const [deck, setDeck] = useState<Flashcard[]>(FLASHCARDS);
  const [index, setIndex] = useState(0);
  // Direction drives the slide animation (1 = forward, -1 = back).
  const [direction, setDirection] = useState(1);

  const current = deck[index];
  const isFirst = index === 0;
  const isLast = index === deck.length - 1;

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setIndex(next);
  };

  const next = () => {
    if (!isLast) go(index + 1, 1);
  };

  const prev = () => {
    if (!isFirst) go(index - 1, -1);
  };

  const handleShuffle = () => {
    setDeck(shuffleArray(deck));
    setDirection(1);
    setIndex(0);
  };

  // Desktop convenience: arrow keys mirror the swipe gesture.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className="absolute inset-0 bg-[#FDF9F1] flex flex-col items-center pt-6 pb-6 px-3 font-sans overflow-hidden">
      {/* Top bar: back + title pill + shuffle */}
      <div className="w-full max-w-md flex items-center justify-between mb-5 z-10">
        <button
          onClick={onBack}
          aria-label="Back to menu"
          className="w-10 h-10 rounded-full bg-white border border-[#E9E4DB] flex items-center justify-center text-[#1C1A17] shadow-sm hover:bg-[#FDF9F1] active:scale-95 transition-all"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="bg-[#F1EFEA] text-[#1C1A17] font-semibold text-[13px] px-4 py-1.5 rounded-full shadow-sm">
          Card <span className="font-bold">{index + 1}</span> of{' '}
          <span className="font-bold">{deck.length}</span>
        </div>

        <button
          onClick={handleShuffle}
          aria-label="Shuffle deck"
          className="w-10 h-10 rounded-full bg-white border border-[#E9E4DB] flex items-center justify-center text-[#1C1A17] shadow-sm hover:bg-[#FDF9F1] active:scale-95 transition-all"
        >
          <Shuffle size={16} />
        </button>
      </div>

      {/* Card stage - the card fills the available space and is dragged to browse */}
      <div className="relative w-full flex-1 flex items-stretch justify-center min-h-0 px-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            whileTap={{ cursor: 'grabbing' }}
            onDragEnd={(_e, info: { offset: { x: number }; velocity: { x: number } }) => {
              const { offset, velocity } = info;
              if (offset.x < -SWIPE_OFFSET || velocity.x < -SWIPE_VELOCITY) next();
              else if (offset.x > SWIPE_OFFSET || velocity.x > SWIPE_VELOCITY) prev();
            }}
            initial={{ opacity: 0, x: direction * 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -60, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex w-full max-w-[440px] cursor-grab touch-pan-y"
          >
            <FlashcardCard card={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Swipe hint + progress dots */}
      <div className="flex flex-col items-center gap-3 mt-5 shrink-0">
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#A39E93]">
          <ChevronLeft size={14} />
          Swipe to browse
          <ChevronRight size={14} />
        </div>

        <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-[240px]">
          {deck.map((c, i) => (
            <button
              key={c.id}
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-[#1C1A17]' : 'w-1.5 bg-[#D9D3C8] hover:bg-[#B7B0A3]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
