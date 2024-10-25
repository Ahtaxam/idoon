import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-primary_bg">
      <Sidebar />
      <div className="flex-1 flex flex-col dark:bg-primary_bg">
        <Header />
        <main className="flex-1 overflow-auto p-6 ">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
