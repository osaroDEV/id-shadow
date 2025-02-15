import SubDashboardNavbar from '@/app/components/dashboard/SubDashboardNavbar';
import Sidebar from '../components/dashboard/Sidebar';

export const metadata = {
  title: 'Dashboard - Recommendation',
  description: 'View your recommendations',
};

export default function RecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-screen bg-neutral-50 relative'>
      <SubDashboardNavbar />
      <div className='w-full flex'>
        <Sidebar />
        <div className='xl:w-[calc(100vw-13.5rem)] xxl:w-[calc(100vw-17.5rem)] xl:p-[1.5rem_2rem] xxl:p-[2rem_2.5rem]'>
          {children}
        </div>
      </div>
    </div>
  );
}
