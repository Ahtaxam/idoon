import React from 'react';

interface FilterTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterTab: React.FC<FilterTabProps> = ({ label, isActive, onClick }) => (
  <button
    className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
      isActive
        ? 'border-b-2 border-purple-600 text-purple-600'
        : 'text-gray-500 hover:text-gray-700'
    }`}
    onClick={onClick}>
    {label}
  </button>
);

export default FilterTab;
