'use client';

import { ArrowDownIcon } from './icons/Icons';

const data = [
  {
    company: 'Amelia Group',
    state: 'Lagos',
    orderNumber: 'ID1230291',
    email: 'Anifowsekb@gmail.com',
    status: 'Active',
  },
  {
    company: 'Amelia Group',
    state: 'Lagos',
    orderNumber: 'ID1230291',
    email: 'Anifowsekb@gmail.com',
    status: 'Active',
  },
  {
    company: 'Command+R',
    state: 'Abuja',
    orderNumber: 'ID1230291',
    email: 'Anifowsekb@gmail.com',
    status: 'Active',
  },
];

export default function CompanyOverview() {
  return (
    <div className='w-full'>
      <div className='rounded-lg border bg-white overflow-hidden'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b bg-neutral-50'>
                <th className='px-6 py-4 text-left'>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                      <span className='font-medium text-neutral-500'>
                        Company
                      </span>
                      <span>
                        <ArrowDownIcon />
                      </span>
                    </div>
                  </div>
                </th>
                <th className='px-6 py-4 text-left'>
                  <span className='font-medium text-neutral-500'>State</span>
                </th>
                <th className='px-6 py-4 text-left'>
                  <span className='font-medium text-neutral-500'>
                    Order Number
                  </span>
                </th>
                <th className='px-6 py-4 text-left'>
                  <span className='font-medium text-neutral-500'>
                    Email Address
                  </span>
                </th>
                <th className='px-6 py-4 text-left'>
                  <span className='font-medium text-neutral-500'>Status</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className='border-b transition-colors hover:bg-gray-50'
                >
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-2'>
                      <span className='font-semibold text-neutral-900'>
                        {item.company}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4 font-semibold text-neutral-900'>
                    {item.state}
                  </td>
                  <td className='px-6 py-4 font-medium text-neutral-500'>
                    {item.orderNumber}
                  </td>
                  <td className='px-6 py-4 font-medium text-neutral-500'>
                    {item.email}
                  </td>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600'>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className='mt-8 space-y-4 md:hidden'>
        {data.map((item, index) => (
          <div key={index} className='rounded-lg border bg-white p-4 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>{item.company}</span>
              </div>
              <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600'>
                {item.status}
              </span>
            </div>
            <div className='mt-4 space-y-2'>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>State</span>
                <span className='text-sm'>{item.state}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Order Number</span>
                <span className='text-sm'>{item.orderNumber}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Email</span>
                <span className='text-sm'>{item.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
