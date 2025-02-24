'use client';

import ActionItems from '@/app/components/dashboard/ActionItems';
import CompanyOverview from '@/app/components/CompanyOverview';
import OtherServices from '@/app/components/dashboard/OtherServices';

export default function DashboardHome() {
  return (
    <div className='flex flex-col gap-16 xl:w-[61.1875rem] xxl:w-[70.5625rem]'>
      <section>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome Priscilla,</h1>
        <p className='text-sm text-[#64748B]'>
          Get started with your applications
        </p>
      </section>
      <ActionItems />
      <div>
        <section className='mb-8'>
          <h1 className='text-xl font-semibold text-neutral-1000'>
            Company Overview
          </h1>
          <p className='text-sm font-medium text-neutral-500'>
            View your company details
          </p>
        </section>
        <CompanyOverview />
      </div>
      <div>
        <section className='mb-8'>
          <h1 className='text-xl font-semibold text-neutral-1000'>
            Other company related service
          </h1>
          <p className='text-sm font-medium text-neutral-500'>
            Use Idara for other services
          </p>
        </section>
        <OtherServices />
      </div>
    </div>
  );
}
