import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { TableHeaderProps } from '../../untils/types/table';

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr className="bg-gray-100 dark:bg-primary_bg">
        {columns.map((column, index) => (
          <th key={index} className="px-6 py-3 text-left border-r">
            <div className="flex items-center gap-2 font-medium text-gray-700 dark:text-white">
              {column.label}
              <div>
                <ChevronUpIcon className="w-3 h-3 p-0 cursor-pointer" />
                <ChevronDownIcon className="w-3 h-3 p-0 cursor-pointer" />
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
