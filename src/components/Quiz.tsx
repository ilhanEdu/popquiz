import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { cn } from '../utils';
import { motion, AnimatePresence } from 'motion/react';

const POINTS_BASE = 100;
const AUTO_ADVANCE_DELAY = 1800; // delay to show correct/wrong before next

type QuizProps = {
  questions: Question[];
  onFinish: (
    score: number,
    correctCount: number,
    wrongCount: number,
    answers: any[],
    maxStreak: number
  ) => void;
};

const getImageUrl = (topic: string) => {
  const map: Record<string, string> = {
    "Core Philosophy": "Gem%20stone/3D/gem_stone_3d.png",
    "Market Strategy": "Chart%20increasing/3D/chart_increasing_3d.png",
    "Ecosystem": "Globe%20with%20meridians/3D/globe_with_meridians_3d.png",
    "Product Focus": "Bullseye/3D/bullseye_3d.png",
    "Infrastructure": "Link/3D/link_3d.png",
    "Technical Knowledge": "Gear/3D/gear_3d.png",
    "Performance": "High%20voltage/3D/high_voltage_3d.png",
    "Trading Concepts": "Coin/3D/coin_3d.png",
    "Capital Efficiency": "Money%20with%20wings/3D/money_with_wings_3d.png",
    "Liquidity": "Droplet/3D/droplet_3d.png",
    "Product Vision": "Telescope/3D/telescope_3d.png",
    "Security": "Shield/3D/shield_3d.png",
    "Product Launch": "Rocket/3D/rocket_3d.png",
    "Terminology": "Books/3D/books_3d.png",
    "Funding": "Money%20bag/3D/money_bag_3d.png",
    "PopLab": "Test%20tube/3D/test_tube_3d.png",
    "Comprehension": "Brain/3D/brain_3d.png",
    "Core Vision": "Crystal%20ball/3D/crystal_ball_3d.png",
    "Hard Mode": "Fire/3D/fire_3d.png",
  };
  const path = map[topic] || "Coin/3D/coin_3d.png";
  return `https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/${path}`;
};


export default function Quiz({ questions, onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const autoAdvanceRef = useRef<any>(null);

  const currentQuestion = questions[currentIndex];
  
  useEffect(() => {
    setSelectedOption(null);
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, [currentIndex]);

  const advance = (ans: any[], scr: number, cc: number, wc: number, ms: number) => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    if (currentIndex + 1 >= questions.length) {
      onFinish(scr, cc, wc, ans, ms);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleManualNext = () => {
    if (selectedOption === null) return; 
    advance(answers, score, correctCount, wrongCount, maxStreak);
  };

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    const isCorrect = index === currentQuestion.correctIndex;
    let points = 0;

    let newStreak = streak;
    let newMaxStreak = maxStreak;
    let newScore = score;
    let newCorrect = correctCount;
    let newWrong = wrongCount;

    if (isCorrect) {
      points = POINTS_BASE;
      newStreak++;
      if (newStreak > newMaxStreak) newMaxStreak = newStreak;
      if (newStreak >= 3) points += newStreak * 10;

      newScore += points;
      newCorrect++;
      setMaxStreak(newMaxStreak);
      setScore(newScore);
      setCorrectCount(newCorrect);
      setStreak(newStreak);
    } else {
      newStreak = 0;
      newWrong++;
      setStreak(newStreak);
      setWrongCount(newWrong);
    }

    const newAnswers = [
      ...answers,
      { 
        questionId: currentQuestion.id, 
        selectedIndex: index, 
        correct: isCorrect, 
        points 
      }
    ];
    setAnswers(newAnswers);

    autoAdvanceRef.current = setTimeout(() => advance(newAnswers, newScore, newCorrect, newWrong, newMaxStreak), AUTO_ADVANCE_DELAY);
  };

  return (
    <div className="absolute inset-0 bg-[#FDF9F1] flex flex-col items-center pt-8 pb-8 px-6 font-sans overflow-y-auto overflow-x-hidden">
      
      {/* Top Header Label */}
      <div className="bg-[#F1EFEA] text-[#1C1A17] font-semibold text-[13px] px-4 py-1.5 rounded-full mb-6 shadow-sm z-10">
        Question <span className="font-bold">{currentIndex + 1}</span> of <span className="font-bold">{questions.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center w-full max-w-md flex-1"
        >
          <h1 className="text-2xl font-extrabold text-[#1C1A17] tracking-tight mb-4 text-center leading-snug px-2">
            {currentQuestion.question}
          </h1>

          {/* 3D Image Area with glowing radial background */}
          <div className="relative w-full max-w-[280px] h-[200px] flex items-center justify-center mb-4 shrink-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFE099_0%,_transparent_65%)] animate-pulse mix-blend-multiply opacity-50" />
            
            {/* Decorative particles */}
            <div className="absolute top-[15%] left-[5%] w-2 h-2 bg-[#FFDa85] rounded-full blur-[1px]" />
            <div className="absolute bottom-[20%] right-[10%] w-3 h-3 bg-[#FFDa85] rounded-full blur-[1.5px]" />
            <div className="absolute top-[80%] left-[15%] w-1.5 h-1.5 bg-[#FFDa85] rounded-full" />
            
            <img 
              src={getImageUrl(currentQuestion.topic)} 
              alt={currentQuestion.topic} 
              className="w-32 h-32 object-contain drop-shadow-xl opacity-90 z-10 transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-3 w-full mt-4 mb-auto">
            {currentQuestion.options.map((opt, i) => {
              const hasAnswered = selectedOption !== null;
              const isSelected = selectedOption === i;
              const isCorrect = i === currentQuestion.correctIndex;
              
              let btnClass = "bg-white border-[#E9E4DB] text-[#1C1A17] hover:border-[#FFDa85] hover:bg-[#FFF9EA]";

              if (hasAnswered) {
                 if (isCorrect) {
                    // Using the exact yellow from screenshot for the correct selected answer
                    btnClass = "bg-[#FFDA85] border-[#FFDA85] text-[#1C1A17]";
                 } else if (isSelected) {
                    // If they got it wrong, let's keep the soft red so they know
                    btnClass = "bg-[#FECACA] border-[#F87171] text-[#7F1D1D]";
                 } else {
                    btnClass = "opacity-50 bg-white border-[#E9E4DB] text-[#1C1A17]";
                 }
              }

              return (
                <button
                  key={i}
                  disabled={hasAnswered}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    "p-4 rounded-[22px] border flex items-center justify-center text-center transition-all duration-200 shadow-sm",
                    btnClass
                  )}
                >
                  <span className="font-semibold text-[14px] leading-tight">{opt}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next Button */}
      <button 
        onClick={handleManualNext}
        disabled={selectedOption === null}
        className={cn(
          "w-full max-w-sm py-4 rounded-[22px] font-bold text-[17px] transition-all duration-300 mt-6 shrink-0",
          selectedOption === null 
            ? "bg-[#E9E4DB] text-[#A39E93] cursor-not-allowed opacity-50" 
            : "bg-[#1A1A1A] text-white hover:bg-black active:scale-[0.98] shadow-lg"
        )}
      >
        Next
      </button>

    </div>
  );
}
