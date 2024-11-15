import AppSidebar from '@/components/app.sidebar';
import HeaderBreadscrumb from '@/components/header.breadscrumb';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <SidebarProvider>
        <AppSidebar variant='inset' />

        <SidebarInset>
          <header className='border-b min-h-10 p-4 flex items-center'>
            <div className='flex justify-between w-full'>
              <div className='flex gap-2 items-center'>
                <SidebarTrigger className='md:hidden text-2xl' />
                <div className='hidden md:flex'>
                  <HeaderBreadscrumb />
                </div>
              </div>
              <div className=''>avartar</div>
            </div>
          </header>
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
