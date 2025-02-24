'use client';

import Image from 'next/image';
import {
  BusinessIcon,
  BusinessIconP,
  MapPinAreaIconDash,
  PencilSimpleLineDash,
} from '@/app/components/icons/Icons';

import useModalStore from '../../../../lib/store/useModalStore';

export default function CompanyInfo() {
const { openEditCompanyMemberModal } = useModalStore();

  return (
    <div className='mx-auto w-[59.875rem]'>
      <div className='w-full flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-gray-200 rounded-base'>
            <BusinessIcon />
          </div>
          <h1 className='text-2xl font-semibold'>Company Information</h1>
        </div>
      </div>
      <div className='w-full h-auto bg-white rounded-xl'>
        <div className='w-full h-[3.625rem] border-b border-neutral-200 text-lg font-medium p-[1rem_1.5rem]'>
          Company
        </div>
        <div className='w-full p-[1.5rem_1.5rem_2.5rem_1.5rem]'>
          <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-6'>
                <span className='w-[6.5625rem] h-[6.5625rem] bg-pink-lighter flex items-center justify-center rounded-[0.35rem]'>
                  <BusinessIconP />
                </span>
                <div className='w-[16rem] h-[3.75rem] flex flex-col gap-2'>
                  <h2 className='text-2xl font-semibold'>
                    Apple Investment LLC
                  </h2>
                  <span className='text-sm font-medium text-neutral-900'>
                    Private Limited Company
                  </span>
                </div>
              </div>
              <button className='w-[9.375rem] h-9 text-sm font-semibold rounded-base border border-neutral-300 shadow-custom'>
                Upload Logo
              </button>
            </div>
            <div className='w-full h-[28.25rem] flex flex-col'>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Business Name
                </span>
                <span className='text-neutral-900 font-semibold'>
                  Apple PLC
                </span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>Entity Type</span>
                <span className='text-neutral-900 font-semibold'>
                  Limited Liability Company
                </span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Country of registration
                </span>
                <span className='text-neutral-900 font-semibold'>Nigeria</span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Business Address
                </span>
                <span className='text-neutral-900 font-semibold'>
                  10, Iyana Ipaja road, Ipaja, Lagos, Nigeria.
                </span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Compliance Status
                </span>
                <span className='text-neutral-900 font-semibold'>Active</span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Formation Date
                </span>
                <span className='text-neutral-900 font-semibold'>
                  12/09/2021
                </span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>Tax ID</span>
                <span className='text-neutral-900 font-semibold'>432134</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-auto bg-white rounded-xl mt-6'>
        <div className='w-full h-[3.625rem] border-b border-neutral-200 text-lg font-medium p-[1rem_1.5rem]'>
          Directors
        </div>
        <div className='w-full p-[1rem_1.5rem_1.5rem_1.5rem] flex flex-col gap-4'>
          <div className='h-20 p-4 flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-base'>
            <div className='w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center'>
              MM
            </div>
            <div className='flex flex-col'>
              <span className='font-medium'>Martin Mark</span>
              <div className='flex gap-[0.375rem] items-center'>
                <MapPinAreaIconDash />
                <span className='text-sm text-gray-500'>
                  No. 2, Yaba close, Surulere, Lagos
                </span>
              </div>
            </div>
          </div>
          <div className='h-20 p-4 flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-base'>
            <div className='w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center'>
              MM
            </div>
            <div className='flex flex-col'>
              <span className='font-medium'>Martin Mark</span>
              <div className='flex gap-[0.375rem] items-center'>
                <MapPinAreaIconDash />
                <span className='text-sm text-gray-500'>
                  No. 2, Yaba close, Surulere, Lagos
                </span>
              </div>
            </div>
          </div>
          <div className='h-20 p-4 flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-base'>
            <div className='w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center'>
              MM
            </div>
            <div className='flex flex-col'>
              <span className='font-medium'>Martin Mark</span>
              <div className='flex gap-[0.375rem] items-center'>
                <MapPinAreaIconDash />
                <span className='text-sm text-gray-500'>
                  No. 2, Yaba close, Surulere, Lagos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-auto bg-white rounded-xl mt-6'>
        <div className='w-full h-[4.5rem] border-b border-neutral-200 text-lg font-medium p-[1rem_1.5rem] flex items-center justify-between'>
          <h2>Contact Person</h2>
          <button className='w-[4.4375rem] h-10 rounded-base border border-neutral-300 flex items-center justify-center' onClick={openEditCompanyMemberModal}>
            <span className='flex items-center gap-1'>
              <PencilSimpleLineDash /> <span className='text-sm font-semibold text-neutral-700'>Edit</span>
            </span>
          </button>
        </div>
        <div className='w-full p-[0_1.5rem_0_1.5rem]'>
          <div className='flex flex-col gap-10'>
            <div className='w-full h-auto flex flex-col'>
              <div className='h-[5.5rem] flex items-center gap-3'>
                <Image
                  src='/images/contact.png'
                  alt='contact person'
                  width={40}
                  height={40}
                />
                <span className='text-neutral-900 font-medium'>
                  Priscilla Ujomu
                </span>
              </div>

              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>Email</span>
                <span className='text-neutral-900 font-semibold'>
                  Priscilla@awesome.com
                </span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>Phone number</span>
                <span className='text-neutral-900 font-semibold'>
                  +234809000004738
                </span>
              </div>
              <div className='h-16 border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Country of registration
                </span>
                <span className='text-neutral-900 font-semibold'>Nigeria</span>
              </div>
              <div className='h-[5.5rem] border-t border-neutral-200 flex items-center justify-between text-sm'>
                <span className='text-[#66717F] font-medium'>
                  Business Address
                </span>
                <span className='text-neutral-900 font-semibold'>
                  10, Iyana Ipaja road, Ipaja, Lagos, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
