import React, { useState } from 'react';

interface ColorDisplayProps {
  colors: string[];
  prompt: string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ colors, prompt }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const copyToClipboard = async (color: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Modern async clipboard API
        await navigator.clipboard.writeText(color);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = color;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Kopyalama hatası:', err);
      // Fallback method
      try {
        const textArea = document.createElement('textarea');
        textArea.value = color;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 2000);
      } catch (fallbackErr) {
        console.error('Fallback kopyalama da başarısız:', fallbackErr);
        alert(`Renk kodu: ${color}\n\nManuel olarak kopyalayın.`);
      }
    }
  };

  const downloadPalette = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1500;
    canvas.height = 400;

    colors.forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillRect((index * 1500) / colors.length, 0, 1500 / colors.length, 400);
    });

    const link = document.createElement('a');
    link.download = `epic-palette-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="mt-16 sm:mt-20">
      <div className="bg-white/5 backdrop-blur-3xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/10" 
           style={{
             background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
           }}>
        
        {/* Epic header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 transform hover:scale-105 transition-all duration-500">
          <div className="mb-6 sm:mb-8 lg:mb-0 w-full lg:w-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                EFSANE
              </span>
              <span className="text-white ml-2 sm:ml-3">PALETİNİZ</span>
            </h3>
            <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-purple-400/50 mb-3 sm:mb-4"></div>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg italic max-w-lg">
              "<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold">{prompt}</span>" 
              <span className="text-white/60"> konsepti için özel yaratıldı</span>
            </p>
          </div>
          
          <button
            onClick={downloadPalette}
            className="group w-full lg:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 hover:-translate-y-2 flex items-center justify-center space-x-2 sm:space-x-3"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>4K İNDİR</span>
            <span className="text-lg sm:text-2xl">🚀</span>
          </button>
        </div>

        {/* EPIC color grid - responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {colors.map((color, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-700 hover:scale-110 sm:hover:scale-125 hover:z-50 relative"
              onClick={() => copyToClipboard(color)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 3D Color Card */}
              <div className="relative mb-4 sm:mb-6 perspective-1000">
                <div 
                  className="w-full h-24 sm:h-32 lg:h-40 xl:h-48 rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/20 group-hover:shadow-3xl transition-all duration-700 relative overflow-hidden transform group-hover:rotateY-12 group-hover:-translate-y-2 sm:group-hover:-translate-y-4"
                  style={{ 
                    backgroundColor: color,
                    boxShadow: `0 25px 50px -12px ${color}40, 0 0 0 1px rgba(255,255,255,0.1)`
                  }}
                >
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl">
                    <div className="text-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 animate-bounce">
                        {copiedColor === color ? '✨' : '📋'}
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm lg:text-lg bg-black/50 px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full backdrop-blur-lg border border-white/20">
                        {copiedColor === color ? '🎉 KOPYALANDI!' : '✨ KOPYALA'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Glowing ring */}
                  <div 
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-500 ${hoveredIndex === index ? 'ring-2 sm:ring-4 ring-white/50' : ''}`}
                  ></div>
                </div>
                
                {/* Floating glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-30 blur-2xl group-hover:opacity-60 transition-all duration-700 -z-10 group-hover:scale-150"
                  style={{ backgroundColor: color }}
                ></div>
                
                {/* Particle effect - only on larger screens */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none hidden sm:block">
                    <div className="absolute top-2 left-2 w-1 sm:w-2 h-1 sm:h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-4 right-6 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute bottom-6 left-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                  </div>
                )}
              </div>
              
              {/* Epic color info */}
              <div className="text-center transform group-hover:scale-110 transition-all duration-300">
                <p className="font-mono text-xs sm:text-sm lg:text-lg font-black text-white mb-1 sm:mb-2 drop-shadow-lg break-all">
                  {color.toUpperCase()}
                </p>
                <p className="text-white/60 text-xs sm:text-sm font-medium">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                    Renk #{index + 1}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Epic usage tip */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 transform hover:scale-105 transition-all duration-500">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl transform hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  💡 PRO İPUÇLARI
                </span>
              </h4>
              <ul className="text-white/80 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
                <li className="flex items-center"><span className="mr-3">🖱️</span> Renklere tıklayarak hex kodunu kopyalayın</li>
                <li className="flex items-center"><span className="mr-3">🎨</span> Tasarımlarınızda anında kullanın</li>
                <li className="flex items-center"><span className="mr-3">📱</span> Mobil uygulamalarınızda test edin</li>
                <li className="flex items-center"><span className="mr-3">💾</span> 4K kalitede paleti indirin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom 3D animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotateY-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </div>
  );
};

export default ColorDisplay; 