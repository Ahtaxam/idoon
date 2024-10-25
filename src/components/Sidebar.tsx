import React, { useState } from 'react';
import {
  InboxIcon,
  FolderIcon,
  BookOpenIcon,
  DocumentIcon,
  ClipboardDocumentListIcon,
  TicketIcon,
  ChartBarIcon,
  ClockIcon,
  UserIcon,
  Cog6ToothIcon,
  UsersIcon,
  DocumentMagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/20/solid';
import ComboBox from './elements/ComboBox';
import { OptionType } from '../untils/types/element';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dashboards: OptionType[] = [
    { id: 1, name: 'Customer Dashboard' },
    { id: 2, name: 'Admin Dashboard' },
    { id: 3, name: 'Sales Dashboard' }
  ];

  return (
    <aside
      className={`${isCollapsed ? 'w-20' : 'w-64'} bg-primary_bg text-white min-h-screen relative transition-all duration-300 ease-in-out`}>
      <div className="p-4">
        <h1 className={`text-2xl font-bold text-[#EF5EEC] ${isCollapsed ? 'text-center' : ''}`}>
          {isCollapsed ? 'ID' : 'IDEON'}
        </h1>
      </div>

      <nav>
        {!isCollapsed && (
          <div className="px-4 py-2">
            <ComboBox values={dashboards} />
          </div>
        )}

        <div className="mt-4">
          <div className="px-4 py-2">
            <div
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'}`}>
                <InboxIcon className="w-5 h-5" />
                {!isCollapsed ? (
                  <span>Inbox</span>
                ) : (
                  <span className="text-xs absolute font-bold right-1 text-secondary bg-white rounded-full px-1">
                    8
                  </span>
                )}
              </div>
              <div
                className={`w-6 h-6 border border-white/50 bg-primary_bg rounded-md flex items-center justify-center ${isCollapsed ? 'hidden' : ''}`}>
                <span className="text-xs font-medium text-white">8</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {!isCollapsed && <h3 className="px-4">Perspective Groups</h3>}
            <div className="mt-2">
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2 px-4`}>
                <FolderIcon className="w-5 h-5" />
                {!isCollapsed && <span>Perspective Groups</span>}
              </div>
            </div>
          </div>

          <div className="mt-6">
            {!isCollapsed && <h3 className="text-sm px-4">Enrollments</h3>}
            <div className="space-y-2 mt-2">
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2 px-4`}>
                <BookOpenIcon className="w-5 h-5" />
                {!isCollapsed && <span>Pre Coverage Periods</span>}
              </div>
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2 bg-[#2a2f3e] px-4`}>
                <DocumentIcon className="text-secondary w-5 h-5" />
                {!isCollapsed && <span className="text-secondary">Coverage Periods</span>}
              </div>
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2 px-4`}>
                <ClipboardDocumentListIcon className="w-5 h-5" />
                {!isCollapsed && <span>Enrollment Tasks</span>}
              </div>
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2 px-4`}>
                <TicketIcon className="w-5 h-5" />
                {!isCollapsed && <span>Customer Tickets</span>}
              </div>
            </div>
          </div>

          <div className="mt-6 px-4">
            {!isCollapsed && <h3 className="text-sm">Discrepancies</h3>}
            <div className="mt-2">
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2`}>
                <DocumentMagnifyingGlassIcon className="w-5 h-5" />
                {!isCollapsed && <span>Enrollment Discrepancies</span>}
              </div>
            </div>
          </div>

          <div className="mt-6 px-4">
            {!isCollapsed && <h3 className="text-sm">Reports</h3>}
            <div className="space-y-2 mt-2">
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2`}>
                <UserIcon className="w-5 h-5" />
                {!isCollapsed && <span>Member Counts</span>}
              </div>
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2`}>
                <ChartBarIcon className="w-5 h-5" />
                {!isCollapsed && <span>SLA Performance</span>}
              </div>
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2`}>
                <ClockIcon className="w-5 h-5" />
                {!isCollapsed && <span>Time to Production</span>}
              </div>
            </div>
          </div>

          <div className="mt-6 px-4">
            {!isCollapsed && <h3 className="text-sm">Admin</h3>}
            <div className="space-y-2 mt-2">
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2`}>
                <UsersIcon className="w-5 h-5" />
                {!isCollapsed && <span>Users</span>}
              </div>
              <div
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} py-2`}>
                <Cog6ToothIcon className="w-5 h-5" />
                {!isCollapsed && <span>Account Settings</span>}
              </div>
            </div>
          </div>
          <div className="mt-6 px-4">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute right-3 bottom-2 bg-primary_bg rounded-md p-1 border border-gray-600 hover:bg-[#2a2f3e] transition-colors">
              {isCollapsed ? (
                <ArrowRightIcon className="w-5 h-5" />
              ) : (
                <ArrowLeftIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
