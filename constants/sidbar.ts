import { Home, LucideIcon,Bed,Library,Book,DollarSign } from 'lucide-react';

export interface SidebarDataProps {
  id: number;
  title: string;
  icon: LucideIcon;
  link: string;
}

export const sidebarData: SidebarDataProps[] = [
  {
    id: 1,
    title: 'Home',
    icon: Home,
    link: '/dashboard',
  },
  {
    id: 2,
    title: 'Room category',
    icon: Library,
    link: '/dashboard/room/category',
  },
  {
    id: 3,
    title: 'Room',
    icon: Bed,
    link: '/dashboard/room',
  },
  {
    id: 4,
    title: 'booking',
    icon: Book,
    link: '/dashboard/booking',
  },
  {
    id: 5,
    title: 'payment',
    icon: DollarSign,
    link: '/dashboard/payment',
  },
];
