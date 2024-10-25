import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  CheckIcon,
  ChevronDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { MultiSelectProps, Option } from '../../untils/types/element';

export default function MultiSelect({
  label,
  placeholder,
  options,
  onSelectionChange
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleOption = (option: Option) => {
    onSelectionChange([option]);
    setSelectedOptions((prev) =>
      prev.some((item) => item.id === option.id)
        ? prev.filter((item) => item.id !== option.id)
        : [...prev, option]
    );
  };

  const removeOption = (optionToRemove: Option, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOptions((prev) => prev.filter((option) => option.id !== optionToRemove.id));
  };

  return (
    <div className="w-full max-w-lg space-y-2">
      {label && <label className="block text-sm font-medium text-gray-900">{label}</label>}
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full min-h-[42px] p-2 border rounded-lg bg-white cursor-pointer flex items-center justify-between">
          <div className="flex flex-wrap gap-1 text-sm">
            {selectedOptions.length === 0 ? (
              <span className="text-gray-500">{placeholder}</span>
            ) : (
              selectedOptions.map((option) => (
                <span
                  key={option.id}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md flex items-center gap-1 text-sm">
                  {option.label}
                  <XMarkIcon
                    className="h-3 w-3 cursor-pointer hover:text-purple-900"
                    onClick={(e) => removeOption(option, e)}
                  />
                </span>
              ))
            )}
          </div>
          <ChevronDownIcon className="text-gray-800 h-4 w-4" />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 text-sm">
            <div className="p-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute h-5 w-5 left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => toggleOption(option)}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                  <div
                    className={`w-5 h-5 border rounded ${
                      selectedOptions.some((item) => item.id === option.id)
                        ? 'bg-purple-600 border-purple-600'
                        : 'border-gray-300'
                    } flex items-center justify-center`}>
                    {selectedOptions.some((item) => item.id === option.id) && (
                      <CheckIcon className="text-white h-5 w-5" />
                    )}
                  </div>
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
