import React from 'react';
import { SavedFilterTypes } from '../../untils/types/filter';

interface SavedFiltersTabProps {
  savedFilters: SavedFilterTypes[];
}
const SavedFiltersTab: React.FC<SavedFiltersTabProps> = ({ savedFilters }) => {
  return (
    <div className="flex-1 overflow-y-auto mt-2">
      <div className="space-y-2">
        {savedFilters?.map((filter) => (
          <div
            key={filter.id}
            className={`${filter.isdefault ? 'bg-purple-100' : ''} group flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg cursor-pointer`}>
            <div className="flex items-center space-x-3">
              <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
            </div>
            <div>
              {!filter.isdefault ? (
                <div className="invisible group-hover:visible space-x-2">
                  <button className="rounded-md border px-2 py-1.5 text-sm font-medium text-gray-600">
                    Make Default
                  </button>
                  <button className="rounded-md border text-red-500 px-6 py-1.5 text-sm font-medium">
                    Delete
                  </button>
                </div>
              ) : (
                <>
                  <button className="border block group-hover:hidden border-primary text-primary rounded-3xl px-4 py-1.5 text-sm font-medium">
                    Default
                  </button>
                  <div className="hidden group-hover:block space-x-2">
                    <button className="rounded-md border px-2 py-1.5 text-sm font-medium text-gray-600">
                      Remove as Default
                    </button>
                    <button className="rounded-md border text-red-500 px-6 py-1.5 text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedFiltersTab;
