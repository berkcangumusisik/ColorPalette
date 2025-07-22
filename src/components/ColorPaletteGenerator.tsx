"use client";

import React, { useState } from 'react';
import ColorDisplay from './ColorDisplay';

const ColorPaletteGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePalette = async () => {
    if (!prompt.trim()) {
      setError("Lütfen bir açıklama girin");
      return;
    }

    setIsLoading(true);
    setError(null);
    setColors([]);

    try {
      const response = await fetch('/api/generate-palette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Bir şeyler yanlış gitti');
      }

      const data = await response.json();
      
      if (!data.colors || !Array.isArray(data.colors) || data.colors.length === 0) {
        throw new Error('Geçerli renk paleti alınamadı');
      }

      setColors(data.colors);

    } catch (err) {
      console.error('Palette generation error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleGeneratePalette();
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative">

      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5 backdrop-blur-2xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Epic title section */}
        <div className="text-center mb-12 sm:mb-16 transform hover:scale-105 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              PALETİNİZİ
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">YARATIN</span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-lg shadow-purple-400/50 mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Sadece birkaç kelime yazın, yapay zeka size büyülü renk kombinasyonları oluştursun
          </p>
        </div>

        {/* Ultra modern input section */}
        <div className="mb-8 sm:mb-12 transform hover:scale-105 transition-all duration-500">
          <div className="bg-white/10 backdrop-blur-3xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500" 
               style={{
                 background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <label className="block text-lg sm:text-xl font-medium text-white/90 mb-3 sm:mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                    ✨ Konseptinizi tanımlayın
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyPress={handleKeyPress}
                    rows={4}
                    placeholder="Örnek: Gün batımında okyanusta dalgalar, neon ışıklı cyberpunk şehir, sonbahar ormanında huzur, İstanbul'da güneşli bir sabah..."
                    className="w-full p-4 sm:p-6 text-base sm:text-lg lg:text-xl bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl sm:rounded-2xl focus:outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-500 resize-none text-white placeholder-white/50 shadow-inner hover:bg-white/15"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-pink-400/5 pointer-events-none"></div>
                </div>
                <p className="text-xs sm:text-sm text-white/60 mt-2 sm:mt-3 flex items-center flex-wrap">
                  <span className="mr-2">⌨️</span>
                  <span className="text-cyan-300">Ctrl + Enter</span> 
                  <span className="ml-1">ile hızlı oluşturma</span>
                </p>
              </div>
              
              <button
                onClick={handleGeneratePalette}
                disabled={isLoading || !prompt.trim()}
                className="w-full px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                style={{
                  backgroundSize: '200% 200%',
                  animation: isLoading ? 'gradient-shift 2s ease-in-out infinite' : 'none'
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 border-2 sm:border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>🎨 Sihir Çalışıyor...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center space-x-3">
                    <span>✨</span>
                    <span>PALET YARAT</span>
                    <span>🚀</span>
                  </span>
                )}
              </button>
            </div>

            {error && (
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-xl border border-red-400/30 text-red-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 sm:w-5 h-3 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">{error}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Epic suggestions */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-white/70 text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center flex-wrap">
            <span className="mr-2">🔥</span>
            <span>Trend öneriler:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
            {[
              { text: 'Cyberpunk gece', gradient: 'from-purple-600 via-pink-600 to-cyan-600' },
              { text: 'Tropikal cennet', gradient: 'from-teal-500 via-green-500 to-yellow-500' },
              { text: 'Minimalist zen', gradient: 'from-gray-600 via-slate-600 to-stone-600' },
              { text: 'Retro synthwave', gradient: 'from-pink-500 via-purple-500 to-indigo-500' },
              { text: 'Orman gizemі', gradient: 'from-emerald-600 via-green-600 to-teal-600' }
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setPrompt(suggestion.text)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gradient-to-r ${suggestion.gradient} text-white font-medium text-xs sm:text-sm lg:text-base rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>

        {colors.length > 0 && <ColorDisplay colors={colors} prompt={prompt} />}
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ColorPaletteGenerator; 