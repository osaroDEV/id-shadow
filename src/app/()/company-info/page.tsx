'use client';

import ActionItems from '@/app/components/dashboard/ActionItems';
import CircularProgress from '@/app/components/dashboard/CircularProgress';
import Image from 'next/image';
import {
  ArrowRightSmallIcon,
  BankDashboardIcon,
  CaretRightIcon,
  ClockIcon,
  FilesRecIcon,
  MegaphoneDashboardIcon,
  ToolboxRecIcon,
} from '@/app/components/icons/Icons';

export default function CompanyInfo() {
  return (
    <div className='flex flex-col gap-16'>
      <section>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome Priscilla,</h1>
        <p className='text-sm text-[#64748B]'>
          Lets bring you up to speed with your company.
        </p>
      </section>
      <section className='flex items-center justify-between'>
        <div className='w-[68%] h-[10.875rem] p-6 rounded-xl bg-white border border-neutral-200 flex justify-between'>
          <div className='h-full w-[34%] flex flex-col justify-between'>
            <div>
              <h3 className='text-[#030404] text-xl font-semibold'>
                Rvysion Inc
              </h3>
              <p className='text-sm text-neutral-500 font-medium'>
                Limited Liability Company
              </p>
            </div>
            <div className='text-sm text-neutral-500 font-medium flex items-center gap-1'>
              <ClockIcon />
              <span>Estimated wait time:</span>
              <span>2 weeks</span>
            </div>
          </div>
          <div className='h-full w-[60%] flex flex-col justify-between items-end'>
            <span className='text-[#F17B2C] text-xs font-medium bg-[#FEF3EB] p-[.25rem_.5rem] rounded'>
              Pending registration
            </span>
            <CircularProgress percentage={78} />
          </div>
        </div>
        <div className='w-[30%] h-[10.875rem] p-6 rounded-xl bg-white border border-neutral-200'>
          <h3 className='text-[#030404] text-lg font-semibold'>Guide</h3>
          <p className='text-sm text-neutral-500 font-medium mt-4'>
            90% of businesses in your sector do become fully compliant within 30
            days
          </p>
          <div className='flex items-center gap-2 mt-6'>
            <span className='text-sm text-neutral-500 font-medium'>
              Find out how
            </span>
            <ArrowRightSmallIcon />
          </div>
        </div>
      </section>
      <ActionItems />
      <div className='w-full flex justify-between'>
        <div className='xl:w-[42rem] xxl:w-[43.9375rem] xl:h-auto xxl:h-auto rounded-xl border border-neutral-200 overflow-hidden'>
          <div className='w-full h-[4.5rem] p-6 text-[#030404] font-semibold bg-white border-b border-neutral-200'>
            Hand-picked for you
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center justify-between'>
            <div className='flex items-center'>
              <FilesRecIcon />
              <div className='ml-5 text-neutral-500'>
                <h3 className='font-semibold'>Templates</h3>
                <h4 className='text-sm font-medium'>
                  Find customizable templates
                </h4>
              </div>
            </div>
            <span className='w-10 h-10 rounded-[.5rem] border border-neutral-300 flex items-center justify-center'>
              <CaretRightIcon />
            </span>
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center justify-between'>
            <div className='flex items-center'>
              <ToolboxRecIcon />
              <div className='ml-5 text-neutral-500'>
                <h3 className='font-semibold'>Additional Services</h3>
                <h4 className='text-sm font-medium'>
                  Get more from Idara with ad-ons
                </h4>
              </div>
            </div>
            <span className='w-10 h-10 rounded-[.5rem] border border-neutral-300 flex items-center justify-center'>
              <CaretRightIcon />
            </span>
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center justify-between'>
            <div className='flex items-center'>
              <BankDashboardIcon />
              <div className='ml-5 text-neutral-500'>
                <h3 className='font-semibold'>Financial Services</h3>
                <h4 className='text-sm font-medium'>
                  Explore additional financial services for your business
                </h4>
              </div>
            </div>
            <span className='w-10 h-10 rounded-[.5rem] border border-neutral-300 flex items-center justify-center'>
              <CaretRightIcon />
            </span>
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center justify-between'>
            <div className='flex items-center'>
              <MegaphoneDashboardIcon />
              <div className='ml-5 text-neutral-500'>
                <h3 className='font-semibold'>Marketing and Branding </h3>
                <h4 className='text-sm font-medium'>
                  Find suggestions for effective marketing
                </h4>
              </div>
            </div>
            <span className='w-10 h-10 rounded-[.5rem] border border-neutral-300 flex items-center justify-center'>
              <CaretRightIcon />
            </span>
          </div>
        </div>
        <div className='xl:w-[19.5rem] xxl:w-[21.625rem] xl:h-[22rem] xxl:h-[22rem] rounded-xl border border-neutral-200 overflow-hidden'>
          <div className='w-full h-[4.5rem] p-6 text-[#030404] font-semibold bg-white border-b border-neutral-200'>
            Tools and Resources
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center gap-4'>
            <Image
              src={'/images/pos.png'}
              width={80}
              height={56}
              alt='POS image'
            />
            <span className='flex items-center text-sm text-neutral-500 font-medium w-[12.625rem]'>
              Business planner
            </span>
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center gap-4'>
            <Image
              src={'/images/pos.png'}
              width={80}
              height={56}
              alt='POS image'
            />
            <span className='flex items-center text-sm text-neutral-500 font-medium w-[12.625rem]'>
              How to get funding for your first year business
            </span>
          </div>
          <div className='w-full h-[5.8125rem] p-6 bg-white border-b border-neutral-200 flex items-center gap-4'>
            <Image
              src={'/images/pos.png'}
              width={80}
              height={56}
              alt='POS image'
            />
            <div className='flex items-center text-sm text-neutral-500 font-medium w-[12.625rem]'>
              Regulatory requirements for point of sale operators in Nigeria
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
