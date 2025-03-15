import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimalCard, { Animal } from '@/components/AnimalCard';
import AnimalFilter from '@/components/AnimalFilter';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Globe, Calendar } from 'lucide-react';

// Dummy data untuk Satwa
const dummyAnimals: Animal[] = [
  {
    id: '1',
    name: 'Orangutan Kalimantan',
    latinName: 'Pongo pygmaeus',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80',
    status: 'Kritis',
    habitat: 'Hutan Hujan',
    location: 'Kalimantan',
    description: 'Orangutan Kalimantan adalah salah satu dari tiga spesies orangutan. Habitatnya mencakup dataran rendah dan pegunungan di pulau Borneo. Spesies ini sangat terancam oleh hilangnya habitat akibat deforestasi dan perburuan liar.'
  },
  {
    id: '2',
    name: 'Harimau Sumatera',
    latinName: 'Panthera tigris sumatrae',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
    status: 'Kritis',
    habitat: 'Hutan Hujan',
    location: 'Sumatra',
    description: 'Harimau Sumatera adalah subspesies harimau yang hanya ditemukan di pulau Sumatera, Indonesia. Merupakan salah satu harimau terkecil, dengan ukuran jantan rata-rata sekitar 2.4 meter. Diperkirakan hanya tersisa sekitar 400 individu di alam liar.'
  },
  {
    id: '3',
    name: 'Badak Jawa',
    latinName: 'Rhinoceros sondaicus',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80',
    status: 'Kritis',
    habitat: 'Hutan Hujan',
    location: 'Jawa',
    description: 'Badak Jawa adalah salah satu mamalia paling langka di dunia. Spesies ini memiliki satu cula dan kulit yang tampak seperti baju baja. Saat ini populasinya kurang dari 80 individu, yang sebagian besar terdapat di Taman Nasional Ujung Kulon.'
  },
  {
    id: '4',
    name: 'Burung Cenderawasih',
    latinName: 'Paradisaea apoda',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80',
    status: 'Terancam',
    habitat: 'Hutan Hujan',
    location: 'Papua',
    description: 'Burung Cenderawasih adalah kelompok burung dengan bulu-bulu indah yang terdapat di Indonesia Timur. Mereka terkenal karena warna bulunya yang cerah dan ritual kawin yang menakjubkan. Meskipun dilindungi, populasinya terancam oleh perburuan dan hilangnya habitat.'
  },
  {
    id: '5',
    name: 'Komodo',
    latinName: 'Varanus komodoensis',
    image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80',
    status: 'Rentan',
    habitat: 'Savana',
    location: 'Nusa Tenggara',
    description: 'Komodo adalah kadal terbesar di dunia, ditemukan di pulau-pulau Indonesia tengah. Kadal ini dapat tumbuh hingga panjang 3 meter dan berat 70 kg. Meskipun dilindungi oleh undang-undang, habitatnya yang terbatas dan perburuan membuat spesies ini rentan.'
  },
  {
    id: '6',
    name: 'Penyu Hijau',
    latinName: 'Chelonia mydas',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80',
    status: 'Terancam',
    habitat: 'Laut',
    location: 'Bali',
    description: 'Penyu Hijau adalah salah satu penyu laut terbesar di dunia. Mereka mendapatkan namanya dari warna lemak hijau yang terdapat di bawah kulitnya. Penyu ini bermigrasi jarak jauh antara tempat mencari makan dan tempat bertelur. Selain perburuan, ancaman utama mereka adalah pencemaran laut dan perubahan iklim.'
  },
];

const Index = () => {
  const [animals, setAnimals] = useState<Animal[]>(dummyAnimals);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(dummyAnimals);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Filter animals based on search and active filters
    let result = animals;
    
    if (searchValue) {
      result = result.filter(animal => 
        animal.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        animal.latinName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    
    // Apply active filters
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(animal => animal[key as keyof Animal] === value);
      }
    });
    
    setFilteredAnimals(result);
  }, [searchValue, activeFilters, animals]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterChange = (filter: string, value: string) => {
    if (filter && value) {
      setActiveFilters(prev => ({
        ...prev,
        [filter]: value
      }));
    }
  };

  const handleFilterReset = () => {
    setActiveFilters({});
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section className="py-24 bg-gray-50" id="galeri">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-forest-100 rounded-full text-forest-700 font-medium text-sm mb-6">
              Lihat dan Jelajahi
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Galeri Satwa Langka Indonesia</h2>
            <p className="text-lg text-gray-600">
              Telusuri keanekaragaman satwa langka di Indonesia. Filter berdasarkan lokasi, status konservasi, atau habitat untuk menemukan informasi yang Anda butuhkan.
            </p>
          </div>
          
          <AnimalFilter
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
            onFilterReset={handleFilterReset}
            activeFilters={activeFilters}
            searchValue={searchValue}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredAnimals.length > 0 ? (
              filteredAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
                <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary-rounded inline-flex items-center">
              Lihat Semua Satwa
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      
      <FeatureSection />
      
      <section className="section-padding" id="tentang">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
                alt="Tim Konserva"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <span className="text-white text-sm uppercase tracking-wider mb-2">Tim Kami</span>
                <h3 className="text-2xl font-bold text-white mb-4">Dedicated professionals working for a cause</h3>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="chip mb-4">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Misi dan Visi Konserva</h2>
              <p className="text-lg text-gray-600 mb-6">
                Konserva didirikan pada tahun 2008 dengan tujuan melestarikan satwa langka Indonesia melalui pendekatan terpadu yang menggabungkan penelitian ilmiah, konservasi berbasis masyarakat, dan edukasi publik.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Kami percaya bahwa konservasi yang efektif terjadi ketika semua pemangku kepentingan, dari masyarakat lokal hingga pemerintah, bekerja sama untuk mencapai tujuan pelestarian. Dengan pendekatan kolaboratif ini, Konserva telah membantu melindungi beberapa spesies paling langka di Indonesia.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-3xl font-bold text-forest-600 mb-2">15+</h3>
                  <p className="text-gray-600">Tahun Pengalaman</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-3xl font-bold text-forest-600 mb-2">50+</h3>
                  <p className="text-gray-600">Program Konservasi</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-3xl font-bold text-forest-600 mb-2">100+</h3>
                  <p className="text-gray-600">Mitra Kerja Sama</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-3xl font-bold text-forest-600 mb-2">1000+</h3>
                  <p className="text-gray-600">Relawan Aktif</p>
                </div>
              </div>
              
              <button className="btn-primary inline-flex items-center">
                Lebih Lanjut Tentang Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
