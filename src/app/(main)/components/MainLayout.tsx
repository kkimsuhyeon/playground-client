import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/Sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar>123</Sidebar>
      {children}
    </SidebarProvider>
  );
}
