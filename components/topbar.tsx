import React from 'react';
import { SidebarTrigger } from './ui/sidebar';
import HeaderBreadscrumb from './header.breadscrumb';
import UserProfile from './user.profile';

export default function Topbar() {
  return (
    <header className='border-b min-h-10 p-4 flex items-center'>
      <div className='flex justify-between w-full'>
        <div className='flex gap-2 items-center'>
          <SidebarTrigger className='md:hidden text-2xl' />
          <div className='hidden md:flex'>
            <HeaderBreadscrumb />
          </div>
        </div>
        <UserProfile />
      </div>
    </header>
  );
}
