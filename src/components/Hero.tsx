import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 text-center overflow-hidden">
      {/* Ultra glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/2 to-transparent backdrop-blur-lg"></div>
      
      {/* 3D Floating elements behind text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse transform hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto transform perspective-1000">
        {/* MEGA TITLE with 3D effect */}
        <div className="mb-8 sm:mb-12 transform hover:scale-105 transition-all duration-700">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 leading-none tracking-tight">
            <span className="inline-block text-white drop-shadow-2xl transform hover:rotateY-12 transition-transform duration-500">
              RENK
            </span>
            <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-yellow-400 animate-gradient-x drop-shadow-2xl transform hover:rotateY-12 transition-transform duration-500 delay-100">
              EVRENİ
            </span>
          </h1>
          
          {/* Glowing underline */}
          <div className="w-24 sm:w-32 md:w-48 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full shadow-lg shadow-purple-400/50 animate-pulse"></div>
        </div>

        {/* Epic subtitle */}
        <div className="mb-12 sm:mb-16 transform hover:scale-105 transition-all duration-500">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 font-light mb-6 sm:mb-8 leading-relaxed drop-shadow-lg px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
              Yapay Zeka ile
            </span>
            <br />
            <span className="text-white">Sınırsız Renk Keşfi</span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            Hayal gücünüzün sınırlarını aşın. Her konsept için mükemmel uyumlu 
            renk paletleri oluşturun ve tasarımlarınızı bir üst seviyeye taşıyın.
          </p>
        </div>

        {/* Floating feature cards */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-16 sm:mb-20 px-4">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20">
              <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">🤖 AI Powered</span>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20" style={{transitionDelay: '100ms'}}>
              <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">⚡ Anında Sonuç</span>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-rose-500/20" style={{transitionDelay: '200ms'}}>
              <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">💎 Ücretsiz</span>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20" style={{transitionDelay: '300ms'}}>
              <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">🌍 Sınırsız</span>
            </div>
          </div>
        </div>

        {/* Interactive color showcase */}
        <div className="mb-12 sm:mb-16">
          <div className="flex justify-center space-x-2 sm:space-x-3 lg:space-x-4 mb-6 sm:mb-8 px-4">
            {[
              'from-purple-400 to-pink-400',
              'from-cyan-400 to-blue-400', 
              'from-pink-400 to-rose-400',
              'from-amber-400 to-orange-400',
              'from-teal-400 to-cyan-400',
              'from-violet-400 to-purple-400'
            ].map((gradient, index) => (
              <div 
                key={index}
                className={`w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-br ${gradient} rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-lg`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                }}
              ></div>
            ))}
          </div>
          
          {/* Pulse effect */}
          <div className="text-white/60 text-xs sm:text-sm animate-pulse">
            Sihirli renkler sizi bekliyor ✨
          </div>
        </div>

        {/* Call to action hint */}
        <div className="animate-bounce">
          <div className="text-white/80 text-sm sm:text-base lg:text-lg mb-2 sm:mb-4">
            Aşağı kaydırın ve keşfe başlayın
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl">⬇️</div>
        </div>
      </div>
      
      {/* Custom gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero; 