
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, CalendarDays, User, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipe data untuk artikel
type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  date: string;
  author: string;
  readTime: string;
  category: 'Konservasi' | 'Satwa Langka' | 'Lingkungan' | 'Event';
  views: number;
};

// Data dummy untuk artikel/berita
const articles: Article[] = [
  {
    id: '1',
    title: 'Penemuan Spesies Baru Orangutan di Hutan Kalimantan',
    excerpt: 'Tim peneliti dari Universitas Indonesia menemukan sub-spesies baru orangutan di pedalaman hutan Kalimantan yang belum pernah didokumentasikan sebelumnya.',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1548499522-cbc73e486015?auto=format&fit=crop&q=80',
    date: '15 Juni 2023',
    author: 'Dr. Andi Wijaya',
    readTime: '5 menit',
    category: 'Satwa Langka',
    views: 1250
  },
  {
    id: '2',
    title: 'Program Rehabilitasi Harimau Sumatera Mencapai Tonggak Penting',
    excerpt: 'Program rehabilitasi harimau Sumatera yang dijalankan selama lima tahun terakhir telah berhasil meningkatkan populasi harimau di Taman Nasional Kerinci Seblat sebesar 15%.',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80',
    date: '27 Mei 2023',
    author: 'Budi Santoso',
    readTime: '8 menit',
    category: 'Konservasi',
    views: 2340
  },
  {
    id: '3',
    title: 'Aksi Bersih Pantai Selamatkan 200 Sarang Penyu',
    excerpt: 'Relawan dari berbagai komunitas lingkungan mengadakan aksi bersih pantai yang berhasil menyelamatkan ratusan sarang penyu dari ancaman sampah plastik.',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&q=80',
    date: '10 April 2023',
    author: 'Maya Putri',
    readTime: '6 menit',
    category: 'Lingkungan',
    views: 1876
  },
  {
    id: '4',
    title: 'Festival Konservasi Nasional 2023 Digelar di Jakarta',
    excerpt: 'Festival tahunan yang mengangkat isu konservasi satwa langka akan digelar di Jakarta pada bulan Agustus mendatang dengan tema "Bertindak Sekarang untuk Masa Depan".',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80',
    date: '20 Maret 2023',
    author: 'Reza Akbar',
    readTime: '4 menit',
    category: 'Event',
    views: 3210
  },
  {
    id: '5',
    title: 'Kebijakan Baru Perlindungan Hutan Mangrove Disahkan',
    excerpt: 'Pemerintah mengesahkan kebijakan baru yang memperkuat perlindungan terhadap ekosistem mangrove, habitat penting bagi berbagai spesies satwa langka.',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80',
    date: '5 Februari 2023',
    author: 'Dr. Raisa Andini',
    readTime: '7 menit',
    category: 'Lingkungan',
    views: 1560
  },
  {
    id: '6',
    title: 'Burung Jalak Bali Terbang Bebas Kembali di Habitat Aslinya',
    excerpt: 'Upaya pelepasliaran 25 ekor burung Jalak Bali hasil penangkaran berhasil dilakukan di Taman Nasional Bali Barat, memberikan harapan baru bagi spesies yang nyaris punah ini.',
    content: '',
    thumbnail: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80',
    date: '17 Januari 2023',
    author: 'Indra Cahyono',
    readTime: '5 menit',
    category: 'Satwa Langka',
    views: 2780
  }
];

const categoryColors = {
  'Konservasi': 'bg-blue-100 text-blue-800',
  'Satwa Langka': 'bg-green-100 text-green-800',
  'Lingkungan': 'bg-forest-100 text-forest-800',
  'Event': 'bg-orange-100 text-orange-800'
};

const Artikel = () => {
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
              Berita Terkini
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Artikel & Berita</h2>
            <p className="text-lg text-gray-600">
              Kumpulan berita terbaru seputar konservasi satwa langka, lingkungan, dan berbagai upaya pelestarian alam Indonesia.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <button className="bg-forest-600 text-white px-4 py-2 rounded-full font-medium hover:bg-forest-700 transition-colors">
              Semua
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Konservasi
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Satwa Langka
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Lingkungan
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Event
            </button>
          </div>
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80" 
                    alt="Upaya Pelestarian Badak Jawa" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                      Highlight
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium ml-2">
                      Konservasi
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Upaya Pelestarian Badak Jawa Menunjukkan Hasil Positif</h3>
                  <p className="text-gray-600 mb-6">Populasi badak Jawa di Taman Nasional Ujung Kulon mengalami peningkatan signifikan berkat upaya konservasi intensif yang telah dilakukan selama satu dekade terakhir.</p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <CalendarDays size={16} className="mr-1" />
                    <span className="mr-4">28 Mei 2023</span>
                    <User size={16} className="mr-1" />
                    <span className="mr-4">Dr. Surya Pratama</span>
                    <Clock size={16} className="mr-1" />
                    <span>10 menit baca</span>
                  </div>
                  <button className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center">
                    Baca Selengkapnya
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600 text-sm">
                      <User size={16} className="mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Eye size={16} className="mr-1" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 mt-4 pt-4">
                    <Link
                      to={`/artikel/${article.id}`}
                      className="inline-flex items-center text-forest-600 font-medium hover:text-forest-700 transition-colors"
                    >
                      Baca Selengkapnya
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50">
                <ArrowLeft size={18} />
              </button>
              <button className="w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center">1</button>
              <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50">2</button>
              <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50">3</button>
              <span className="text-gray-500">...</span>
              <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50">8</button>
              <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="mt-20">
            <div className="max-w-4xl mx-auto bg-forest-50 rounded-xl p-8 border border-forest-100">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dapatkan Update Berita Terbaru</h3>
                  <p className="text-gray-600 mb-6">
                    Berlangganan newsletter kami untuk mendapatkan berita dan artikel terbaru seputar konservasi satwa langka di Indonesia.
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      placeholder="Alamat email Anda"
                      className="px-4 py-3 rounded-full sm:rounded-r-none w-full mb-2 sm:mb-0 focus:outline-none text-gray-800 border border-gray-200"
                    />
                    <button
                      type="submit"
                      className="bg-forest-600 hover:bg-forest-700 px-6 py-3 rounded-full sm:rounded-l-none text-white transition-colors"
                    >
                      Berlangganan
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1528158477878-c8012120b6e6?auto=format&fit=crop&q=80"
                    alt="Newsletter" 
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

export default Artikel;
