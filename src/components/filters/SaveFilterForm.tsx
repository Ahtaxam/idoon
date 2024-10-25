import { useState } from 'react';
import PropTypes from 'prop-types';

interface SaveFilterFormProps {
  handleSavedFilter: (value: string, isDefault: boolean) => void;
}

const SaveFilterForm: React.FC<SaveFilterFormProps> = ({ handleSavedFilter }) => {
  const [value, setValue] = useState<string>('');
  const [isDefault, setIsDefault] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const saveFilter = () => {
    setIsLoading(true);
    handleSavedFilter(value, isDefault);
    setTimeout(() => {
      setIsLoading(false);
      setValue('');
      setIsDefault(false);
    }, 2000);
  };

  const handleDefaultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDefault(e.target.checked);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-3">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="default-filter"
              className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-0"
              checked={isDefault}
              onChange={handleDefaultChange}
            />
            <div>
              <label htmlFor="default-filter" className="text-sm font-medium text-gray-900">
                Set as default filter
              </label>
              <p className="text-sm text-gray-500">
                This filter will be applied by default when you visit this page
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 border-t px-6 pt-4">
        <button
          className={`w-full rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-opacity-90 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
          onClick={saveFilter}>
          {isLoading ? 'Saving...' : 'Save Filter'}
        </button>
      </div>
    </div>
  );
};

export default SaveFilterForm;

SaveFilterForm.propTypes = {
  handleSavedFilter: PropTypes.func.isRequired
};
