import React from 'react';
import FilterTab from './FilterTab';
import FormField from './FormField';
import SavedFiltersTab from './SavedFiltersTab';
import SaveFilterForm from './SaveFilterForm';
import MultiSelect from '../elements/MultiSelect';
import { DistributionFormat, FiltersProps, SavedFilterTypes } from '../../untils/types/filter';

const Filters: React.FC<FiltersProps> = ({
  isOpen,
  showSaveModal,
  setShowSaveModal,
  filters,
  onFilterChange,
  onDateFilterChange,
  onReset,
  onApply
}) => {
  const [activeTab, setActiveTab] = React.useState('filters');
  const [savedFilters, setSavedFilters] = React.useState<SavedFilterTypes[]>([]);
  const handleDistributionFormatChange = (value: string) => {
    onFilterChange('distributionFormat', value as DistributionFormat);
  };

  const handleSavedFilter = (filter: string, isDefault: boolean) => {
    const existingDefault = savedFilters.find((f) => f.isdefault);
    if (existingDefault) {
      existingDefault.isdefault = false;
    }
    setSavedFilters((prev) => [
      ...prev,
      { id: prev.length + 1, name: filter, isdefault: isDefault }
    ]);
  };

  if (!isOpen) return null;

  const renderContent = () => {
    if (showSaveModal) {
      return <SaveFilterForm handleSavedFilter={handleSavedFilter} />;
    }

    return (
      <>
        <div className="flex border-b">
          <FilterTab
            label="Filters"
            isActive={activeTab === 'filters'}
            onClick={() => setActiveTab('filters')}
          />
          <FilterTab
            label="Saved Filters"
            isActive={activeTab === 'saved'}
            onClick={() => setActiveTab('saved')}
          />
        </div>

        {activeTab === 'filters' ? (
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-5">
              <MultiSelect
                label="Organizations Name"
                placeholder="Select Organizations"
                options={[
                  { id: '1', label: 'Organization 1' },
                  { id: '2', label: 'Organization 2' }
                ]}
                selectedOptions={filters.organizations}
                onSelectionChange={(selected) => onFilterChange('organizations', selected)}
              />

              <MultiSelect
                label="Group"
                placeholder="Select Groups"
                options={[
                  { id: '1', label: 'Group 1' },
                  { id: '2', label: 'Group 1' }
                ]}
                selectedOptions={filters.groups}
                onSelectionChange={(selected) => onFilterChange('groups', selected)}
              />

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Coverage Start Date</label>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    type="select"
                    options={['After', 'Before']}
                    value={filters.coverageStartDate.condition}
                    onChange={(value) =>
                      onDateFilterChange('coverageStartDate', 'condition', value)
                    }
                  />
                  <FormField
                    type="date"
                    value={filters.coverageStartDate.date}
                    onChange={(value) => onDateFilterChange('coverageStartDate', 'date', value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Coverage End Date</label>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    type="select"
                    options={['After', 'Before']}
                    value={filters.coverageEndDate.condition}
                    onChange={(value) => onDateFilterChange('coverageEndDate', 'condition', value)}
                  />
                  <FormField
                    type="date"
                    value={filters.coverageEndDate.date}
                    onChange={(value) => onDateFilterChange('coverageEndDate', 'date', value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Setup Completed At</label>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    type="select"
                    options={['After', 'Before']}
                    value={filters.setupCompleteAt.condition}
                    onChange={(value) => onDateFilterChange('setupCompleteAt', 'condition', value)}
                  />
                  <FormField
                    type="date"
                    value={filters.setupCompleteAt.date}
                    onChange={(value) => onDateFilterChange('setupCompleteAt', 'date', value)}
                  />
                </div>
              </div>

              <FormField
                label="Distribution Format"
                type="radio"
                options={['Edi', 'Api']}
                value={filters.distributionFormat}
                onChange={handleDistributionFormatChange}
              />

              <FormField
                label="Carrier"
                type="select"
                options={['Carrier 1', 'Carrier 2']}
                value={filters.carrier}
                onChange={(value) => onFilterChange('carrier', value)}
              />

              <FormField
                label="State"
                type="select"
                options={['State 1', 'State 2']}
                value={filters.state}
                onChange={(value) => onFilterChange('state', value)}
              />

              <div className="flex justify-end">
                {activeTab === 'filters' && (
                  <button
                    onClick={() => setShowSaveModal(true)}
                    className="rounded-lg border border-purple-600 px-4 font-bold py-2 text-sm text-purple-600 hover:bg-purple-50">
                    Save Filter
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <SavedFiltersTab savedFilters={savedFilters} />
        )}

        <div className="absolute bottom-0 inset-x-0 border-t px-6 pt-2">
          <div className="flex justify-between gap-2">
            <button
              onClick={onReset}
              className="w-full rounded-lg border text-sm font-medium text-gray-700 hover:text-gray-900">
              Reset
            </button>
            <button
              onClick={onApply}
              className="w-full rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-opacity-90">
              Apply
            </button>
          </div>
        </div>
      </>
    );
  };

  return <div className="w-full flex flex-col bg-white">{renderContent()}</div>;
};

export default Filters;
