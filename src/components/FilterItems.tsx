import { FilterItemsProps } from '../untils/types/filter';
import React, { useMemo } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const FilterItems: React.FC<FilterItemsProps> = ({ filters, onFilterCountChange }) => {
  const items = [];

  if (filters.organizations.length) {
    items.push(
      ...filters.organizations.map((org) => (
        <div key={org.id}>
          <span>{`Company: ${org.label}`}</span>
        </div>
      ))
    );
  }
  if (filters.groups.length) {
    items.push(
      ...filters.groups.map((org) => (
        <div key={org.id}>
          <span>{`Groups: ${org.label}`}</span>
        </div>
      ))
    );
  }
  if (filters.coverageStartDate.date) {
    items.push(
      <div key="coverageStartDate">
        <span>{`Coverage Start Date: ${filters.coverageStartDate.condition} ${filters.coverageStartDate.date}`}</span>
      </div>
    );
  }
  if (filters.coverageEndDate.date) {
    items.push(
      <div key="coverageEndDate">
        <span>{`Coverage End Date: ${filters.coverageEndDate.condition} ${filters.coverageEndDate.date}`}</span>
      </div>
    );
  }
  if (filters.state) {
    items.push(
      <div key="state">
        <span>{`State: ${filters.state}`}</span>
      </div>
    );
  }
  if (filters.carrier) {
    items.push(
      <div key="carrier">
        <span>{`Carrier: ${filters.carrier}`}</span>
      </div>
    );
  }
  if (filters.distributionFormat) {
    items.push(
      <div key="distributionFormat">
        <span>{`Distribution Format: ${filters.distributionFormat}`}</span>
      </div>
    );
  }

  // Memoize the count to avoid recalculating on every render
  const appliedFilterCount = useMemo(() => items.length, [filters]);

  // Notify parent component of the filter count
  React.useEffect(() => {
    onFilterCountChange(appliedFilterCount);
  }, [appliedFilterCount, onFilterCountChange]);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {items.map((badge, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-x-0.5 rounded-2xl px-3 py-1 text-xs font-medium border border-primary dark:border-gray-700">
          <div className="flex items-center gap-1">
            {badge}
            <XMarkIcon className="w-4 h-4 cursor-pointer text-primary dark:text-gray-300" />
          </div>
        </span>
      ))}
    </div>
  );
};

export default FilterItems;
