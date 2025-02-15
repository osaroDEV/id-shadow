'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '@/components/ui/input';
import { TickCircleIcon } from './icons/Icons';

const formSchema = z.object({
  referralCode: z.string().min(6, 'must be at least 6 characters'),
  password: z.string().min(6, 'must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'must be at least 6 characters'),
});

export function RegForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referralCode: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <Form {...form}>
      <form className='space-y-6 w-full'>
        <FormField
          control={form.control}
          name='referralCode'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referral Code</FormLabel>
              <FormControl>
                <Input placeholder='12345' type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='******' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder='******' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full h-auto text-sm text-[#176448] bg-[#EFFAF6] p-[1.25rem] border border-neutral-300 rounded-[.5rem]'>
          <div className='flex items-center gap-2 mb-4'>
            <TickCircleIcon />
            <span>The password must be at least 8 characters long</span>
          </div>
          <div className='flex items-center gap-2 mb-4'>
            <TickCircleIcon />
            <span>
              The password must include at least: One uppercase letter (A-Z),{' '}
            </span>
          </div>
          <div className='flex items-center gap-2 mb-4'>
          <TickCircleIcon />
            <span>
              One lowercase letter (a-z),One numeric digit (0-9), and One
              special character{' '}
            </span>
          </div>
        </div>

        <Button type='submit' className='w-full bg-blue-base rounded-sm'>
          Continue
        </Button>
      </form>
    </Form>
  );
}
