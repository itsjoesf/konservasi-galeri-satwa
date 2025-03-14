
import React from 'react';
import { Search, Filter, X } from 'lucide-react';

interface AnimalFilterProps {
  onSearchChange: (value: string) => void;
  onFilterChange: (filter: string, value: string) => void;
  onFilterReset: () => void;
  activeFilters: Record<string, string>;
  searchValue: string;
}

const AnimalFilter: React.FC<AnimalFilterProps> = ({
  onSearchChange,
  onFilterChange,
  onFilterReset,
  activeFilters,
  searchValue
}) => {
  const locations = ['Sumatra', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papua', 'Bali', 'Nusa Tenggara'];
  const statuses = ['Kritis', 'Terancam', 'Rentan', 'Hampir Terancam'];
  const habitats = ['Hutan Hujan', 'Laut', 'Pantai', 'Gunung', 'Rawa', 'Sungai', 'Savana'];

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <div className="mb-8 animate-slide-up">
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Cari satwa berdasarkan nama..."
          className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative group">
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors">
            <Filter size={16} className="mr-2" />
            <span>Lokasi</span>
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <div className="py-1">
              {locations.map((location) => (
                <button
                  key={location}
                  className={`block px-4 py-2 text-sm rounded-md w-full text-left ${
                    activeFilters.location === location
                      ? 'bg-forest-100 text-forest-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => onFilterChange('location', location)}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors">
            <Filter size={16} className="mr-2" />
            <span>Status</span>
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <div className="py-1">
              {statuses.map((status) => (
                <button
                  key={status}
                  className={`block px-4 py-2 text-sm rounded-md w-full text-left ${
                    activeFilters.status === status
                      ? 'bg-forest-100 text-forest-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => onFilterChange('status', status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors">
            <Filter size={16} className="mr-2" />
            <span>Habitat</span>
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <div className="py-1">
              {habitats.map((habitat) => (
                <button
                  key={habitat}
                  className={`block px-4 py-2 text-sm rounded-md w-full text-left ${
                    activeFilters.habitat === habitat
                      ? 'bg-forest-100 text-forest-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => onFilterChange('habitat', habitat)}
                >
                  {habitat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {hasActiveFilters && (
          <button
            className="bg-red-50 text-red-700 hover:bg-red-100 font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors"
            onClick={onFilterReset}
          >
            <X size={16} className="mr-2" />
            <span>Reset Filter</span>
          </button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(activeFilters).map(([key, value]) => (
            <div key={key} className="bg-forest-50 text-forest-700 px-3 py-1 rounded-full text-sm inline-flex items-center">
              <span className="capitalize mr-1">{key}:</span> {value}
              <button 
                className="ml-2 focus:outline-none"
                onClick={() => {
                  const newFilters = {...activeFilters};
                  delete newFilters[key];
                  onFilterChange('', '');
                }}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimalFilter;
