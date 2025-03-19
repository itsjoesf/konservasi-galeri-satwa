
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimalCard, { Animal } from '@/components/AnimalCard';
import AnimalFilter from '@/components/AnimalFilter';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  {
    id: '7',
    name: 'Anoa',
    latinName: 'Bubalus depressicornis',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
    status: 'Terancam',
    habitat: 'Hutan Hujan',
    location: 'Sulawesi',
    description: 'Anoa adalah jenis kerbau kerdil yang endemik di pulau Sulawesi. Dikenal sebagai kerbau terkecil di dunia, anoa hidup di hutan pegunungan dan dataran rendah. Populasinya terus menurun akibat perburuan dan konversi habitat.'
  },
  {
    id: '8',
    name: 'Jalak Bali',
    latinName: 'Leucopsar rothschildi',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80',
    status: 'Kritis',
    habitat: 'Hutan Kering',
    location: 'Bali',
    description: 'Jalak Bali adalah burung endemik Bali dengan ciri khas bulu putih dan kulit biru di sekitar mata. Akibat perburuan liar dan hilangnya habitat, populasi Jalak Bali di alam liar sangat rendah dan menjadikannya salah satu burung paling langka di dunia.'
  },
];

const GaleriSatwa = () => {
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
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">

          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Galeri Satwa Langka Indonesia</h2>
            <p className="text-lg text-gray-600">
              Telusuri keanekaragaman satwa langka di Indonesia. Filter berdasarkan lokasi, status konservasi, atau habitat untuk menemukan informasi yang Anda butuhkan.
            </p>
          </div>
          
          <div className="relative z-20"> {/* Add z-index to ensure filters appear above cards */}
            <AnimalFilter
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              onFilterReset={handleFilterReset}
              activeFilters={activeFilters}
              searchValue={searchValue}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative z-10"> {/* Lower z-index for cards */}
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GaleriSatwa;
