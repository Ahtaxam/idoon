import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Select from './elements/Select';
import React from 'react';

const Header = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  return (
    <header className="border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-black dark:text-white">Coverage Periods</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative dark:hover:bg-primary_bg">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-white" />
          <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button
          className="p-2 hover:bg-gray-100 dark:hover:bg-primary_bg rounded-full"
          onClick={darkModeHandler}>
          {dark ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary_bg rounded-md flex items-center justify-center dark:hover:bg-gray-600">
            <span className="text-sm font-medium text-white">HK</span>
          </div>
          <Select title="Hanna" />
        </div>
      </div>
    </header>
  );
};

export default Header;
