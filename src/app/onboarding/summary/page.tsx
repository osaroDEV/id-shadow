'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AddressBookIcon,
  ArticleIcon,
  BusinessIcon,
  MapPinLineIcon,
  NotePencilIcon,
  ReceiptIcon,
  UsersFourIcon,
} from '@/app/components/icons/Icons';
import OrderSummary from '@/app/components/OrderSummary';

import { useOnboardingStore } from '../../../../lib/store/onboarding';

export default function SummaryPage() {
const {businessType} = useOnboardingStore();

  const handleEdit = (section: string) => {
    console.log(`Edit ${section} clicked`);
  };

  return (
    <div className='max-auto'>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-gray-200 rounded-base'>
            <ArticleIcon />
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>Summary</h1>
        </div>
        </div>
        <div className='flex gap-8'>
          <div className='flex-[2] space-y-6'>
            <Card className='w-full h-auto p-8 bg-white border border-neutral-200 rounded-xl flex lg:flex-col gap-8'>
              <div className='w-full h-auto flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between h-[2.5rem]'>
                  <div className='flex items-center gap-2'>
                    <ReceiptIcon />
                    <h2 className='text-sm font-medium'>Formation Info</h2>
                  </div>
                  <div className='flex items-center gap-1 w-[6.8125rem]'>
                    <span
                      className='text-blue-600 hover:text-blue-700 text-sm font-semibold cursor-pointer'
                      onClick={() => handleEdit('formation')}
                    >
                      Edit Details
                    </span>
                    <NotePencilIcon />
                  </div>
                </div>
                <Card className='w-full h-[5.75rem] p-6 sm:p-6 shadow-sm bg-neutral-50 border border-neutral-200'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <p className='text-sm text-gray-500'>
                        Country of Registration
                      </p>
                      <p className='font-medium mt-1'>Nigeria</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Business Type</p>
                      <p className='font-medium mt-1 uppercase'>{businessType.designator}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className='w-full h-auto flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between h-[2.5rem]'>
                  <div className='flex items-center gap-2'>
                    <BusinessIcon />
                    <h2 className='text-sm font-medium'>Company Info</h2>
                  </div>
                  <div className='flex items-center gap-1 w-[6.8125rem]'>
                    <span
                      className='text-blue-600 hover:text-blue-700 text-sm font-semibold cursor-pointer'
                      onClick={() => handleEdit('formation')}
                    >
                      Edit Details
                    </span>
                    <NotePencilIcon />
                  </div>
                </div>
                <Card className='w-full h-[12.5rem] p-6 sm:p-6 shadow-sm bg-neutral-50 border border-neutral-200 flex flex-col gap-8'>
                  <div className='flex gap-4 sm:gap-6'>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Company Name 1</p>
                      <p className='font-medium mt-1'>{businessType.businessName}</p>
                    </div>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Company Name 1</p>
                      <p className='font-medium mt-1'>{businessType.alternateName}</p>
                    </div>
                  </div>
                  <div className='flex gap-4 sm:gap-6'>
                    <div className='flex flex-col w-full'>
                      <p className='text-sm text-gray-500'>Description</p>
                      <p className='font-medium mt-1'>
                        {businessType.businessDescription}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className='w-full h-auto flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between h-[2.5rem]'>
                  <div className='flex items-center gap-2'>
                    <MapPinLineIcon />
                    <h2 className='text-sm font-medium'>
                      Registered Office Address
                    </h2>
                  </div>
                  <div className='flex items-center gap-1 w-[6.8125rem]'>
                    <span
                      className='text-blue-600 hover:text-blue-700 text-sm font-semibold cursor-pointer'
                      onClick={() => handleEdit('formation')}
                    >
                      Edit Details
                    </span>
                    <NotePencilIcon />
                  </div>
                </div>
                <Card className='w-full h-auto p-6 sm:p-6 shadow-sm bg-neutral-50  flex flex-col gap-8 border border-neutral-200'>
                  <div className='flex gap-4 sm:gap-6'>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Company Address</p>
                      <p className='font-medium mt-1'>
                        No. 2, Yaba Close, Surulere, Lagos
                      </p>
                    </div>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Contact Address</p>
                      <p className='font-medium mt-1'>
                        No. 2, Yaba Close, Ikoyi Lagos
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className='w-full h-[15rem] flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between h-[2.5rem]'>
                  <div className='flex items-center gap-2'>
                    <AddressBookIcon />
                    <h2 className='text-sm font-medium'>Contact Info</h2>
                  </div>
                  <div className='flex items-center gap-1 w-[6.8125rem]'>
                    <span
                      className='text-blue-600 hover:text-blue-700 text-sm font-semibold cursor-pointer'
                      onClick={() => handleEdit('formation')}
                    >
                      Edit Details
                    </span>
                    <NotePencilIcon />
                  </div>
                </div>
                <Card className='w-full h-auto p-6 sm:p-6 shadow-sm bg-neutral-50 border border-neutral-200 flex flex-col gap-8'>
                  <div className='flex gap-4 sm:gap-6'>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Full Name</p>
                      <p className='font-medium mt-1'>Priscilla Anthony</p>
                    </div>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Contact Address</p>
                      <p className='font-medium mt-1'>
                        No. 2, Yaba Close, Ikoyi Lagos
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4 sm:gap-6'>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Phone Number</p>
                      <p className='font-medium mt-1'>+234801234911</p>
                    </div>
                    <div className='flex flex-col w-[48%]'>
                      <p className='text-sm text-gray-500'>Email Address</p>
                      <p className='font-medium mt-1'>Priscilla@rvysion.com</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className='w-full h-auto flex flex-col gap-2'>
                <div className='w-full flex items-center justify-between h-[2.5rem]'>
                  <div className='flex items-center gap-2'>
                    <UsersFourIcon />
                    <h2 className='text-sm font-medium'>
                      Directors and Shareholders
                    </h2>
                  </div>
                  <div className='flex items-center gap-1 w-[6.8125rem]'>
                    <span
                      className='text-blue-600 hover:text-blue-700 text-sm font-semibold cursor-pointer'
                      onClick={() => handleEdit('formation')}
                    >
                      Edit Details
                    </span>
                    <NotePencilIcon />
                  </div>
                </div>
                <Card className='w-full h-auto p-6 sm:p-6 shadow-sm bg-neutral-50 border border-neutral-200 flex flex-col gap-8'>
                  <div className='flex flex-col bg-white rounded-base gap-5 p-6'>
                    <div className='w-full flex flex-col'>
                      <p className='text-base text-black font-medium'>
                        Member One
                      </p>
                      <hr className='my-4' />
                      <div className='flex flex-row items-center justify-between h-[3.125rem]'>
                        <div className='flex flex-col w-[32%] h-full text-sm'>
                          <p className='text-sm text-gray-500'>Name</p>
                          <p className='font-medium mt-1 text-neutral-900'>
                            Priscilla Anthony
                          </p>
                        </div>
                        <div className='flex flex-col w-[32%] h-full text-sm'>
                          <p className='text-sm text-gray-500'>Ownership</p>
                          <p className='font-medium mt-1 text-neutral-900'>
                            10%
                          </p>
                        </div>
                        <div className='flex flex-col w-[32%] h-full text-sm'>
                          <p className='text-gray-500'>Address</p>
                          <p className='font-medium mt-1 text-neutral-900'>
                            No. 2, Yaba Close, Ikoyi Lagos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col bg-white rounded-base gap-5 p-6'>
                    <div className='w-full flex flex-col'>
                      <p className='text-base text-black font-medium'>
                        Member Two
                      </p>
                      <hr className='my-4' />
                      <div className='flex flex-row items-center justify-between h-[3.125rem]'>
                        <div className='flex flex-col w-[32%] h-full text-sm'>
                          <p className='text-sm text-gray-500'>Name</p>
                          <p className='font-medium mt-1 text-neutral-900'>
                            Adekunle Chuks
                          </p>
                        </div>
                        <div className='flex flex-col w-[32%] h-full text-sm'>
                          <p className='text-sm text-gray-500'>Ownership</p>
                          <p className='font-medium mt-1 text-neutral-900'>
                            20%
                          </p>
                        </div>
                        <div className='flex flex-col w-[32%] h-full text-sm'>
                          <p className='text-gray-500'>Address</p>
                          <p className='font-medium mt-1 text-neutral-900'>
                            No. 2, Yaba Close, Ikoyi Lagos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className='mt-8 flex justify-between'>
                <Button variant='outline'>Go Back</Button>
                <Button className='bg-blue-base px-7 hover:bg-blue-600'>
                  Proceed
                </Button>
              </div>
            </Card>
          </div>
          <div className='flex-1'>
            <OrderSummary />
          </div>
        </div>
      </div>
    
  );
}
