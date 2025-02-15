import clsx from 'clsx';
import { services } from '../../../lib/services';
import { ArrowRightIcon } from '../icons/Icons';

const OtherServices = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center flex-wrap gap-6 w-full'>
      {services.map((service) => (
        <div
          key={service.id}
          className='xl:w-[18.75rem]
          xxl:w-[21.6875rem] h-auto flex flex-col justify-center xl:p-5 xxl:p-8 border border-neutral-200 bg-white rounded-base gap-4'
        >
          <div
            className={clsx(
              'w-12 h-12 rounded-base place-self-start flex items-center justify-center',
              {
                'bg-[#41A472]': service.id === 1,
                'bg-[#F97315]': service.id === 2,
                'bg-[#4A74FF]': service.id === 3,
                'bg-[#EA580B]': service.id === 4,
                'bg-[#273242]': service.id === 5,
              }
            )}
          >
            <service.icon />
          </div>
          <section>
            <h3 className='text-sm text-neutral-900 font-semibold h-5'>
              {service.header}
            </h3>
            <p className='text-sm text-neutral-500 h-10'>{service.body}</p>
          </section>
          <hr className='border border-neutral-200 xl:mt-6' />
          <div className='h-6 flex items-center justify-between'>
            <span className='text-sm font-semibold text-neutral-900'>
              Learn More
            </span>
            <ArrowRightIcon />
          </div>
        </div>
      ))}
    </section>
  );
};

export default OtherServices;
