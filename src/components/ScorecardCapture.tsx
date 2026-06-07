import React from 'react';
import QRCode from 'react-qr-code';

type ScorecardCaptureProps = {
  score: number;
  accuracy: number;
  correctCount: number;
  wrongCount: number;
  username: string;
};

export default function ScorecardCapture({
  score,
  accuracy,
  correctCount,
  wrongCount,
  username
}: ScorecardCaptureProps) {
  
  const isExcellent = accuracy >= 80;
  const isGood = accuracy >= 50 && accuracy < 80;
  
  let mascotUrl = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/3D/brain_3d.png";
  let title = "Learning the Ropes";
  let highlightColor = "#F87171"; // Red

  if (isExcellent) {
    mascotUrl = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Trophy/3D/trophy_3d.png";
    title = "Elite Trader Status";
    highlightColor = "#FFDA85"; // Gold
  } else if (isGood) {
    mascotUrl = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png";
    title = "Solid Performer";
    highlightColor = "#4ADE80"; // Green
  }

  const today = new Date();
  const dateString = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <div id="scorecard-capture" className="w-[840px] h-[440px] bg-[#0A0A0A] rounded-[24px] p-10 flex flex-col font-sans relative overflow-hidden border border-[#2B2B2B]">
      
      {/* Background Glow */}
      <div className="absolute -top-[200px] -right-[100px] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: highlightColor, zIndex: 0 }} />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2B2B2B] to-transparent" />
      
      {/* Top-Right Watermark */}
      <div className="absolute top-6 right-8 text-white/90 text-[20px] tracking-wide z-20" style={{ fontFamily: "'Caveat', cursive" }}>
        Powered by @ilhanEdu
      </div>
      
      <div className="relative z-10 flex h-full w-full">
        {/* Left Column */}
        <div className="flex flex-col flex-1 h-full pl-2">
          
          {/* Header / Logo */}
          <div className="font-extrabold text-[32px] tracking-tight text-white flex items-center mb-6">
            <span className="text-[#FFDA85]">Pop</span>Quiz
          </div>

          {/* Title & User */}
          <div className="mb-4 inline-block px-3 py-1.5 rounded-lg text-[14px] font-bold tracking-wide self-start shadow-sm" style={{ color: '#0A0A0A', backgroundColor: highlightColor }}>
            {title}
          </div>
          
          <div className="text-[#E0E0E0] text-[22px] font-semibold mb-2 flex items-center gap-3">
             <div className="w-9 h-9 rounded-full flex items-center justify-center text-[16px] font-bold text-white shadow-inner border border-[#333]" style={{ backgroundColor: '#1A1A1A' }}>
               {username ? username.substring(0, 1).toUpperCase() : 'T'}
             </div>
             {username || 'Trader'}
          </div>

          {/* Score */}
          <div className="mt-6 mb-8">
            <div className="text-[#848E9C] text-[18px] font-medium mb-1">Total Score</div>
            <div className="font-black text-[80px] tracking-tighter leading-none text-white flex items-baseline gap-2">
              {score} <span className="text-[24px] font-bold text-[#FFDA85] tracking-normal mb-2">PTS</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-8 text-white mt-auto pb-2">
            <div>
              <div className="text-[#848E9C] text-[14px] font-medium mb-1">Accuracy</div>
              <div className="text-[24px] font-bold">{accuracy}%</div>
            </div>
            <div className="w-[1px] h-10 bg-[#2B2B2B]"></div>
            <div>
              <div className="text-[#848E9C] text-[14px] font-medium mb-1">Correct</div>
              <div className="text-[24px] font-bold text-[#4ADE80]">{correctCount}</div>
            </div>
            <div className="w-[1px] h-10 bg-[#2B2B2B]"></div>
            <div>
              <div className="text-[#848E9C] text-[14px] font-medium mb-1">Missed</div>
              <div className="text-[24px] font-bold text-[#F87171]">{wrongCount}</div>
            </div>
          </div>

        </div>

        {/* Right Column / Mascot & Footer bg */}
        <div className="w-[340px] relative flex flex-col items-end justify-between h-full pt-4">
          
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={mascotUrl} 
              alt="Mascot" 
              crossOrigin="anonymous"
              className="w-[280px] h-[280px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
            />
          </div>

          <div className="mt-auto w-full flex items-end justify-end gap-4 relative z-20">
            <div className="text-right">
              <div className="text-white font-extrabold text-[20px] tracking-tight">popquizz.vercel.app</div>
              <div className="text-[#848E9C] text-[14px] mt-1 font-medium">Assessed: {dateString}</div>
            </div>
            <div className="bg-white p-2.5 rounded-xl shadow-lg border border-[#E9E4DB]">
              <div style={{ width: 44, height: 44 }}>
                <QRCode 
                  value="https://popquizz.vercel.app" 
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
