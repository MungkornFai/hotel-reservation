import { Home, LucideIcon, Bed, Library, Book, DollarSign } from 'lucide-react';

export interface SidebarDataProps {
  id: number;
  title: string;
  icon: LucideIcon;
  link: string;
}

export const sidebarData: SidebarDataProps[] = [
  {
    id: 1,
    title: 'ໜ້າຫຼັກ',
    icon: Home,
    link: '/dashboard',
  },
  {
    id: 2,
    title: 'ຈັດການປະເພດຫ້ອງ',
    icon: Library,
    link: '/dashboard/room/category',
  },
  {
    id: 3,
    title: 'ຈັດການຫ້ອງ',
    icon: Bed,
    link: '/dashboard/room/creating',
  },
  {
    id: 4,
    title: 'ຈັດການຈັອງຫ້ອງ',
    icon: Book,
    link: '/dashboard/booking',
  },
  {
    id: 5,
    title: 'ຈັດການການຈ່າຍເງິນ',
    icon: DollarSign,
    link: '/dashboard/payment',
  },
];
