
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, Users, Award, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Tipe data untuk anggota tim
type TeamMember = {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
};

// Data dummy untuk anggota tim
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Andi Wijaya',
    position: 'Ketua & Peneliti Senior',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80',
    bio: 'Dr. Andi memiliki pengalaman lebih dari 15 tahun dalam penelitian dan konservasi satwa langka Indonesia, dengan fokus pada primata. Beliau memperoleh gelar doktor dalam bidang Konservasi Biologi dari University of Cambridge.'
  },
  {
    id: '2',
    name: 'Maya Putri, M.Sc.',
    position: 'Koordinator Program Lapangan',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    bio: 'Maya memiliki latar belakang dalam manajemen sumber daya alam dan telah mengelola berbagai program konservasi berbasis masyarakat selama 8 tahun terakhir. Ia bertanggung jawab atas implementasi program-program lapangan Konserva.'
  },
  {
    id: '3',
    name: 'Budi Santoso, M.Env.',
    position: 'Spesialis GIS & Habitat',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
    bio: 'Budi adalah pakar sistem informasi geografis (GIS) yang menggunakan teknologi pemetaan untuk menganalisis habitat satwa langka dan merencanakan strategi konservasi berbasis data spasial.'
  },
  {
    id: '4',
    name: 'Siti Rahma, Ph.D.',
    position: 'Ahli Perilaku Satwa',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80',
    bio: 'Dr. Siti mengkhususkan diri dalam studi perilaku hewan, terutama pada mamalia besar. Penelitiannya membantu mengembangkan strategi konservasi yang efektif berdasarkan pemahaman tentang pola perilaku alami.'
  },
  {
    id: '5',
    name: 'Reza Akbar, S.Hut.',
    position: 'Koordinator Edukasi & Outreach',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    bio: 'Reza memimpin inisiatif edukasi dan outreach Konserva, mengembangkan materi edukasi dan program kesadaran masyarakat untuk meningkatkan pemahaman tentang pentingnya konservasi satwa.'
  },
  {
    id: '6',
    name: 'Dewi Suryani, M.Sc.',
    position: 'Spesialis Restorasi Ekosistem',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80',
    bio: 'Dewi berfokus pada proyek-proyek restorasi ekosistem yang rusak, dengan keahlian khusus dalam restorasi hutan hujan dan lahan gambut yang merupakan habitat penting bagi banyak satwa langka Indonesia.'
  },
];

// Tipe data untuk mitra
type Partner = {
  id: string;
  name: string;
  logo: string;
  type: 'Pemerintah' | 'NGO' | 'Akademik' | 'Korporasi';
};

// Data dummy untuk mitra
const partners: Partner[] = [
  {
    id: '1',
    name: 'Kementerian Lingkungan Hidup dan Kehutanan',
    logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    type: 'Pemerintah'
  },
  {
    id: '2',
    name: 'World Wildlife Fund Indonesia',
    logo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
    type: 'NGO'
  },
  {
    id: '3',
    name: 'Institut Pertanian Bogor',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    type: 'Akademik'
  },
  {
    id: '4',
    name: 'Fauna & Flora International',
    logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    type: 'NGO'
  },
  {
    id: '5',
    name: 'PT Perhutani',
    logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
    type: 'Korporasi'
  },
  {
    id: '6',
    name: 'Taman Nasional Gunung Leuser',
    logo: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80',
    type: 'Pemerintah'
  },
];

const TentangKami = () => {
  const [activePartnerType, setActivePartnerType] = useState<string | null>(null);
  
  // Filter partners by type or show all if no filter
  const filteredPartners = activePartnerType 
    ? partners.filter(partner => partner.type === activePartnerType)
    : partners;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Platform Konservasi Satwa Langka Indonesia
              </h2>
              <p className="text-lg text-gray-600">
                Konserva didirikan pada tahun 2008 dengan misi melindungi dan memulihkan populasi satwa langka Indonesia melalui pendekatan terpadu yang menggabungkan penelitian ilmiah, kerja sama masyarakat, dan edukasi publik.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cerita Kami</h3>
                <p className="text-gray-600 mb-4">
                  Konserva berawal dari inisiatif sekelompok peneliti dan pecinta lingkungan yang prihatin dengan menurunnya populasi satwa langka Indonesia. Dengan semangat untuk melakukan perubahan nyata, mereka membentuk organisasi yang berfokus pada pendekatan konservasi berbasis ilmu pengetahuan dan keterlibatan masyarakat.
                </p>
                <p className="text-gray-600 mb-4">
                  Seiring berjalannya waktu, Konserva telah berkembang menjadi platform konservasi terkemuka yang bekerja sama dengan berbagai pemangku kepentingan, mulai dari masyarakat lokal hingga lembaga pemerintah dan organisasi internasional.
                </p>
                <p className="text-gray-600">
                  Kami percaya bahwa keberhasilan konservasi hanya mungkin terjadi ketika semua pihak bekerja bersama dengan pemahaman mendalam tentang ekosistem dan kebutuhan masyarakat yang hidup berdampingan dengan satwa langka.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80" 
                  alt="Tim Konserva di Lapangan" 
                  className="rounded-xl shadow-md"
                />
                <div className="absolute -bottom-6 -right-6 bg-forest-600 text-white p-4 rounded-xl shadow-lg w-32 h-32 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">15+</span>
                  <span className="text-sm text-center">Tahun Pengalaman</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-forest-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Target className="text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                <p className="text-gray-600">
                  Mewujudkan Indonesia di mana manusia dan satwa hidup berdampingan secara harmonis, dengan populasi satwa langka yang stabil dan berkembang dalam habitatnya yang terlindungi.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-forest-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Award className="text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                <p className="text-gray-600">
                  Melindungi satwa langka Indonesia dan habitatnya melalui penelitian ilmiah, program konservasi terintegrasi, pendidikan, dan pemberdayaan masyarakat lokal untuk menjadi penjaga warisan alam.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-forest-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Heart className="text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nilai-Nilai Kami</h3>
                <p className="text-gray-600">
                  Integritas, kolaborasi, inklusivitas, dan keberlanjutan adalah nilai-nilai inti yang memandu setiap aspek kerja kami dalam melestarikan keanekaragaman hayati Indonesia.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TentangKami;
