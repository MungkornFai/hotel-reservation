import AppSidebar from '@/components/app.sidebar';
import Topbar from '@/components/topbar';
import {
  SidebarInset,
  SidebarProvider,

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
          <Topbar />
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
