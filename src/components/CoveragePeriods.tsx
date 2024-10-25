import React, { useState } from 'react';
import TableActions from './table/TableActions';
import TableHeader from './table/TableHeader';
import Pagination from './table/Pagination';
import { Square2StackIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { columns, data } from '../untils/constants';
import SlideOver from './SlideOver';
import Filters from './filters/Filters';
import { FilterState } from '../untils/types/filter';
import { XMarkIcon } from '@heroicons/react/24/outline';
import FilterItems from './FilterItems';

const CoveragePeriods: React.FC = () => {
  const [isFilersDrawerOpen, setIsFilersDrawerOpen] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const [filters, setFilters] = useState<FilterState>({
    organizations: [],
    groups: [],
    coverageStartDate: {
      condition: '',
      date: ''
    },
    coverageEndDate: {
      condition: '',
      date: ''
    },
    setupCompleteAt: {
      condition: '',
      date: ''
    },
    distributionFormat: '',
    carrier: '',
    state: ''
  });

  const handleFilterChange = <K extends keyof FilterState>(field: K, value: FilterState[K]) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDateFilterChange = (
    field: keyof Pick<FilterState, 'coverageStartDate' | 'coverageEndDate' | 'setupCompleteAt'>,
    type: 'condition' | 'date',
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [type]: value
      }
    }));
  };

  const resetFilters = () => {
    setFilters({
      organizations: [],
      groups: [],
      coverageStartDate: {
        condition: '',
        date: ''
      },
      coverageEndDate: {
        condition: '',
        date: ''
      },
      setupCompleteAt: {
        condition: '',
        date: ''
      },
      distributionFormat: '',
      carrier: '',
      state: ''
    });

    setShowFilters(false);
  };

  const applyFilters = () => {
    setShowFilters(true);
    setIsFilersDrawerOpen(false);
  };

  const drawerHandler = () => {
    setIsFilersDrawerOpen(!isFilersDrawerOpen);
    onBack();
  };

  const onBack = () => setShowSaveModal(false);
  const saveFilterTitle = (
    <div className="flex items-center space-x-4">
      <button onClick={onBack} className="text-gray-500 hover:text-gray-700 dark:text-gray-300">
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <h2 className="text-xl font-semibold dark:text-gray-100">Save Filter</h2>
    </div>
  );

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-white dark:bg-[#2a2f3e] rounded-lg shadow px-5">
          <TableActions
            drawerHandler={drawerHandler}
            length={filterCount}
            reset={resetFilters}
            showFilters={showFilters}
          />

          {showFilters && <FilterItems filters={filters} onFilterCountChange={setFilterCount} />}

          <div className="overflow-x-auto h-[615px] ring-1 ring-black ring-opacity-10 sm:rounded-lg dark:ring-white">
            <table className="w-full divide-y divide-x divide-gray-300 dark:divide-gray-700">
              <TableHeader columns={columns} />
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 border-r border-gray-300">
                      <span className="text-sm text-primary font-medium dark:text-gray-300 ">
                        <div className="flex items-center gap-1">
                          <Square2StackIcon className="w-5 h-5" fill="#75187C" />
                          {row.uuid}
                        </div>
                      </span>
                    </td>
                    <td className="px-6 py-4 border-r">
                      <span className="text-sm text-gray-900 dark:text-gray-300">
                        {row.organization}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-r">
                      <span className="text-sm text-gray-900 dark:text-gray-300">
                        {row.carrier}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-r">
                      <span className="text-sm text-gray-900 dark:text-gray-300">
                        {row.account}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 dark:text-gray-300">
                        {row.delivery}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination currentPage={1} totalResults={76} resultsPerPage={10} />
        </div>
      </div>
      <SlideOver
        title={showSaveModal ? saveFilterTitle : 'Select Filters'}
        setOpen={drawerHandler}
        isOpen={isFilersDrawerOpen}>
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onDateFilterChange={handleDateFilterChange}
          onReset={resetFilters}
          onApply={applyFilters}
          onClose={drawerHandler}
          isOpen={isFilersDrawerOpen}
          showSaveModal={showSaveModal}
          setShowSaveModal={setShowSaveModal}
        />
      </SlideOver>
    </>
  );
};

export default CoveragePeriods;
