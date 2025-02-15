'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useOnboardingStore } from '../../../../lib/store/onboarding';
import OrderSummary from '@/app/components/OrderSummary';
import { BusinessIcon, WarningCircleIcon } from '@/app/components/icons/Icons';
import FAQ from '@/app/components/FAQ';

export default function BusinessTypePage() {
  const router = useRouter();
  const { businessType, setBusinessType } = useOnboardingStore();

  const handleNext = () => {
    router.push('/onboarding/contact');
  };

  return (
    <div className='mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-gray-200 rounded-base'>
            <BusinessIcon />
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>Business Type</h1>
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='flex flex-col gap-8 flex-[2]'>
          <Card className='p-6'>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Label className='' htmlFor='businessName'>
                    Business Name
                  </Label>
                  <Input
                    className='mt-2 focus:border-blue-light focus:shadow-[0_0_0_4px_rgba(96,165,250,0.1)]'
                    id='businessName'
                    value={businessType.businessName}
                    onChange={(e) =>
                      setBusinessType({ businessName: e.target.value })
                    }
                    placeholder='Business Name 1'
                  />
                </div>
                <div className='flex-1'>
                  <Label htmlFor='designator'>Designator</Label>
                  <Select
                    value={businessType.designator}
                    onValueChange={(value) =>
                      setBusinessType({ designator: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select a designator' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='plc'>PLC</SelectItem>
                      <SelectItem value='llc'>LLC</SelectItem>
                      <SelectItem value='corp'>Corp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor='description'>Business Description</Label>
                <Textarea
                  className='focus:border-blue-light focus:shadow-[0_0_0_4px_rgba(96,165,250,0.1)]'
                  id='description'
                  value={businessType.businessDescription}
                  onChange={(e) =>
                    setBusinessType({ businessDescription: e.target.value })
                  }
                  placeholder='What your company is about'
                />
                <p className='text-sm text-gray-500 mt-1'>
                  Must not be less than 100 characters
                </p>
              </div>

              <div className='bg-blue-50 p-4 rounded-lg'>
                <div className='flex items-center gap-2'>
                  <WarningCircleIcon />
                  <p className='text-sm text-neutral-900 font-medium'>
                    You need to pick an alternative business name to use if your
                    business name gets rejected
                  </p>
                </div>
              </div>

              <div className='mt-4 space-y-4'>
                <div className='flex gap-4'>
                  <div className='flex-1'>
                    <Label htmlFor='alternateName'>
                      Alternate Business Name
                    </Label>
                    <Input
                      className='mt-2 focus:border-blue-light focus:shadow-[0_0_0_4px_rgba(96,165,250,0.1)]'
                      id='alternateName'
                      value={businessType.alternateName}
                      onChange={(e) =>
                        setBusinessType({ alternateName: e.target.value })
                      }
                      placeholder='Enter alternate business name'
                    />
                  </div>

                  <div className='flex-1'>
                    <Label htmlFor='alternateDesignator'>
                      Alternate Designator
                    </Label>
                    <Select
                      value={businessType.alternateDesignator}
                      onValueChange={(value) =>
                        setBusinessType({ alternateDesignator: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select a designator' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='llc'>PLC</SelectItem>
                        <SelectItem value='inc'>LLC</SelectItem>
                        <SelectItem value='corp'>Corp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8 flex justify-between'>
              <Button variant='outline'>Cancel</Button>
              <Button
                onClick={handleNext}
                className='bg-blue-base px-7 hover:bg-blue-600'
              >
                Next
              </Button>
            </div>
          </Card>

          <FAQ />
        </div>

        <div className='flex-1'>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
