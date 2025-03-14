
import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
        />
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80" 
          alt="Hutan tropis Indonesia" 
          className={`w-full h-full object-cover transition-transform duration-[3000ms] ${isLoaded ? 'scale-105' : 'scale-100'}`}
        />
      </div>

      <div className="container mx-auto z-10 px-6 md:px-12">
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <span className="chip mb-4 inline-flex items-center">
              <Shield size={14} className="mr-1" />
              <span>Konservasi untuk Masa Depan</span>
            </span>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Melindungi Keanekaragaman Hayati Indonesia
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Konserva hadir sebagai platform database interaktif dan edukasi tentang satwa langka Indonesia. Mari bersama menjaga warisan alam kita untuk generasi mendatang.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <a href="#galeri" className="btn-primary flex items-center justify-center">
              Jelajahi Galeri Satwa
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#konservasi" className="btn-secondary flex items-center justify-center">
              Program Konservasi
            </a>
          </div>
        </div>
      </div>
      
      {/* Glass morphism stat cards */}
      <div 
        className={`absolute bottom-12 left-0 right-0 px-6 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-forest-600 mb-2">300+</h3>
              <p className="text-gray-700">Spesies Langka Terdata</p>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-forest-600 mb-2">50+</h3>
              <p className="text-gray-700">Program Konservasi Aktif</p>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-forest-600 mb-2">15+</h3>
              <p className="text-gray-700">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
