import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import CreateAvatar from '@/lib/create.avatar';
import Image from 'next/image';
import { Button } from './ui/button';


export default function UserProfile() {
  return (
    <section id='user-profile'>
      <Popover>
        <PopoverTrigger>
          <CreateAvatar seed='Mungkorn' src='./me.jpeg' />
        </PopoverTrigger>
        <PopoverContent>
          <div className='flex flex-col py-8 justify-center items-center'>
            <Image src={'/me.jpeg'} width={80} height={80} alt='user avatar' />
            <p className='text-sm mt-2 font-sans'>Mungkorn Phaiyladsamee</p>
          </div>
          <Button variant={'outline'} className='w-full text-sm'>
            Sign out
          </Button>
        </PopoverContent>
      </Popover>
    </section>
  );
}
