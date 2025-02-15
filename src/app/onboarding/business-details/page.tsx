'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  HouseIcon,
  MapPinAreaIcon,
  MapPinLineIcon,
  UsersFourIcon,
} from '@/app/components/icons/Icons';
import OrderSummary from '@/app/components/OrderSummary';
import FAQ from '@/app/components/FAQ';
import useModalStore from '../../../../lib/store/useModalStore';
import { useOnboardingStore } from '../../../../lib/store/onboarding';

export default function BusinessDetailsPage() {
  const { members, removeMember } = useOnboardingStore();

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getFullAddress = (member: (typeof members)[0]) => {
    const parts = [
      member.address,
      member.city,
      member.state,
      member.zipCode,
    ].filter(Boolean);
    return parts.join(', ');
  };

  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<'address' | 'members'>(
    'address'
  );

  const [addressOrigin, setAddressOrigin] = useState('');

  const handleValueChange = (value: string) => {
    setAddressOrigin(value);
  };

  const handleNext = () => {
    if (currentScreen === 'address') {
      setCurrentScreen('members');
    } else {
      router.push('/onboarding/addons');
    }
  };

  const handleBack = () => {
    if (currentScreen === 'members') {
      setCurrentScreen('address');
    } else {
      router.push('/onboarding/contact');
    }
  };

  const { openModal } = useModalStore();

  return (
    <div className='mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <button className='p-2 bg-gray-200 rounded-base'>
            {currentScreen === 'address' ? (
              <MapPinLineIcon />
            ) : (
              <UsersFourIcon />
            )}
          </button>
          <h1 className='text-2xl font-bold text-gray-900'>
            {currentScreen === 'address'
              ? 'Company Address Information'
              : 'Members Information for Your Company'}
          </h1>
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='flex flex-col gap-8 flex-[2]'>
          <Card className='p-6'>
            {currentScreen === 'address' ? (
              <div className='space-y-6'>
                <div className='text-sm text-gray-600 mb-6'>
                  To comply with legal requirements, users must provide a
                  registered office address located within the country where
                  they intend to set up their company.
                </div>

                <RadioGroup
                  defaultValue='idaraAddress'
                  onValueChange={handleValueChange}
                  className='flex gap-6'
                >
                  <Card className='flex-1 border focus-within:border-blue-light focus-within:shadow-[0_0_0_4px_rgba(96,165,250,0.1)] p-6'>
                    <div className='flex flex-col gap-6'>
                      <div className='flex items-center justify-between'>
                        <div className='p-2 bg-blue-lighter rounded-base'>
                          <MapPinAreaIcon />
                        </div>
                        <RadioGroupItem
                          value='idaraAddress'
                          className='form-radio'
                        />
                      </div>
                      <div className='flex flex-col gap-2 h-24'>
                        <h2 className='text-neutral-900 text-base'>
                          Idara-provided Office Address
                        </h2>
                        <p className='text-[#66717F] text-sm'>
                          Idara provides you an address you can use for all your
                          official documentation.
                        </p>
                      </div>
                      <div className='text-[1.75rem] text-neutral-900 font-bold'>
                        ₦12,000
                      </div>
                      <hr />
                      <ul className='mt-2 text-sm list-disc px-5'>
                        <li>Benefit of using Idara Address</li>
                        <li>Benefit of using Idara Address</li>
                        <li>Benefit of using Idara Address</li>
                      </ul>
                    </div>
                  </Card>

                  <Card className='flex-1 border focus-within:border-blue-light focus-within:shadow-[0_0_0_4px_rgba(96,165,250,0.1)] p-6'>
                    <div className='flex flex-col gap-6'>
                      <div className='flex items-center justify-between'>
                        <div className='p-2 bg-blue-lighter rounded-base'>
                          <HouseIcon />
                        </div>
                        <RadioGroupItem
                          value='ownAddress'
                          className='form-radio'
                        />
                      </div>
                      <div className='flex flex-col gap-2 h-24'>
                        <h2 className='text-neutral-900 text-base'>
                          Your own Office Address
                        </h2>
                        <p className='text-[#66717F] text-sm'>
                          Your own office address, this can be changed anytime.
                        </p>
                      </div>
                      <div className='text-[1.75rem] text-neutral-900 font-bold'>
                        FREE
                      </div>
                      <hr />
                      <ul className='mt-2 text-sm list-disc px-5'>
                        <li>Benefit of using Idara Address</li>
                        <li>Benefit of using Idara Address</li>
                      </ul>
                    </div>
                  </Card>
                </RadioGroup>
                <>
                  {addressOrigin === 'ownAddress' && (
                    <>
                      <hr className='my-8' />
                      <div>
                        <div className='flex flex-col gap-2'>
                          <h3 className='font-medium text-base text-neutral-900'>
                            Your Office Address
                          </h3>
                          <p className='font-medium text-sm text-[#959DA7]'>
                            Please provide the address of your business&apos;s
                            office
                          </p>
                        </div>
                        <RadioGroup
                          defaultValue='homeAddress'
                          className='flex flex-col'
                        >
                          <Card className='flex-1 border mt-6'>
                            <div className='flex items-center gap-6 h-[4.75rem] p-4 focus-within:border-blue-light focus-within:shadow-[0_0_0_4px_rgba(96,165,250,0.1)]'>
                              <div className='flex items-center justify-between'>
                                <RadioGroupItem
                                  value='homeAddress'
                                  className='form-radio'
                                />
                              </div>
                              <div className='flex flex-col gap-2 justify-center text-sm'>
                                <h2 className='text-neutral-900 text-sm font-semibold'>
                                  Same as home address
                                </h2>
                                <p className='text-[#66717F]'>
                                  No. 3 Yabaleft, Surulere, Iyana-Ipaja
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div className='flex items-center gap-6 h-[4.75rem] p-4 focus-within:border-blue-light focus-within:shadow-[0_0_0_4px_rgba(96,165,250,0.1)]'>
                              <div className='flex items-center justify-between'>
                                <RadioGroupItem
                                  value='differentAddress'
                                  className='form-radio'
                                />
                              </div>
                              <div className='flex flex-col gap-2 justify-center text-sm'>
                                <h2 className='text-neutral-900 text-sm font-semibold'>
                                  Use a different address
                                </h2>
                              </div>
                            </div>
                          </Card>
                        </RadioGroup>
                      </div>
                    </>
                  )}
                </>
              </div>
            ) : (
              <div className='space-y-6'>
                <h2 className='text-lg font-medium'>Member list</h2>

                <div className='space-y-4'>
                  {/* <Card className='w-full h-[8.75rem] bg-neutral-50 border border-neutral-200 overflow-hidden'>
                    <div className='w-full h-[3.75rem] px-6 flex items-center justify-between border-b border-neutral-200'>
                      <span className='text-sm text-gray-500'>Member One</span>
                      <span className='flex items-center gap-6'>
                        <Pencil className='h-4 w-4' />
                        <Trash2 className='h-4 w-4' />
                      </span>
                    </div>
                    <div className='w-full h-[5rem] px-6 flex items-center gap-8 bg-white'>
                      <div className='w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center'>
                        MM
                      </div>
                      <div className='flex flex-col'>
                        <span className='font-medium'>Martin Mark</span>
                        <span className='text-sm text-gray-500'>
                          No. 2, Yaba Close, Surulere Lagos
                        </span>
                      </div>
                    </div>
                  </Card> */}

                  {members.map((member) => (
                    <Card
                      key={member.id}
                      className='w-full h-[8.75rem] bg-neutral-50 border border-neutral-200 overflow-hidden'
                    >
                      <div className='w-full h-[3.75rem] px-6 flex items-center justify-between border-b border-neutral-200'>
                        <span className='text-sm text-gray-500'>
                          Member Details
                        </span>
                        <span className='flex items-center gap-6'>
                          <button className='hover:text-blue-600 transition-colors'>
                            <Pencil className='h-4 w-4' />
                          </button>
                          <button
                            className='hover:text-red-600 transition-colors'
                            onClick={() => removeMember(member.id)}
                          >
                            <Trash2 className='h-4 w-4' />
                          </button>
                        </span>
                      </div>
                      <div className='w-full h-[5rem] px-6 flex items-center gap-8 bg-white'>
                        <div className='w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center'>
                          {getInitials(member.firstName, member.lastName)}
                        </div>
                        <div className='flex flex-col'>
                          <span className='font-medium'>
                            {`${member.firstName} ${member.lastName}`}
                          </span>
                          <span className='text-sm text-gray-500'>
                            {getFullAddress(member)}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}

                  <span
                    className='w-full h-16 flex items-center justify-center gap-2 bg-neutral-50 border border-neutral-300 rounded-lg text-blue-base text-sm cursor-pointer'
                    onClick={openModal}
                  >
                    <span className='text-lg'>+</span>
                    Add company member
                  </span>
                </div>
              </div>
            )}

            <div className='mt-8 flex justify-between'>
              <Button variant='outline' onClick={handleBack}>
                Go Back
              </Button>
              <Button
                onClick={handleNext}
                className='bg-blue-base px-7 hover:bg-blue-600'
              >
                Next
              </Button>
            </div>
          </Card>
          <FAQ />
        </div>
        <div className='flex-1'>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
