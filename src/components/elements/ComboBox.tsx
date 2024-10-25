import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import clsx from 'clsx';
import { OptionType } from '../../untils/types/element';

export default function ComboBox({ values: listOptions }: { values: OptionType[] }) {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(listOptions[0]);

  const getInitials = (option: OptionType) => {
    const name = option.name;
    const initials = name
      .replace(/\s+/g, ' ')
      .split(' ')
      .slice(0, 2)
      .map((letter) => letter[0])
      .join('');
    return initials;
  };

  const filteredData =
    query === ''
      ? listOptions
      : listOptions.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedOption}
      onChange={(option: OptionType) => {
        setQuery('');
        setSelectedOption(option);
      }}>
      <div className="relative mt-2">
        <div className="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
            <span className="text-xs font-medium text-white">{getInitials(selectedOption)}</span>
          </div>
        </div>
        <ComboboxInput
          className={clsx(
            'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-9 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(option: OptionType) => option.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredData.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-white/50 bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredData.map((option) => (
              <ComboboxOption
                key={option.name}
                value={option}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-secondary data-[focus]:text-white">
                <span className="block truncate group-data-[selected]:font-semibold">
                  {option.name}
                </span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-secondary group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
