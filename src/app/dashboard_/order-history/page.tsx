'use client';

import {
  Receipt,
  ScrollOrderHistory,
  SortAscending,
  CaretDown,
} from '@/app/components/icons/Icons';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

interface Invoice {
  id: string;
  service: string;
  invoiceDate: string;
  dueDate: string;
  total: number;
  status: 'Renewed' | 'Unpaid' | 'Paid';
}

interface OrderHistory {
  id: string;
  paymentID: string;
  service: string;
  receipt: React.ReactNode;
  paidOn: string;
  total: number;
}

const initialData: Invoice[] = [
  {
    id: '00139378',
    service: 'Business registration',
    invoiceDate: '4-12-2024',
    dueDate: '12-02-2025',
    total: 122000,
    status: 'Renewed',
  },
  {
    id: '00139377',
    service: 'TAX documentation - year 2024',
    invoiceDate: '4-12-2024',
    dueDate: '12-02-2025',
    total: 122000,
    status: 'Unpaid',
  },
  {
    id: '00139379',
    service: 'TAX documentation - year 2024',
    invoiceDate: '4-12-2024',
    dueDate: '12-02-2025',
    total: 122000,
    status: 'Paid',
  },
];

const initialHistoryData: OrderHistory[] = [
  {
    id: '00139373',
    paymentID: 'DE9273502',
    service: 'Business registration',
    receipt: <Receipt />,
    paidOn: '12-02-2024',
    total: 122000,
  },
  {
    id: '00139371',
    paymentID: 'DE9273501',
    service: 'TAX documentation - year 2024',
    receipt: <Receipt />,
    paidOn: '12-02-2024',
    total: 122000,
  },
];

type SortConfig = {
  key: keyof Invoice | null;
  direction: 'asc' | 'desc';
};

type SortConfigHistory = {
  key: keyof OrderHistory | null;
  direction: 'asc' | 'desc';
};

export default function OrderHistory() {
  const [data, setData] = useState<Invoice[]>(initialData);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc',
  });
  const [search, setSearch] = useState('');

  const [dataHistory, setDataHistory] =
    useState<OrderHistory[]>(initialHistoryData);
  const [sortConfigHistory, setSortConfigHistory] = useState<SortConfigHistory>(
    {
      key: null,
      direction: 'asc',
    }
  );
  const [searchHistory, setSearchHistory] = useState('');

  const handleSort = (key: keyof Invoice) => {
    setSortConfig((current) => {
      if (current.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });

    setData((current) =>
      [...current].sort((a, b) => {
        if (sortConfig.direction === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        }
        return a[key] < b[key] ? 1 : -1;
      })
    );
  };

  const handleSortHistory = (key: keyof OrderHistory) => {
    setSortConfigHistory((current) => {
      if (current.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });

    setDataHistory((current) =>
      [...current].sort((a, b) => {
        if (sortConfigHistory.direction === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        }
        return a[key] < b[key] ? 1 : -1;
      })
    );
  };

  const filteredData = data.filter((invoice) =>
    Object.values(invoice).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const filteredDataHistory = dataHistory.filter((order) =>
    Object.values(order).some((value) =>
      value.toString().toLowerCase().includes(searchHistory.toLowerCase())
    )
  );

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'Renewed':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      case 'Unpaid':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20';
      case 'Paid':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
    }
  };

  return (
    <div className='mx-auto w-[67.5rem]'>
      <div className='w-full h-[27.875rem] rounded-xl'>
        <div className='w-full flex items-center justify-between mb-8'>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-gray-200 rounded-base'>
              <ScrollOrderHistory />
            </div>
            <h1 className='text-2xl font-semibold'>Order History</h1>
          </div>
        </div>
        <Tabs
          defaultValue='invoices'
          className='w-full h-auto bg-white rounded-xl p-6'
        >
          <div className='flex items-center justify-between mb-4'>
            <div className='flex space-x-4'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='order-history'>Order History</TabsTrigger>
                <TabsTrigger value='invoices'>Invoices</TabsTrigger>
              </TabsList>
            </div>

            <div className='flex items-center space-x-2'>
              <Input
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-[200px]'
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' className='ml-2'>
                    <span>
                      <SortAscending />
                    </span>{' '}
                    <span>Sort by</span>{' '}
                    <span>
                      <CaretDown />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem onClick={() => handleSort('invoiceDate')}>
                    Date
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSort('total')}>
                    Amount
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSort('status')}>
                    Status
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <TabsContent value='invoices'>
            <div className='border rounded-lg'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      onClick={() => handleSort('id')}
                      className='cursor-pointer'
                    >
                      Invoice ID
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort('service')}
                      className='cursor-pointer'
                    >
                      Service
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort('invoiceDate')}
                      className='cursor-pointer'
                    >
                      Invoice date
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort('dueDate')}
                      className='cursor-pointer'
                    >
                      Due date
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort('total')}
                      className='cursor-pointer'
                    >
                      Total
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort('status')}
                      className='cursor-pointer'
                    >
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((invoice) => (
                    <TableRow key={`${invoice.id}-${invoice.service}`}>
                      <TableCell className='font-medium'>
                      <Link href='/dashboard_/invoice-details'>{invoice.id}</Link>
                      </TableCell>
                      <TableCell>{invoice.service}</TableCell>
                      <TableCell>{invoice.invoiceDate}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>₦{invoice.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${getStatusColor(invoice.status)}`}
                          variant='secondary'
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value='order-history'>
            <div className='border rounded-lg'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      onClick={() => handleSortHistory('paymentID')}
                      className='cursor-pointer'
                    >
                      Payment ID
                    </TableHead>
                    <TableHead
                      onClick={() => handleSortHistory('id')}
                      className='cursor-pointer'
                    >
                      Invoice ID
                    </TableHead>
                    <TableHead
                      onClick={() => handleSortHistory('service')}
                      className='cursor-pointer'
                    >
                      Service
                    </TableHead>
                    <TableHead className='cursor-pointer'>Receipt</TableHead>
                    <TableHead
                      onClick={() => handleSortHistory('paidOn')}
                      className='cursor-pointer'
                    >
                      Paid On
                    </TableHead>
                    <TableHead
                      onClick={() => handleSortHistory('total')}
                      className='cursor-pointer'
                    >
                      Amount Paid
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDataHistory.map((order) => (
                    <TableRow key={`${order.id}-${order.service}`}>
                      <TableCell className='font-medium'>
                        {order.paymentID}
                      </TableCell>
                      <TableCell><Link href='/dashboard_/invoice-details'>{order.id}</Link></TableCell>
                      <TableCell>{order.service}</TableCell>
                      <TableCell>{order.receipt}</TableCell>
                      <TableCell>{order.paidOn}</TableCell>
                      <TableCell>₦{order.total.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
