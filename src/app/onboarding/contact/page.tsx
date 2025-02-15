'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOnboardingStore } from '../../../../lib/store/onboarding';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import OrderSummary from '@/app/components/OrderSummary';
import { AddressBookIcon } from '@/app/components/icons/Icons';

export default function ContactPage() {
  const router = useRouter();
  const { contactDetails, setContactDetails } = useOnboardingStore();

  const handleNext = () => {
    router.push('/onboarding/business-details');
  };

  const handleBack = () => {
    router.push('/onboarding/business-type');
  };

  return (
    <div className='mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <button className='p-2 bg-gray-200 rounded-base'>
            <AddressBookIcon />
          </button>
          <h1 className='text-2xl font-bold text-gray-900'>Contact Details</h1>
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='flex-[2]'>
          <Card className='p-6'>
            <div className='flex items-center mb-4'>
              <h1 className='text-sm font-semibold mr-4 text-neutral-900'>
                User Info
              </h1>
              <div className='flex-grow h-px bg-neutral-200'></div>
            </div>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    id='firstName'
                    type='text'
                    value={contactDetails.firstName}
                    onChange={(e) =>
                      setContactDetails({ firstName: e.target.value })
                    }
                    placeholder='Enter First Name'
                    className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                  />
                </div>
                <div className='flex-1'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    id='lastName'
                    type='text'
                    value={contactDetails.lastName}
                    onChange={(e) =>
                      setContactDetails({ lastName: e.target.value })
                    }
                    placeholder='Enter Last Name'
                    className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                  />
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input
                    id='email'
                    type='email'
                    value={contactDetails.email}
                    onChange={(e) =>
                      setContactDetails({ email: e.target.value })
                    }
                    placeholder='you@example.com'
                    className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                  />
                </div>
                <div className='flex-1'>
                  <Label htmlFor='phone'>Phone Number</Label>
                  <PhoneInput
                    international
                    defaultCountry='NG'
                    value={contactDetails.phone}
                    onChange={(value) =>
                      setContactDetails({ phone: value || '' })
                    }
                    className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none h-[2.5rem]'
                  />
                  <div className='flex items-center space-x-2 mt-4'>
                    <Checkbox id='terms' />
                    <label
                      htmlFor='terms'
                      className='text-[.75rem] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      I consent to receiving text messages and phone calls from Idara
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className='flex items-center mb-4'>
                  <h1 className='text-sm font-semibold mr-4 text-neutral-900'>
                    User Address
                  </h1>
                  <div className='flex-grow h-px bg-neutral-200'></div>
                </div>
                <Label htmlFor='address'>Street Address</Label>
                <Input
                  id='address'
                  value={contactDetails.address}
                  onChange={(e) =>
                    setContactDetails({ address: e.target.value })
                  }
                  placeholder='Enter Address'
                />
              </div>

              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Label htmlFor='city'>Country</Label>
                  <Select
                    value={contactDetails.country}
                    onValueChange={(value) =>
                      setContactDetails({ country: value })
                    }
                  >
                    <SelectTrigger id='country' className='bg-background'>
                      <SelectValue placeholder='Select Country' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='nigeria'>Nigeria</SelectItem>
                      <SelectItem value='ghana'>Ghana</SelectItem>
                      <SelectItem value='kenya'>Kenya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex-1'>
                  <Label htmlFor='state'>State</Label>
                  <Select
                    value={contactDetails.state}
                    onValueChange={(value) =>
                      setContactDetails({ state: value })
                    }
                  >
                    <SelectTrigger id='state' className='bg-background'>
                      <SelectValue placeholder='Select State' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='lagos'>Lagos</SelectItem>
                      <SelectItem value='abuja'>Abuja</SelectItem>
                      <SelectItem value='calabar'>Calabar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Label htmlFor='city'>City</Label>
                  <Select
                    value={contactDetails.city}
                    onValueChange={(value) =>
                      setContactDetails({ city: value })
                    }
                  >
                    <SelectTrigger id='city' className='bg-background'>
                      <SelectValue placeholder='Select City' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='ikeja'>Ikeja</SelectItem>
                      <SelectItem value='mushin'>Mushin</SelectItem>
                      <SelectItem value='ikorodu'>Ikorodu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex-1'>
                  <Label htmlFor='state'>Zip Code</Label>
                  <Input
                    id='state'
                    value={contactDetails.zipCode}
                    onChange={(e) =>
                      setContactDetails({ zipCode: e.target.value })
                    }
                    placeholder='12345'
                    className='mt-2 border border-gray-300 rounded-md p-2 focus:border-blue-light focus:shadow-custom-combined focus-visible:outline-none'
                  />
                </div>
              </div>
            </div>

            <div className='mt-8 flex justify-between'>
              <Button variant='outline' onClick={handleBack}>
                Go Back
              </Button>
              <Button
                onClick={handleNext}
                className='bg-blue-base px-7 hover:bg-blue-600'
              >
                Next
              </Button>
            </div>
          </Card>
        </div>
        <div className='flex-1'>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
