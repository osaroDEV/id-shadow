import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Page = () => {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/2'>
        <RegisterForm />
        <div className='w-[60%] mx-auto mt-24 flex items-center justify-between text-sm'>
          <div className='text-[#A0AEC0]'>
            &copy; 2023 Idara . Alrights reserved.
          </div>
          <div className='text-blue-darker'>Terms & Conditions</div>
          <div className='text-blue-darker'>Privacy Policy</div>
        </div>
      </div>
      <div className='w-1/2 p-[3.625rem] bg-gradient-to-b from-[#1A202C] to-[#2D3748] flex flex-col justify-between'>
        <Link className='font-thin text-2xl' href='/'>
          <Image
            src='/images/idara-logo-white.png'
            alt='idara logo'
            width={110}
            height={21.6}
          />
        </Link>
        <h2 className='text-[4rem] text-white font-semibold leading-tight'>
          Building a business is hard, opening one shouldn&apos;t be.
        </h2>
      </div>
    </div>
  );
};

export default Page;
