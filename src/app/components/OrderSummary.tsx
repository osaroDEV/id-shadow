import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

import { useOnboardingStore } from '../../../lib/store/onboarding';

const OrderSummary = () => {
  const { businessType } = useOnboardingStore();

  return (
    <Card className='p-6 border-t-[.375rem] border-t-blue-dark relative'>
      <div className='space-y-8'>
        <h2 className='text-lg font-semibold text-blue-dark'>Order Summary</h2>
        <hr className='border-dashed border-gray-300' />
        <div className='space-y-8'>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>Business Type</p>
            <span className='uppercase'>{businessType.designator}</span>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>Full Service Package</p>
            <span>₦100,000</span>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>New Account Creation</p>
            <span>
              <Check className='text-blue-dark' />
            </span>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>24/7 Customer Support</p>
            <span>
              <Check className='text-blue-dark' />
            </span>
          </div>
        </div>
      </div>
      <hr className='border-dashed border-gray-300 mt-56' />
      <div className='flex justify-between mt-8 bottom-20'>
        <p className='text-sm text-gray-600'>Total</p>
        <span className='ml-auto'>₦100,000</span>
      </div>
    </Card>
  );
};

export default OrderSummary;
