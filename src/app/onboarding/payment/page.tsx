'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AMExpressCardIcon,
  DiscoveryCardIcon,
  MasterCardIcon,
  PaystackIcon,
  ReceiptIcon,
  VisaCardIcon,
  WarningCircleIcon,
} from '@/app/components/icons/Icons';
import OrderSummary from '@/app/components/OrderSummary';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export default function SummaryPage() {
  // const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  //   const handleEdit = (section: string) => {
  //     console.log(`Edit ${section} clicked`);
  //   };

  return (
    <div className='max-auto'>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-gray-200 rounded-base'>
            <ReceiptIcon />
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>
            Billing Information
          </h1>
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-8 flex-[2]'>
          <Card className='w-full p-8 bg-white border border-neutral-200 rounded-xl flex lg:flex-col gap-4'>
            <div>
              <RadioGroup
                defaultValue='paystack'
                className='flex flex-col lg:flex-row gap-4'
              >
                <div className='w-[49%] h-[3.5rem] flex items-center justify-between rounded-base p-4 border border-neutral-200 focus-within:border-blue-30'>
                  <div className='flex items-center gap-2'>
                    <RadioGroupItem value='paystack' className='form-radio' />
                    <span>Paystack</span>
                  </div>
                  <PaystackIcon />
                </div>
                <div className='w-[49%] h-[3.5rem] flex items-center justify-between rounded-base p-4 border border-neutral-200 focus-within:border-blue-30'>
                  <div className='flex items-center gap-2'>
                    <RadioGroupItem value='stripe' className='form-radio' />
                    <span>Stripe</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <MasterCardIcon />
                    <VisaCardIcon />
                    <AMExpressCardIcon />
                    <DiscoveryCardIcon />
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div>
              <div className='flex items-center mb-4'>
                <h3 className='text-base font-semibold mr-4 text-neutral-900'>
                  Address to use
                </h3>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Label htmlFor='address' className='text-sm font-medium'>
                    Street Address
                  </Label>
                  <Input
                    id='address'
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder='Enter Address'
                    className='mt-2'
                  />
                </div>
                <div className='flex-1'>
                  <Label htmlFor='city' className='text-sm font-medium'>
                    City
                  </Label>
                  <Select>
                    <SelectTrigger id='city' className='bg-background'>
                      <SelectValue placeholder='Select City' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='ikeja'>Ikeja</SelectItem>
                      <SelectItem value='mushin'>Mushin</SelectItem>
                      <SelectItem value='ikorodu'>Ikorodu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex-1'>
                <Label htmlFor='state' className='text-sm font-medium'>
                  State
                </Label>
                <Select>
                  <SelectTrigger id='state' className='bg-background'>
                    <SelectValue placeholder='Select State' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='lagos'>Lagos</SelectItem>
                    <SelectItem value='abuja'>Abuja</SelectItem>
                    <SelectItem value='calabar'>Calabar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex-1'>
                <Label htmlFor='state' className='text-sm font-medium'>
                  Zip Code
                </Label>
                <Input
                  id='state'
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                  placeholder='12345'
                  className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                />
              </div>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <div className='flex items-center gap-2'>
                <WarningCircleIcon />
                <p className='text-sm text-[#001A29]'>
                  Billing information is only for record-keeping purposes and
                  will not include any payment details
                </p>
              </div>
            </div>
            <hr className='m-[1rem_auto_1rem_auto] w-full border border-neutral-200' />
            <div className='flex flex-col w-[49%]'>
              <h3 className='text-base font-semibold mr-4 text-neutral-900'>
                Do you have a referral code?
              </h3>

              <div className='flex items-center gap-4 mt-2'>
                <Input
                  type='text'
                  placeholder='Enter your referral code'
                  className='w-[70%]'
                />
                <button className='text-[.875rem] font-semibold text-blue-base hover:bg-blue-100 bg-blue-lighter rounded-md w-[4.875rem] h-[2.5rem]'>
                  Apply
                </button>
              </div>
            </div>
            <div className='mt-8 flex justify-between'>
              <Button variant='outline'>Go Back</Button>
              <Button className='bg-blue-base px-7 hover:bg-blue-100'>
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
