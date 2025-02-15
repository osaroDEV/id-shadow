import Link from 'next/link';
import Image from 'next/image';
import HeaderLinks from '../components/HeaderLinks';
import { OnboardingProgress } from './OnboardingProgress';

const Header = () => {
  return (
    <div className='flex items-center justify-between border-b-2 px-8 h-[5rem] relative'>
      <span className='flex items-center gap-2'>
        <Link className='font-thin text-2xl' href='/'>
          <Image
            src='/images/idara-logo.png'
            alt={'idara logo'}
            width={76.8}
            height={21.6}
          />
        </Link>
      </span>
      <HeaderLinks />
      <button className='text-[.875rem] text-blue-base bg-blue-lighter rounded-md w-[4.8125rem] h-[2.5rem]'>
        Help
      </button>
      <OnboardingProgress />
    </div>
  );
};

export default Header;
