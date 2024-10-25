// import React from 'react';
// import { FormFieldProps } from '../../untils/types/element';

// const FormField: React.FC<FormFieldProps> = ({
//   label = '',
//   type,
//   options = [],
//   placeholder,
// }) => {

//   const renderField = () => {
//     switch (type) {
//       case 'select':
//         return (
//           <div className="relative">
//             <select
//               className="w-full text-sm appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
//            >
//               <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
//               {options.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       case 'date':
//         return (
//           <div className="relative">
//             <input
//               type="date"
//               placeholder="DD/MM/YYYY"
//               className="w-full rounded-lg border text-sm border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"

//             />
//           </div>
//         );
//       case 'radio':
//         return (
//           <div className="flex justify-between">
//             {options.map((option) => (
//               <div key={option} className="flex-1">
//                 <label className="flex items-center" key={option}>
//                   <input
//                     type="radio"
//                     name={label.toLowerCase().replace(/\s+/g, '-')}
//                     className="h-4 w-4 text-purple-600 focus:ring-purple-500"

//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option}</span>
//                 </label>
//               </div>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="space-y-2">
//       {label && <label className="text-sm font-medium text-gray-900">{label}</label>}
//       {renderField()}
//     </div>
//   );
// };

// export default FormField;

import React from 'react';

interface FormFieldProps {
  label?: string;
  type: 'select' | 'date' | 'radio';
  options?: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label = '',
  type,
  options = [],
  placeholder,
  value,
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <div className="relative">
            <select
              value={value}
              onChange={handleChange}
              className="w-full text-sm appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case 'date':
        return (
          <div className="relative">
            <input
              type="date"
              value={value}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              className="w-full rounded-lg border text-sm border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        );
      case 'radio':
        return (
          <div className="flex justify-between">
            {options.map((option) => (
              <div key={option} className="flex-1">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={label.toLowerCase().replace(/\s+/g, '-')}
                    value={option}
                    checked={value === option}
                    onChange={handleChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-gray-900">{label}</label>}
      {renderField()}
    </div>
  );
};

export default FormField;
