import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';
import { AnswerRecord } from '../types';
import ScorecardCapture from './ScorecardCapture';

type ResultsProps = {
  score: number;
  correctCount: number;
  wrongCount: number;
  maxStreak: number;
  answers: AnswerRecord[];
  totalQuestions: number;
  username: string;
  onPlayAgain: () => void;
};

export default function Results({
  score, correctCount, wrongCount, totalQuestions, username, onPlayAgain
}: ResultsProps) {
  const [downloading, setDownloading] = useState(false);
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  
  useEffect(() => {
    if (accuracy >= 60) {
      const duration = 2500;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FFDA85', '#1A1A1A', '#FFF9EA', '#4ADE80']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FFDA85', '#1A1A1A', '#FFF9EA', '#4ADE80']
        });

        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [accuracy]);

  return (
    <div className="absolute inset-0 bg-[#FDF9F1] flex flex-col items-center pt-8 pb-8 px-6 font-sans overflow-y-auto w-full">
      <div className="w-full max-w-sm flex flex-col items-center h-full">
        
        <div className="bg-[#F1EFEA] text-[#1C1A17] font-semibold text-[13px] px-4 py-1.5 rounded-full mb-8 shadow-sm">
          Quiz Complete
        </div>

        <h1 className="text-4xl font-extrabold text-[#1C1A17] tracking-tight mb-8 text-center leading-snug">
          Your Score
        </h1>
        
        {/* Score Ring */}
        <div className="relative w-40 h-40 mx-auto mb-8 shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFE099_0%,_transparent_65%)] animate-pulse mix-blend-multiply opacity-50" />
          <svg viewBox="0 0 160 160" className="-rotate-90 w-full h-full relative z-10">
            <circle cx="80" cy="80" r="68" fill="none" className="stroke-[#E9E4DB] stroke-[8]" />
            <circle 
              cx="80" cy="80" r="68" fill="none" 
              className="stroke-[#FFDA85] stroke-[8] transition-all duration-[1.5s] ease-out" 
              strokeLinecap="round" 
              style={{ strokeDasharray: 427, strokeDashoffset: 427 - (427 * (accuracy / 100)) }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-1 z-20">
            <div className="font-extrabold text-4xl text-[#1C1A17] leading-none tracking-tighter">{score}</div>
            <div className="text-[11px] font-bold text-[#736E67] mt-1">POINTS</div>
          </div>
        </div>

        {/* Accuracy and Badge */}
        <div className="font-bold text-lg text-[#1C1A17] mb-3">{accuracy}% Accuracy</div>
        <div className="inline-flex items-center gap-1.5 text-[13px] font-bold px-4 py-1.5 bg-[#FFDA85] text-[#1C1A17] rounded-full mb-10 shadow-sm">
          {accuracy >= 90 ? '🏆 Quiz Champion' : accuracy >= 70 ? '🥈 Sharp Trader' : accuracy >= 50 ? '🥉 Getting There' : '✦ Participant'}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 w-full mb-auto">
          <div className="bg-white border border-[#E9E4DB] rounded-[20px] p-5 text-center shadow-sm">
            <div className="text-[32px] font-extrabold text-[#4ADE80] leading-none mb-1">{correctCount}</div>
            <div className="text-[11px] font-bold text-[#736E67]">CORRECT</div>
          </div>
          <div className="bg-white border border-[#E9E4DB] rounded-[20px] p-5 text-center shadow-sm">
            <div className="text-[32px] font-extrabold text-[#F87171] leading-none mb-1">{wrongCount}</div>
            <div className="text-[11px] font-bold text-[#736E67]">MISSED</div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full mt-8 shrink-0 flex flex-col gap-3">
          <button 
            onClick={onPlayAgain}
            className="w-full py-4 rounded-[22px] font-bold text-[17px] transition-all duration-300 bg-[#1A1A1A] text-white hover:bg-black active:scale-[0.98] shadow-lg"
          >
            Play Again
          </button>
          
          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              onClick={() => {
                const text = `I just scored ${score} pts with ${accuracy}% accuracy on PopQuiz.\nCan you beat my score?\n\n#PopDEX #PopQuiz`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
              }}
              className="w-full py-4 rounded-[22px] font-bold text-[15px] transition-all duration-300 bg-white border-2 border-[#E9E4DB] text-[#1C1A17] hover:bg-[#FDF9F1] active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
            >
              Share Score
            </button>

            <button
              onClick={async () => {
                const node = document.getElementById('scorecard-capture');
                if (node) {
                  setDownloading(true);
                  try {
                    const dataUrl = await toPng(node, { 
                      quality: 0.95, 
                      pixelRatio: 2, 
                      skipFonts: true, // Prevents CORS issues with web fonts
                      fetchRequestInit: { credentials: 'omit' } // Helps bypass some strict image CORS blocks
                    });
                    const link = document.createElement('a');
                    link.download = `${username}-popquiz-score.png`;
                    link.href = dataUrl;
                    link.click();
                  } catch (err) {
                    console.error('Error generating image', err);
                  } finally {
                    setDownloading(false);
                  }
                }
              }}
              disabled={downloading}
              className="w-full py-4 rounded-[22px] font-bold text-[15px] transition-all duration-300 bg-white border-2 border-[#E9E4DB] text-[#1C1A17] hover:bg-[#FDF9F1] active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {downloading ? 'Downloading...' : 'Download Card'}
            </button>
          </div>
        </div>

      </div>

      {/* Hidden Scorecard for Capture */}
      <div className="absolute top-[-9999px] left-[-9999px]">
        <ScorecardCapture 
          score={score}
          accuracy={accuracy}
          correctCount={correctCount}
          wrongCount={wrongCount}
          username={username}
        />
      </div>
    </div>
  );
}
