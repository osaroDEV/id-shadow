'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { CloseIcon } from './icons/Icons';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import PhoneInput from 'react-phone-number-input';
import useModalStore from '../../../lib/store/useModalStore';
import { useOnboardingStore } from '../../../lib/store/onboarding';

const EditCompanyMember = () => {
  const { closeEditCompanyMemberModal } = useModalStore();

  const { contactDetails, setContactDetails } = useOnboardingStore();

  const { addMember } = useOnboardingStore();
  const [formData, setFormData] = useState({
    email: '',
    nationality: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
    equity: '',
  });

  const handleSubmit = () => {
    // addMember(formData);
    closeEditCompanyMemberModal();
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className='bg-[rgba(0,0,0,.3)] w-screen h-screen fixed top-0 left-0 z-50'>
      <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[37.5rem] h-[38.4375rem] bg-white border border-neutral-300 rounded-[.5rem] overflow-x-hidden overflow-y-scroll'>
        <div className='bg-neutral-50 w-full h-[3.625rem] flex items-center justify-between p-6'>
          <div>
            <span className='font-semibold'>User Info</span>
          </div>
          <span onClick={closeEditCompanyMemberModal}>
            <CloseIcon />
          </span>
        </div>
        <Card className='p-6'>
          <div className='flex items-center w-full h-[3rem]'>
            <div className='w-1/2 h-full flex items-center gap-4'>
              <Image
                src='/images/contact.png'
                alt='contact person'
                width={40}
                height={40}
              />
              <Select value='Priscilla Ujomu'>
                <SelectTrigger id='country' className='bg-[#F8FAFC]'>
                  <SelectValue placeholder='Select Person' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Priscilla Ujomu'>
                    Priscilla Ujomu
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <hr className='m-[2rem_auto_2rem_auto] w-full border border-neutral-200' />
          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-1'>
                <Label htmlFor='email' className='text-sm font-medium'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder='Enter Email'
                  className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                />
              </div>
              <div className='flex-1'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  id='phone number'
                  type='text'
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder='Enter Phone Number'
                  className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                />
              </div>
            </div>
            <hr className='m-[2rem_auto_2rem_auto] w-full border border-neutral-200' />
            <div className='w-1/2 flex gap-4'>
              <div className='flex-1'>
                <Label htmlFor='country' className='text-sm font-medium'>
                  Country
                </Label>
                <Select
                  value={formData.nationality}
                  onValueChange={(value) => handleChange('nationality', value)}
                >
                  <SelectTrigger id='country' className=''>
                    <SelectValue placeholder='Select Country' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='nigerian'>Nigeria</SelectItem>
                    <SelectItem value='ghanian'>Ghana</SelectItem>
                    <SelectItem value='kenyan'>Kenya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <hr className='m-[2rem_auto_2rem_auto] w-full border border-neutral-200' />
            <div className='flex gap-4'>
              <div className='flex-[1/2] w-[49%]'>
                <Label htmlFor='address' className='text-sm font-medium'>
                  Street Address
                </Label>
                <Input
                  id='address'
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder='Enter Address'
                  className='mt-2'
                />
              </div>

              <div className='flex-1'>
                <Label htmlFor='state' className='text-sm font-medium'>
                  State
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleChange('state', value)}
                >
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
            </div>

            <div className='flex gap-4'>
              <div className='flex-[1/2] w-[49%]'>
                <Label htmlFor='city' className='text-sm font-medium'>
                  City
                </Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleChange('city', value)}
                >
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
              <div className='flex-[1/2] w-[49%]'>
                <Label htmlFor='state' className='text-sm font-medium'>
                  Zip Code
                </Label>
                <Input
                  id='state'
                  value={formData.zipCode}
                  onChange={(e) => handleChange('zipCode', e.target.value)}
                  placeholder='12345'
                  className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                />
              </div>
            </div>
          </div>
        </Card>
        <div className='flex justify-end h-24 p-8 overflow-hidden'>
          <div className='w-1/2 flex justify-between ml-[16.5rem]'>
            <Button variant='outline' onClick={closeEditCompanyMemberModal}>
              Cancel
            </Button>
            <Button
              className='bg-blue-base px-7 hover:bg-blue-600'
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompanyMember;
