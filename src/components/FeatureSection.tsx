
import React from 'react';
import { Database, Shield, BookOpen, Globe } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Database className="h-10 w-10 text-forest-600" />,
      title: 'Database Satwa Lengkap',
      description: 'Informasi komprehensif dan terkini mengenai satwa langka Indonesia beserta status konservasinya.'
    },
    {
      icon: <Shield className="h-10 w-10 text-forest-600" />,
      title: 'Program Konservasi',
      description: 'Program perlindungan aktif untuk memastikan kelestarian habitat dan populasi satwa langka Indonesia.'
    },
    {
      icon: <BookOpen className="h-10 w-10 text-forest-600" />,
      title: 'Edukasi Interaktif',
      description: 'Materi edukasi menarik untuk meningkatkan kesadaran masyarakat tentang pentingnya konservasi.'
    },
    {
      icon: <Globe className="h-10 w-10 text-forest-600" />,
      title: 'Jaringan Global',
      description: 'Bekerja sama dengan berbagai organisasi konservasi di seluruh dunia untuk melindungi satwa Indonesia.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="edukasi">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <span className="chip mb-4">Fitur Utama</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kenapa Memilih Konserva?</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Platform kami menyediakan informasi terlengkap dan terkini untuk mendukung upaya konservasi satwa langka Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-forest-50 inline-flex items-center justify-center p-4 rounded-lg mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
