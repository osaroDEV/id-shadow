import Link from 'next/link';
import Image from 'next/image';
import { HouseLineIcon, EnvelopeOpenIcon } from '../icons/Icons';

const SubDashboardNavbar = () => {
  return (
    <div className='w-full flex items-center justify-between border border-b-[0.0625rem] border-b-neutral-300 px-8 h-[5rem] relative bg-white'>
      <div className='flex items-center gap-8'>
        <Link className='font-thin text-2xl' href='/'>
          <Image
            src='/images/idara-logo.png'
            alt={'idara logo'}
            width={76.8}
            height={21.6}
          />
        </Link>
        <div className='w-[0.0625rem] h-10 bg-black'></div>
        <Link href='/dashboard/home'>
          <span className='flex items-center gap-2'>
            <HouseLineIcon /> Dashboard
          </span>
        </Link>
        <span>/ Recommendations</span>
      </div>
      <div className='flex gap-8'>
        <span className='flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem] bg-[#F0F4F7]'>
          <EnvelopeOpenIcon />
        </span>
        <span className='flex items-center justify-center rounded-full w-[2.5rem] text-[#C2410B] h-[2.5rem] bg-[#FFEDD5]'>
          PA
        </span>

        <button className='text-sm text-white font-semibold bg-blue-base px-[1.25rem] rounded-md h-10'>
          Start a new company
        </button>
      </div>
    </div>
  );
};

export default SubDashboardNavbar;
