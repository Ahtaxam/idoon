export type OptionType = { id: number; name: string };

export type Option = {
  id: string;
  label: string;
};

export interface MultiSelectProps {
  label: string;
  placeholder: string;
  options: Option[];
  selectedOptions: Option[];
  onSelectionChange: (selected: Option[]) => void;
}

export type FormFieldProps = {
  label?: string;
  type: 'select' | 'date' | 'radio';
  options?: string[];
  placeholder?: string;
};
