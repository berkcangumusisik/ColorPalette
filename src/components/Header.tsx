import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Renk Paleti</h1>
              <p className="text-blue-100 text-sm">AI ile Güçlendirilmiş</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-blue-200 transition-colors">Anasayfa</a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">Galerí</a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">Hakkında</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 