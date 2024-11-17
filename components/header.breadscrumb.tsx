'use client';

import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
export default function HeaderBreadscrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((segment) => segment !== '');
  console.log(segments);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, idx) => {
          const href = `${segments.slice(0, idx + 1).join('/')}`;
          const isLast = idx === segments.length - 1;
          return (
            <BreadcrumbItem key={href} className='font-sans'>
              {isLast ? (
                <BreadcrumbPage>{segment}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink>{segment}</BreadcrumbLink>
                  <BreadcrumbSeparator>
                    <ChevronRight />
                  </BreadcrumbSeparator>
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
