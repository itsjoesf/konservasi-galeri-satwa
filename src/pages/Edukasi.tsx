
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, BookOpen, Video, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipe data untuk materi edukasi
type EducationMaterial = {
  id: string;
  title: string;
  description: string;
  type: 'Artikel' | 'Video' | 'Infografis' | 'Modul';
  thumbnail: string;
  date: string;
  author: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
};

// Data dummy untuk materi edukasi
const educationMaterials: EducationMaterial[] = [
  {
    id: '1',
    title: 'Mengenal Satwa Langka Indonesia',
    description: 'Pengenalan dasar tentang berbagai satwa langka di Indonesia, karakteristik, dan alasan mengapa mereka perlu dilindungi.',
    type: 'Artikel',
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
    date: '15 Januari 2023',
    author: 'Dr. Andi Wijaya',
    level: 'Pemula'
  },
  {
    id: '2',
    title: 'Peranan Ekosistem Mangrove untuk Kehidupan Satwa',
    description: 'Penjelasan tentang pentingnya ekosistem mangrove sebagai habitat berbagai satwa langka dan perannya dalam menjaga keseimbangan ekosistem pesisir.',
    type: 'Infografis',
    thumbnail: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80',
    date: '3 Februari 2023',
    author: 'Tim Konserva',
    level: 'Pemula'
  },
  {
    id: '3',
    title: 'Teknik Konservasi In-Situ dan Ex-Situ',
    description: 'Penjelasan mendalam tentang dua pendekatan utama dalam konservasi satwa langka: in-situ (di habitat alami) dan ex-situ (di luar habitat alami).',
    type: 'Modul',
    thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80',
    date: '20 Maret 2023',
    author: 'Prof. Budi Santoso',
    level: 'Lanjutan'
  },
  {
    id: '4',
    title: 'Dokumenter: Jejak Harimau Sumatera',
    description: 'Film dokumenter yang mengikuti tim peneliti dalam ekspedisi pelacakan dan pemantauan harimau Sumatera di Taman Nasional Kerinci Seblat.',
    type: 'Video',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
    date: '5 April 2023',
    author: 'Konserva Media',
    level: 'Menengah'
  },
  {
    id: '5',
    title: 'Panduan Identifikasi Burung Endemik Indonesia',
    description: 'Panduan visual dengan ilustrasi detail untuk mengidentifikasi berbagai spesies burung endemik Indonesia yang terancam punah.',
    type: 'Infografis',
    thumbnail: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80',
    date: '17 Mei 2023',
    author: 'Dr. Maya Putri',
    level: 'Menengah'
  },
  {
    id: '6',
    title: 'Konflik Manusia-Satwa: Solusi dan Pencegahan',
    description: 'Analisis tentang faktor-faktor yang menyebabkan konflik antara manusia dan satwa liar, serta berbagai pendekatan untuk mencegah dan menyelesaikannya.',
    type: 'Artikel',
    thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80',
    date: '9 Juni 2023',
    author: 'Dr. Reza Akbar',
    level: 'Lanjutan'
  }
];

const typeIcons = {
  'Artikel': <BookOpen size={18} />,
  'Video': <Video size={18} />,
  'Infografis': <FileText size={18} />,
  'Modul': <Download size={18} />
};

const levelColors = {
  'Pemula': 'bg-green-100 text-green-800',
  'Menengah': 'bg-yellow-100 text-yellow-800',
  'Lanjutan': 'bg-red-100 text-red-800'
};

const typeColors = {
  'Artikel': 'bg-blue-100 text-blue-800',
  'Video': 'bg-purple-100 text-purple-800',
  'Infografis': 'bg-teal-100 text-teal-800',
  'Modul': 'bg-orange-100 text-orange-800'
};

const Edukasi = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-forest-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-forest-100 rounded-full text-forest-700 font-medium text-sm mb-6">
              Jelajahi dan Pelajari
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Materi Edukasi Konservasi</h2>
            <p className="text-lg text-gray-600">
              Kumpulan artikel, video, infografis, dan modul pembelajaran tentang konservasi satwa langka dan ekosistemnya.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <button className="bg-forest-600 text-white px-4 py-2 rounded-full font-medium hover:bg-forest-700 transition-colors">
              Semua
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Artikel
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Video
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Infografis
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Modul
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {educationMaterials.map((material) => (
              <div 
                key={material.id} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={material.thumbnail} 
                    alt={material.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[material.level]}`}>
                      {material.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors[material.type]}`}>
                      {typeIcons[material.type]}
                      <span className="ml-1">{material.type}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{material.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{material.description}</p>
                  
                  <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                    <span>{material.date}</span>
                    <span>Oleh: {material.author}</span>
                  </div>
                  
                  <button className="w-full py-2 bg-forest-600 text-white rounded-full font-medium hover:bg-forest-700 transition-colors">
                    Baca Materi
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="max-w-4xl mx-auto bg-forest-50 rounded-xl p-8 border border-forest-100">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Buku Panduan Konservasi</h3>
                  <p className="text-gray-600 mb-6">
                    Dapatkan kumpulan lengkap materi edukasi kami dalam bentuk e-book yang bisa Anda pelajari kapan saja dan di mana saja.
                  </p>
                  <button className="btn-primary-rounded inline-flex items-center">
                    Unduh E-Book Gratis
                    <Download className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                    alt="E-Book Konservasi" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Edukasi;
