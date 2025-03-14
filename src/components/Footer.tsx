
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white pt-16 pb-8">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf size={28} className="text-forest-400" />
              <span className="font-display font-bold text-2xl text-white">Konserva</span>
            </div>
            <p className="text-forest-200 mb-6">
              Platform konservasi satwa langka Indonesia dengan misi melindungi keanekaragaman hayati dan ekosistem untuk generasi mendatang.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-forest-800 hover:bg-forest-700 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-forest-800 hover:bg-forest-700 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-forest-800 hover:bg-forest-700 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-forest-800 hover:bg-forest-700 p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Tautan</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-forest-200 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#galeri" className="text-forest-200 hover:text-white transition-colors">Galeri Satwa</a></li>
              <li><a href="#konservasi" className="text-forest-200 hover:text-white transition-colors">Program Konservasi</a></li>
              <li><a href="#edukasi" className="text-forest-200 hover:text-white transition-colors">Edukasi</a></li>
              <li><a href="#tentang" className="text-forest-200 hover:text-white transition-colors">Tentang Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-forest-400 flex-shrink-0" />
                <span className="text-forest-200">Jl. Konservasi No. 28, Jakarta Selatan, Indonesia, 12870</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-forest-400 flex-shrink-0" />
                <span className="text-forest-200">+62 21 8765 4321</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-forest-400 flex-shrink-0" />
                <span className="text-forest-200">info@konserva.id</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Langganan</h3>
            <p className="text-forest-200 mb-4">
              Dapatkan informasi terbaru tentang konservasi satwa langka Indonesia.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-forest-600 hover:bg-forest-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  Kirim
                </button>
              </div>
            </form>
            <p className="text-forest-400 text-sm">
              Dengan berlangganan, Anda setuju dengan kebijakan privasi kami.
            </p>
          </div>
        </div>
        
        <div className="border-t border-forest-800 mt-12 pt-8 text-center">
          <p className="text-forest-400 text-sm">
            &copy; {new Date().getFullYear()} Konserva. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
