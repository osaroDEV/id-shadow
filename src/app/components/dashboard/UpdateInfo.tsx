'use client';
import { useState } from 'react';
import { CloseIcon } from '../icons/Icons';
import { Checkbox } from '@/components/ui/checkbox';
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
import DocumentUpload from '../DocumentUpload';

const UpdateInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <div className='bg-[rgba(0,0,0,.3)] w-screen h-screen absolute top-0 left-0'>
      <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[45.25rem] h-[calc(100vh*.8)] bg-white border border-neutral-300 rounded-[.5rem] overflow-x-hidden overflow-y-scroll'>
        <div className='bg-neutral-50 w-full h-[3.5rem] flex items-center justify-between p-6'>
          <div>
            <span className='font-semibold'>Update Director Information</span>
          </div>
          <CloseIcon />
        </div>
        <Card className='p-6 '>
          <div className='flex justify-center items-center w-full h-auto'>
            <div className='w-full flex items-center gap-2 h-[3rem] px-3 bg-neutral-50 rounded-[.5rem] mb-8'>
              <Checkbox />{' '}
              <span className='text-sm text-blue-base font-semibold'>
                Kabir Anifowose
              </span>
            </div>
          </div>

          <div className='flex items-center mb-4'>
            <h3 className='text-base font-semibold mr-4 text-neutral-900'>
              Individual Details
            </h3>
          </div>
          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-1'>
                <Label htmlFor='firstName' className='text-sm font-medium'>
                  First Name
                </Label>
                <Input
                  id='firstName'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='Enter First Name'
                  className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                />
              </div>
              <div className='flex-1'>
                <Label htmlFor='lastName' className='text-sm font-medium'>
                  Last Name
                </Label>
                <Input
                  id='lastName'
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Enter Last Name'
                  className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                />
              </div>
            </div>
            <div>
              <div className='flex items-center mb-4'>
                <h3 className='text-base font-semibold mr-4 text-neutral-900'>
                  Address to use
                </h3>
              </div>
              <hr className='m-[1rem_auto_1rem_auto] w-full border border-neutral-200' />
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
            <div className='flex gap-4'>
              <div className='flex-[1/2] w-[49%]'>
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
          </div>

          <DocumentUpload />
          <div className='w-[42.25rem] h-[6.3125rem] flex flex-col gap-2'>
            <h3 className='text-base font-semibold mr-4 text-neutral-900'>
              Equity
            </h3>
            <h4 className='text-sm font-medium text-neutral-500'>
              Percentage of Ownership
            </h4>
            <div className='w-1/2 h-[2.5rem] rounded-[.5rem] bg-neutral-50 flex items-center px-6'>
              10%
            </div>
          </div>
          <div className='mt-8 flex justify-between'>
            <button className='font-semibold rounded-base border border-neutral-300 px-7 h-10'>
              Back
            </button>
            <button className='bg-neutral-700 px-7 hover:bg-[rgba(0,0,0,.7)] text-white font-semibold rounded-base h-10'>
              Update
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpdateInfo;
