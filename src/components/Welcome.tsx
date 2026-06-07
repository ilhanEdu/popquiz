import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logoUrl from '../../assets/popquiz.png';

type WelcomeProps = {
  onStart: (username: string) => void;
  onBack?: () => void;
};

export default function Welcome({ onStart, onBack }: WelcomeProps) {
  const [username, setUsername] = React.useState(localStorage.getItem('popquiz_username') || '');
  const [error, setError] = React.useState(false);

  const handleStart = () => {
    if (!username.trim()) {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }
    localStorage.setItem('popquiz_username', username.trim());
    onStart(username.trim());
  };

  return (
    <div className="absolute inset-0 bg-[#FDF9F1] flex flex-col items-center justify-center pt-8 pb-8 px-6 font-sans">

      {onBack && (
        <button
          onClick={onBack}
          aria-label="Back to menu"
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white border border-[#E9E4DB] flex items-center justify-center text-[#1C1A17] shadow-sm hover:bg-[#FDF9F1] active:scale-95 transition-all"
        >
          <ArrowLeft size={18} />
        </button>
      )}

      <div className="w-full max-w-sm flex flex-col items-center">
        
        {/* Top Header Label */}
        <div className="bg-[#FFDA85] text-[#1C1A17] font-semibold text-[13px] px-4 py-1.5 rounded-full mb-8 shadow-sm tracking-wide">
          Trading Quiz
        </div>

        <h1 className="text-5xl font-extrabold text-[#1C1A17] tracking-tighter mb-4 text-center leading-none">
          PopQuiz
        </h1>
        <p className="text-lg font-medium text-[#736E67] mb-10 text-center">
          Know Your Trade. Win The Night.
        </p>

        {/* 3D Image Area with glowing radial background */}
        <div className="relative w-full max-w-[240px] h-[200px] flex items-center justify-center mb-10 shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFE099_0%,_transparent_65%)] animate-pulse mix-blend-multiply opacity-50" />
          
          <img 
            src={logoUrl} 
            alt="PopQuiz Logo" 
            className="relative z-10 w-48 h-48 object-contain transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>

        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Enter your trader name..."
            maxLength={16}
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
            className={`w-full px-5 py-4 bg-white border-2 rounded-[22px] text-center text-[#1C1A17] text-[15px] font-semibold outline-none transition-all placeholder:text-[#A39E93] focus:border-[#FFDa85] shadow-sm ${
              error ? 'border-[#F87171] animate-pulse bg-red-50' : 'border-[#E9E4DB]'
            }`}
          />
        </div>

        {/* Start Button */}
        <button 
          onClick={handleStart}
          className="w-full py-4 rounded-[22px] font-bold text-[17px] transition-all duration-300 bg-[#1A1A1A] text-white hover:bg-black active:scale-[0.98] shadow-lg"
        >
          Start Quiz
        </button>

      </div>
    </div>
  );
}
