
import React from 'react';
import { Database, Shield, BookOpen, Globe } from 'lucide-react';
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

  return (
    <section className="py-24 bg-white" id="edukasi">
      <div className="container mx-auto px-6 md:px-12">
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
