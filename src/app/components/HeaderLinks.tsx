'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import {  AddressBookIconB, ArticleIconB, BusinessIconB, PackageIcon, ReceiptIconB } from './icons/Icons';

interface HeaderProps {
  className?: string;
}

const HeaderLinks = ({ className }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <div className={cn('flex items-center justify-between py-4 px-6', className)}>
      <div className='flex items-center space-x-8'>
        <nav className='flex items-center space-x-6 list-none'>
          <HeaderLink
            href='/onboarding/business-type'
            active={pathname === '/onboarding/business-type'}
          >
            <span className="flex items-center gap-2">
              {pathname === '/onboarding/business-type' && <BusinessIconB />}
              Business Type
            </span>
          </HeaderLink>
          <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <HeaderLink
            href='/onboarding/contact'
            active={pathname === '/onboarding/contact'}
          >
            <span className="flex items-center gap-2">
              {pathname === '/onboarding/contact' && <AddressBookIconB />}
              Contact Details
            </span>
          </HeaderLink>
          <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <HeaderLink
            href='/onboarding/business-details'
            active={pathname === '/onboarding/business-details'}
          >
            <span className="flex items-center gap-2">
              {pathname === '/onboarding/business-details' && <BusinessIconB />}
              Business Details
            </span>
          </HeaderLink>
          <div className="flex -space-x-2">
          <BreadcrumbSeparator />
          <BreadcrumbSeparator />
          </div>
          <HeaderLink
            href='/onboarding/addons'
            active={pathname === '/onboarding/addons'}
          >
            <span className="flex items-center gap-2">{pathname === '/onboarding/addons' && <PackageIcon />}Addons</span>
          </HeaderLink>
          <div className="flex -space-x-2">
          <BreadcrumbSeparator />
          <BreadcrumbSeparator />
          </div>
          <HeaderLink
            href='/onboarding/summary'
            active={pathname === '/onboarding/summary'}
          >
            <span className="flex items-center gap-2">{pathname=== '/onboarding/summary' && <ArticleIconB />}Summary</span>
          </HeaderLink>
          <div className="flex -space-x-2">
          <BreadcrumbSeparator />
          <BreadcrumbSeparator />
          </div>
          <HeaderLink
            href='/onboarding/payment'
            active={pathname === '/onboarding/payment'}
          >
            <span className="flex items-center gap-2">{pathname === '/onboarding/payment' && <ReceiptIconB />}Payment</span>
          </HeaderLink>
        </nav>
      </div>
    </div>
  );
}

export default HeaderLinks

interface HeaderLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

function HeaderLink({ href, active, children }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-gray-900',
        active ? 'text-blue-600' : 'text-gray-500'
      )}
    >
      {children}
    </Link>
  );
}





