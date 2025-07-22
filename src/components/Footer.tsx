import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 mt-32 overflow-hidden">
      {/* Epic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-pink-900/30"></div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Epic brand section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-all duration-700">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-all duration-500">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                RENK EVRENI
              </span>
            </h3>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Yapay zeka ile güçlendirilmiş en gelişmiş renk paleti platformu. 
            Yaratıcılığınızın sınırlarını aşın.
          </p>
          
          {/* Epic social buttons */}
          <div className="flex justify-center space-x-4">
            {[
              { gradient: 'from-blue-500 to-cyan-500', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
              { gradient: 'from-purple-500 to-pink-500', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
              { gradient: 'from-green-500 to-emerald-500', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { gradient: 'from-pink-500 to-rose-500', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165C2.969 17.062 1.83 14.93 1.83 11.448 1.83 6.302 5.577 1.681 12.506 1.681c5.746 0 10.208 4.092 10.208 9.555 0 5.704-3.595 10.289-8.594 10.289-1.678 0-3.263-.872-3.805-2.027 0 0-.832 3.174-1.033 3.95-.374 1.446-1.385 3.265-2.064 4.37 1.548.479 3.19.734 4.899.734 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className={`w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center text-white hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-2xl hover:shadow-lg transform hover:-translate-y-2`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        {/* Epic feature showcase */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { title: 'AI POWER', desc: 'Gelişmiş yapay zeka teknolojisi', icon: '🤖', gradient: 'from-purple-500 to-pink-500' },
            { title: 'UNLIMITED', desc: 'Sınırsız palet oluşturma', icon: '∞', gradient: 'from-cyan-500 to-blue-500' },
            { title: 'INSTANT', desc: 'Anında sonuç alın', icon: '⚡', gradient: 'from-green-500 to-emerald-500' },
            { title: 'FREE', desc: 'Tamamen ücretsiz kullanım', icon: '💎', gradient: 'from-pink-500 to-rose-500' }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group text-center transform hover:scale-110 hover:-translate-y-4 transition-all duration-500"
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-lg group-hover:rotate-12 transition-all duration-500`}>
                <span className="text-3xl text-white">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-black text-white mb-2">{feature.title}</h4>
              <p className="text-white/60 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Epic divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 via-purple-400 via-pink-400 to-transparent mb-12 shadow-lg shadow-purple-400/25"></div>
        
        {/* Epic copyright */}
        <div className="text-center transform hover:scale-105 transition-all duration-500">
          <p className="text-white/80 text-lg mb-4">
            &copy; 2024 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-black mx-3">
              RENK EVRENI
            </span>
            • Tüm hakları saklıdır
          </p>
          
          <div className="flex items-center justify-center space-x-3 text-white/60">
            <span>Yapıldı</span>
            <div className="flex space-x-1">
              <span className="text-red-400 text-xl animate-pulse">❤️</span>
              <span className="text-yellow-400 text-xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</span>
              <span className="text-cyan-400 text-xl animate-pulse" style={{animationDelay: '1s'}}>💫</span>
            </div>
            <span>ile</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 