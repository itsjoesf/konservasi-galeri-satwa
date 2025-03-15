
import React from 'react';
import { Database, Shield, BookOpen, Globe, Calendar, ArrowRight } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Database Satwa Lengkap',
      description: 'Informasi komprehensif dan terkini mengenai satwa langka Indonesia beserta status konservasinya.',
      color: 'forest'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Program Konservasi',
      description: 'Program perlindungan aktif untuk memastikan kelestarian habitat dan populasi satwa langka Indonesia.',
      color: 'earth'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Edukasi Interaktif',
      description: 'Materi edukasi menarik untuk meningkatkan kesadaran masyarakat tentang pentingnya konservasi.',
      color: 'blue'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Jaringan Global',
      description: 'Bekerja sama dengan berbagai organisasi konservasi di seluruh dunia untuk melindungi satwa Indonesia.',
      color: 'green'
    }
  ];

  const conservationPrograms = [
    {
      icon: <Shield />,
      title: 'Perlindungan Spesies',
      description: 'Melindungi spesies terancam punah melalui pengembangan cagar alam dan kerja sama dengan komunitas lokal.'
    },
    {
      icon: <Globe />,
      title: 'Restorasi Habitat',
      description: 'Program penanaman kembali hutan dan restorasi lahan kritis untuk mengembalikan habitat alami satwa liar Indonesia.'
    },
    {
      icon: <Calendar />,
      title: 'Pendidikan & Kesadaran',
      description: 'Mengembangkan program edukasi untuk meningkatkan kesadaran masyarakat tentang pentingnya konservasi satwa.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="edukasi-konservasi">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-1.5 bg-forest-100 rounded-full text-forest-700 font-medium text-sm mb-6">
              Program & Fitur
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Upaya Pelestarian & Fitur Utama</h2>
            <p className="text-lg text-gray-600 mb-8">
              Konserva aktif dalam berbagai upaya pelestarian habitat dan perlindungan satwa langka Indonesia. Platform kami menyediakan beragam fitur untuk mendukung misi ini.
            </p>
            
            <div className="space-y-6">
              {conservationPrograms.map((program, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-forest-100 p-3 rounded-lg flex-shrink-0">
                    <div className="h-6 w-6 text-forest-600">{program.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="btn-primary-rounded inline-flex items-center">
                Pelajari Program Konservasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
              alt="Program konservasi satwa liar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="bg-black/30 text-white px-4 py-2 rounded-full w-max mb-4 backdrop-blur-sm">
                Dokumentasi
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Konservasi Harimau Sumatera di Taman Nasional Kerinci Seblat</h3>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors inline-flex items-center self-start">
                Lihat Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color as any}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
