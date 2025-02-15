import { Metadata } from 'next';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';

export const metadata: Metadata = {
  title: 'Dashboard - Setup Account',
  description: 'Complete your account setup',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-gray-50 relative'>
      <DashboardNavbar />
      <main className='container flex justify-center py-[2.375rem]'>
        {children}
        {/* <UpdateInfo /> */}
      </main>
    </div>
  );
}
