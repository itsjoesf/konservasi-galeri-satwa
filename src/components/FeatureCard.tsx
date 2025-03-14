
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  index 
}) => {
  const bgColor = `bg-${color}-100`;
  const textColor = `text-${color}-800`;
  const iconColor = `text-${color}-600`;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium text-gray-700">
          {index}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
