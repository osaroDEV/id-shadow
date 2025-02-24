'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, DownloadIcon } from '@/app/components/icons/Icons';

import useModalStore from '../../../../lib/store/useModalStore';
import Link from 'next/link';

export default function InvoiceDetails() {
  return (
    <div className='w-full p-8 flex flex-col gap-5'>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link href='/dashboard_/order-history'>
            <ArrowLeft />
          </Link>
          <h1 className='text-sm font-medium'>Back to Order History</h1>
        </div>
      </div>
      <div className='w-[50.9375rem] h-[47.1875rem] p-8 bg-white rounded-xl'>
        <div className='mx-auto max-w-3xl bg-white rounded-lg shadow-sm p-8'>
          <div className='flex justify-between items-start mb-8'>
            <div>
              <h1 className='text-xl font-semibold text-gray-700'>INVOICE</h1>
              <div className='mt-4 space-y-1'>
                <div className='grid grid-cols-2 gap-4'>
                  <span className='text-sm text-gray-500'>Invoice number</span>
                  <span className='text-sm'>#12137620</span>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <span className='text-sm text-gray-500'>Invoice issued</span>
                  <span className='text-sm'>03-12-2024</span>
                </div>
              </div>
            </div>
            <Badge
              variant='secondary'
              className='bg-green-100 text-green-700 hover:bg-green-100'
            >
              Paid
            </Badge>
          </div>

          <div className='flex justify-between items-center mb-12'>
            <div>
              <span className='text-2xl font-semibold'>₦122,000.00</span>
              <span className='text-gray-500 ml-2'>Paid January 12, 2025</span>
            </div>
            <Button
              variant='outline'
              className='text-blue-600 hover:text-blue-700'
            >
              <DownloadIcon />
              Save Invoice
            </Button>
          </div>
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <div>
              <div className='flex items-center gap-2 mb-4'>
                <div className='h-8 w-8'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='h-8 w-8'
                  >
                    <path d='M12 4L20 8L12 12L4 8L12 4Z' />
                    <path
                      d='M20 8V16L12 20L4 16V8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <span className='font-semibold'>idara</span>
              </div>
              <div className='text-sm text-gray-500 space-y-1'>
                <p>3025, Agbalumo drive</p>
                <p>Houston, Texas</p>
                <p>United States of America</p>
              </div>
            </div>
            <div>
              <h3 className='font-medium mb-4'>Billed to</h3>
              <div className='text-sm text-gray-500 space-y-1'>
                <p>Apple PLC</p>
                <p>234, Iyepa jopa road, Isaja</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <div className='grid grid-cols-2 mb-4'>
              <h3 className='font-medium'>Invoice Item</h3>
              <h3 className='font-medium text-right'>Amount</h3>
            </div>
            <div className='grid grid-cols-2 text-sm mb-4 pb-4 border-b'>
              <span>Registered Agent Renewal Fee</span>
              <span className='text-right'>₦122,000.00</span>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='grid grid-cols-2 text-sm'>
              <span className='text-gray-500'>Sub Total</span>
              <span className='text-right'>₦122,000.00</span>
            </div>
            <div className='grid grid-cols-2 text-sm'>
              <span className='text-gray-500'>VAT (7.5%)</span>
              <span className='text-right'>₦122,000.00</span>
            </div>
            <div className='grid grid-cols-2 text-sm font-medium pt-2 border-t'>
              <span>Total</span>
              <span className='text-right'>₦122,000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
