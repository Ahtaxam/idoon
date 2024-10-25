import React from 'react';
import { FunnelIcon, Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type TableActionsProps = {
  drawerHandler: () => void;
  length: number;
  reset: () => void;
  showFilters: boolean;
};
const TableActions: React.FC<TableActionsProps> = ({
  drawerHandler,
  length,
  reset,
  showFilters
}) => {
  return (
    <div className="p-4 flex justify-between items-start">
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className="text-2xl font-semibold text-black dark:text-white">Coverage Periods</h1>

        <div className="flex items-center gap-3">
          <button
            className="flex items-center space-x-2 text-gray-600 px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={drawerHandler}>
            <FunnelIcon className="w-5 h-5 text-gray-600 dark:text-white" />
            <span className="text-black dark:text-white ">Filters {showFilters && length} </span>
          </button>

          {length > 0 && showFilters && (
            <span className="text-sm text-primary cursor-pointer" onClick={reset}>
              Reset Filters
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
          <Cog6ToothIcon className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
        <button className="px-4 py-1.5 text-gray-600 border rounded-md hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
          Export CSV
        </button>
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 border-gray-300 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#2a2f3e] dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TableActions;
