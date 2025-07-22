"use client";

import Hero from '@/components/Hero';
import ColorPaletteGenerator from '@/components/ColorPaletteGenerator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* EFSANEVI ANIMATED BACKGROUND */}
      <div className="fixed inset-0">
        {/* Main gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/50 via-violet-900/30 to-cyan-900/50"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/30 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-500/30 via-transparent to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-pink-500/30 via-transparent to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* FLOATING ORBS - Interactive */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large glowing orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed" style={{animationDelay: '1.5s'}}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-gradient-to-r from-pink-300/15 to-rose-300/15 rounded-full blur-2xl animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-amber-300/15 to-orange-300/15 rounded-full blur-2xl animate-spin-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Small sparkles */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-purple-300 rounded-full opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Content with glassmorphism */}
      <div className="relative z-10">
        <Hero />
        <ColorPaletteGenerator />
        <Footer />
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
