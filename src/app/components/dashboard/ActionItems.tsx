import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Card } from '@/components/ui/card';
import { CaretLeftIcon, CaretRightIcon } from '../icons/Icons';

const ActionItems = () => {
  const pathname = usePathname();

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const items = [
    {
      title: 'Upload signature',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
    {
      title: 'Renew annual year returns',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Make Payment',
    },
    {
      title: 'Make Payment',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
    {
      title: 'Make Payment',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
    {
      title: 'Make Payment',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
    {
      title: 'Make Payment',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
    {
      title: 'Make Payment',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
    {
      title: 'Make Payment',
      description:
        "You're required to upload signatures for members of the company for the C&C Form",
      deadline: '12/09/2024',
      action: 'Upload',
    },
  ];

  return (
    <div>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <section className='flex items-center gap-2'>
            <h2 className='text-xl font-semibold text-neutral-1000'>
              Action Items
            </h2>
            <span className='flex items-center justify-center bg-[#C2410B] w-7 h-5 rounded-[.5rem] text-white text-xs font-medium'>
              13
            </span>
          </section>

          <p className='text-sm font-medium text-neutral-500'>
            Important actions that require your attention
          </p>
        </div>
        <div
          className={clsx('flex gap-2', {
            inline: pathname === '/dashboard',
            hidden: pathname === '/dashboard_/recommendation',
          })}
        >
          <span
            onClick={() => scroll('left')}
            className='flex items-center justify-center rounded-full w-[2.25rem] h-[2.25rem] bg-white cursor-pointer border border-[#E2E4E9] active:bg-neutral-200'
          >
            <CaretLeftIcon />
          </span>
          <span
            onClick={() => scroll('right')}
            className='flex items-center justify-center rounded-full w-[2.25rem] h-[2.25rem] bg-white cursor-pointer border border-[#E2E4E9] active:bg-neutral-200'
          >
            <CaretRightIcon />
          </span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={clsx('flex gap-4', {
          'overflow-x-hidden scroll-smooth': pathname === '/dashboard',
          'flex-wrap': pathname === '/dashboard_/recommendation',
        })}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            className='flex-none w-80 border border-neutral-300 overflow-hidden'
          >
            <div className='w-full h-[3.4375rem] bg-neutral-100 border-b border-[#EDEFF0] p-4'>
              <h3 className='font-medium'>{item.title}</h3>
            </div>
            <div className='p-4 bg-white'>
              <p className='text-sm text-neutral-500 mb-4'>
                {item.description}
              </p>
              <hr className='m-[1.5rem_auto_.75rem_auto]' />
              <div className='flex justify-between items-center mt-auto h-10'>
                <div className='flex items-center text-xs h-full gap-3 ml-1'>
                  <span className='font-medium text-[#020617]'>Deadline: </span>
                  <span className='font-semibold text-[#C2540A]'>
                    {item.deadline}
                  </span>
                </div>
                <button className='h-full px-4 font-semibold text-neutral-700 rounded-base text-sm border border-neutral-300'>
                  {item.action}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActionItems;
