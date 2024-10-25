import { Option } from './element';

export type DistributionFormat = 'Edi' | 'Api' | '';

export interface FilterState {
  organizations: Option[];
  groups: Option[];
  coverageStartDate: {
    condition: 'After' | 'Before' | '';
    date: string;
  };
  coverageEndDate: {
    condition: 'After' | 'Before' | '';
    date: string;
  };
  setupCompleteAt: {
    condition: 'After' | 'Before' | '';
    date: string;
  };
  distributionFormat: DistributionFormat;
  carrier: string;
  state: string;
}

export type SavedFilterTypes = {
  id: number;
  name: string;
  isdefault: boolean;
};

export interface FiltersProps {
  isOpen: boolean;
  onClose: () => void;
  showSaveModal: boolean;
  setShowSaveModal: (show: boolean) => void;
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(field: K, value: FilterState[K]) => void;
  onDateFilterChange: (
    field: keyof Pick<FilterState, 'coverageStartDate' | 'coverageEndDate' | 'setupCompleteAt'>,
    type: 'condition' | 'date',
    value: string
  ) => void;
  onReset: () => void;
  onApply: () => void;
}

export interface FilterItemsProps {
  filters: FilterState;
  onFilterCountChange: (count: number) => void;
}
