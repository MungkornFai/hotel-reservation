'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { sidebarData } from '@/constants/sidbar';
import { CircleEllipsis } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <div>
      <Sidebar {...props}>
        <SidebarContent>
          <SidebarGroup>
            <Link href={'/dashboard'}>
              <CircleEllipsis className='w-20 h-20 m-auto text-blue-300 mt-8' />
            </Link>
            <SidebarGroupContent>
              <SidebarMenu className='gap-2 mt-4'>
                {sidebarData.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        'hover:bg-blue-100 rounded duration-200 transition-all ease-in-out',
                        {
                          'bg-blue-50': pathname === item.link,
                        }
                      )}
                    >
                      <Link href={item.link}>
                        <item.icon />
                        <span className='font-noto text-base sm:text-md'>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
