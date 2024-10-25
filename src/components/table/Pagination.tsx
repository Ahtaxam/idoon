import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PaginationProps } from '../../untils/types/table';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalResults, resultsPerPage }) => {
  return (
    <div className="px-6 py-6 border-t border-gray-200 flex items-center justify-end gap-6">
      <span className="text-sm text-gray-500 dark:text-white">
        Showing {(currentPage - 1) * resultsPerPage + 1}-
        {Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults} results
      </span>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 dark:text-white">Show:</span>
        <select
          className="border border-gray-300 w-16 rounded px-3 py-1.5 text-sm text-gray-600 focus:outline-none "
          value={resultsPerPage}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <div className="flex items-center gap-1 ">
          <button className="p-1 text-gray-400 dark:text-white dark:hover:bg-gray-800">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="px-3 py-1 text-sm text-white  bg-primary rounded">1</button>
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 rounded">
            2
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 rounded">
            ...
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 rounded">
            6
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 rounded">
            7
          </button>
          <button className="p-1 text-gray-600">
            <ChevronRightIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-white">Jump to page:</span>
          <input
            type="number"
            min="1"
            className="w-12 px-2 py-1.5 text-sm border border-gray-300 rounded"
            defaultValue="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
