'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { CloseIcon } from './icons/Icons';
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
import DocumentUpload from './DocumentUpload';
import useModalStore from '../../../lib/store/useModalStore';

const AddCompanyMemberThree = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyRep, setCompanyRep] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');

  const { closeModal, prevStep } = useModalStore();

  return (
    <div className='bg-[rgba(0,0,0,.3)] w-screen h-screen fixed top-0 left-0'>
      <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[45.25rem] h-[calc(100vh*.8)] bg-white border border-neutral-300 rounded-[.5rem] overflow-x-hidden overflow-y-scroll'>
        <div className='bg-neutral-50 w-full h-[3.5rem] flex items-center justify-between p-6'>
          <div>
            <span className='font-semibold'>Add Company Member</span>
          </div>
          <span onClick={closeModal}>
            <CloseIcon />
          </span>
        </div>
        <Card className='p-6 '>
          <div className='flex justify-center items-center w-full h-auto'>
            <div className='flex-1'>
              <Label htmlFor='companyName' className='text-sm font-medium'>
                Company Name
              </Label>
              <Input
                id='companyName'
                type='text'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder='Enter Company Name'
                className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
              />
            </div>
          </div>
          <hr className='m-[1rem_auto_1rem_auto] w-full border border-neutral-200' />

          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-1'>
                <Label htmlFor='city' className='text-sm font-medium'>
                  Country of registration
                </Label>
                <Select value={nationality} onValueChange={setNationality}>
                  <SelectTrigger id='country' className=''>
                    <SelectValue placeholder='Select Country' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='nigeria'>Nigeria</SelectItem>
                    <SelectItem value='ghana'>Ghana</SelectItem>
                    <SelectItem value='kenya'>Kenya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <hr className='m-[1rem_auto_1rem_auto] w-full border border-neutral-200' />
            <div className='flex-1'>
              <Label htmlFor='companyRep' className='text-sm font-medium'>
                Company representative
              </Label>
              <Input
                id='companyRep'
                type='text'
                value={companyRep}
                onChange={(e) => setCompanyRep(e.target.value)}
                placeholder='Enter Company Name'
                className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
              />
            </div>
            <hr className='m-[1rem_auto_1rem_auto] w-full border border-neutral-200' />
            <div>
              <div className='flex items-center mb-4'>
                <h3 className='text-base font-semibold mr-4 text-neutral-900'>
                  Address to use
                </h3>
              </div>
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
            <Button variant='outline' onClick={prevStep}>Go Back</Button>
            <Button className='bg-neutral-700 px-7 hover:bg-[rgba(0,0,0,.7)]' onClick={closeModal}>
              Add Company Member
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddCompanyMemberThree;
