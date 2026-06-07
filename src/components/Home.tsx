import React from 'react';
import { motion } from 'motion/react';
import logoUrl from '../../assets/popquiz.png';

type HomeProps = {
  onSelect: (mode: 'quiz' | 'flashcards') => void;
};

// FluentUI 3D emojis - same source the Quiz/Flashcards use, for a consistent
// 3D look instead of flat line icons.
const EMOJI_BASE =
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets';
const QUIZ_ICON = `${EMOJI_BASE}/Brain/3D/brain_3d.png`;
const FLASHCARDS_ICON = `${EMOJI_BASE}/Books/3D/books_3d.png`;

export default function Home({ onSelect }: HomeProps) {
  return (
    <div className="absolute inset-0 bg-[#FDF9F1] flex flex-col items-center justify-center pt-8 pb-8 px-6 font-sans">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Top Header Label */}
        <div className="bg-[#FFDA85] text-[#1C1A17] font-semibold text-[13px] px-4 py-1.5 rounded-full mb-7 shadow-sm tracking-wide">
          Trading Arena
        </div>

        {/* Logo with glow */}
        <div className="relative w-full max-w-[160px] h-[130px] flex items-center justify-center mb-5 shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFE099_0%,_transparent_65%)] animate-pulse mix-blend-multiply opacity-50" />
          <img
            src={logoUrl}
            alt="PopQuiz Logo"
            className="relative z-10 w-32 h-32 object-contain"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-[#1C1A17] tracking-tighter mb-3 text-center leading-none">
          PopQuiz
        </h1>
        <p className="text-[16px] font-medium text-[#736E67] mb-9 text-center">
          Know Your Trade. Win The Night.
        </p>

        {/* Mode icons (app-icon style: squircle + label) */}
        <div className="w-full grid grid-cols-2 gap-5 max-w-[320px]">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => onSelect('quiz')}
            className="group flex flex-col items-center gap-3"
          >
            <div className="relative w-[96px] h-[96px] rounded-[28px] bg-[#1A1A1A] flex items-center justify-center shadow-lg transition-transform group-hover:-translate-y-1">
              <div className="absolute h-16 w-16 rounded-full bg-[radial-gradient(circle_at_center,_#FFE099_0%,_transparent_70%)] opacity-50 blur-sm" />
              <img
                src={QUIZ_ICON}
                alt=""
                className="relative h-[58px] w-[58px] object-contain drop-shadow-lg"
              />
            </div>
            <div className="text-center">
              <div className="font-bold text-[16px] text-[#1C1A17] leading-tight">
                Trading Quiz
              </div>
              <div className="text-[12px] text-[#736E67] font-medium mt-0.5">
                15 questions
              </div>
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => onSelect('flashcards')}
            className="group flex flex-col items-center gap-3"
          >
            <div className="relative w-[96px] h-[96px] rounded-[28px] bg-[#FFF0DE] border border-[#F3E2C8] flex items-center justify-center shadow-md transition-transform group-hover:-translate-y-1">
              <div className="absolute h-16 w-16 rounded-full bg-[radial-gradient(circle_at_center,_#FFD27A_0%,_transparent_70%)] opacity-40 blur-sm" />
              <img
                src={FLASHCARDS_ICON}
                alt=""
                className="relative h-[58px] w-[58px] object-contain drop-shadow-lg"
              />
            </div>
            <div className="text-center">
              <div className="font-bold text-[16px] text-[#1C1A17] leading-tight">
                Flashcards
              </div>
              <div className="text-[12px] text-[#736E67] font-medium mt-0.5">
                Swipe to learn
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
