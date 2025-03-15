
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-display font-bold text-2xl text-forest-900">Konserva</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link to="/" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Beranda</Link>
          <Link to="/galeri" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Galeri</Link>
          <Link to="/konservasi" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Konservasi</Link>
          <Link to="/edukasi" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Edukasi</Link>
          <Link to="/tentang" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Tentang</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <button className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Mulai Sekarang
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-md text-gray-800"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute left-0 w-full bg-white shadow-md py-4 z-50">
          <div className="flex flex-col px-6 space-y-4">
            <Link to="/" className="font-medium text-gray-900 hover:text-forest-600 py-2">Beranda</Link>
            <Link to="/galeri" className="font-medium text-gray-900 hover:text-forest-600 py-2">Galeri</Link>
            <Link to="/konservasi" className="font-medium text-gray-900 hover:text-forest-600 py-2">Konservasi</Link>
            <Link to="/edukasi" className="font-medium text-gray-900 hover:text-forest-600 py-2">Edukasi</Link>
            <Link to="/tentang" className="font-medium text-gray-900 hover:text-forest-600 py-2">Tentang</Link>
            <button className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-2 rounded-full text-center font-medium">
              Mulai Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
