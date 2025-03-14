
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-forest-600">
            <Leaf size={28} />
          </span>
          <span className="font-display font-bold text-2xl text-forest-900">Konserva</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Beranda</a>
          <a href="#galeri" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Galeri Satwa</a>
          <a href="#konservasi" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Program Konservasi</a>
          <a href="#edukasi" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Edukasi</a>
          <a href="#tentang" className="font-medium text-gray-900 hover:text-forest-600 transition-colors">Tentang Kami</a>
        </nav>

        <div className="hidden md:block">
          <button className="btn-primary">
            Dukung Kami
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-slide-down">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a href="/" className="font-medium text-gray-900 hover:text-forest-600 transition-colors py-2">Beranda</a>
            <a href="#galeri" className="font-medium text-gray-900 hover:text-forest-600 transition-colors py-2">Galeri Satwa</a>
            <a href="#konservasi" className="font-medium text-gray-900 hover:text-forest-600 transition-colors py-2">Program Konservasi</a>
            <a href="#edukasi" className="font-medium text-gray-900 hover:text-forest-600 transition-colors py-2">Edukasi</a>
            <a href="#tentang" className="font-medium text-gray-900 hover:text-forest-600 transition-colors py-2">Tentang Kami</a>
            <button className="btn-primary w-full">
              Dukung Kami
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
