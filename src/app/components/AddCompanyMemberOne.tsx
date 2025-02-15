'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  BusinessIcon,
  CloseIcon,
  UserCirclePlusIcon,
  UserCirclePlusIconActive,
} from './icons/Icons';
import useModalStore from '../../../lib/store/useModalStore';

const AddCompanyMemberOne = () => {
  const { closeModal, nextStep, selectMemberType, selectedMemberType } =
    useModalStore();

    const [isSelected, setIsSelected] = useState(true);

  const handleSelectMemberType = (type: string) => {
    setIsSelected(prev => !prev);
    selectMemberType(type);
  };

  const handleNext = () => {
    if (selectedMemberType) {
      nextStep();
    } else {
      alert('Please select a member type before proceeding.');
    }
  };

  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[45.25rem] h-[27.9375rem] bg-white border border-neutral-300 rounded-[.5rem] overflow-hidden'>
      <div className='bg-neutral-50 w-full h-[3.5rem] flex items-center justify-between px-6'>
        <div>
          <span className='font-semibold'>Add Company Member</span>
        </div>
        <span onClick={closeModal}>
          <CloseIcon />
        </span>
      </div>
      <div className='flex justify-center items-center w-full h-[25rem]'>
        <div className='w-[38.25rem] h-[18rem] flex flex-col justify-between'>
          <div className='w-[38.25rem] h-[13.45rem] flex justify-between'>
            <div
              className='w-[48%] h-full p-4 rounded-[.5rem] flex flex-col justify-between border border-neutral-300 bg-neutral-50'
              onClick={() => handleSelectMemberType('individual')}
            >
              <button className='p-2 bg-blue-lighter rounded-base self-start'>
                {isSelected ? <UserCirclePlusIconActive /> : <UserCirclePlusIcon />}
              </button>
              <div>
                <h2 className='font-medium'>Individual</h2>
                <p className='text-sm text-[#273242]'>
                  Select if member is a person
                </p>
              </div>
            </div>
            <div
              className='w-[48%] h-full p-4 rounded-[.5rem] flex flex-col justify-between border border-neutral-300 bg-neutral-50'
              onClick={() => handleSelectMemberType('company')}
            >
              <button className='p-2 bg-blue-lighter rounded-base self-start'>
                <BusinessIcon />
              </button>
              <div>
                <h2 className='font-medium'>Company</h2>
                <p className='text-sm text-[#273242]'>
                  Select if member is a company
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-[2.5rem] flex justify-between'>
            <Button variant='outline' onClick={closeModal}>
              Back
            </Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompanyMemberOne;
