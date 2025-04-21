import { MainLayout } from '@/app/(main)/components/MainLayout';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default Layout;
