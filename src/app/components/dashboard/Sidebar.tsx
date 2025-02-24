import Link from 'next/link';
import {
  RvysionIcon,
  CaretUpDownIcon,
  QueueIcon,
  BusinessDashboardIcon,
  ScrollDashboardIcon,
  FilesDashboardIcon,
  ToolboxDashboardIcon,
  SettingsIcon,
} from '../icons/Icons';

const Sidebar = () => {
  return (
    <div className='xl:w-[13.5rem] xxl:w-[17.5rem] xxl:h-[62.3125rem] bg-white border border-[#EDEDEE] relative'>
      <div className='w-full flex justify-between items-center px-6 h-16 border-b border-[#EDEDEE]'>
        <div className='flex items-center gap-1'>
          <RvysionIcon />
          <span className='text-sm text-neutral-900'>Rvysion</span>
        </div>
        <CaretUpDownIcon />
      </div>
      <div className='xl:p-3 xxl:p-6'>
        <div className='flex flex-col items-center gap-3'>
          <h3 className='text-[#959DA7] text-xs font-semibold self-start'>
            ACTIONS
          </h3>
          <div>
            <div className='xl:w-[11.5rem] xxl:w-[14.5rem] h-9 bg-[#E9EEFF] rounded-[.5rem] flex items-center justify-around xl:px-1 xxl:px-3'>
              <QueueIcon />
              <span className='text-[#2256FF] xl:text-xs xxl:text-sm font-semibold'>
                Recommendations
              </span>
              <span className='flex items-center justify-center bg-[#9A3413] xl:w-[1.167rem] xxl:w-7 xl:h-[0.833rem] xxl:h-5 rounded-[.5rem] text-white xl:text-[.5rem] xxl:text-xs font-medium'>
                2
              </span>
            </div>
          </div>
        </div>
        <hr className='border border-neutral-200 my-6' />
        <div className='flex flex-col items-center gap-3'>
          <h3 className='text-[#959DA7] text-xs font-semibold self-start'>
            COMPANY
          </h3>
          <nav>
            <ul>
              <Link className='flex items-center gap-2 py-2 xl:px-2 xxl:px-5' href='/dashboard_/company-info'>
                <BusinessDashboardIcon />
                <span className='xl:text-xs xxl:text-sm text-neutral-900 font-semibold'>
                  Company Info
                </span>
              </Link>
              <Link className='flex items-center gap-2 py-2 xl:px-2 xxl:px-5' href='/dashboard_/order-history'>
                <ScrollDashboardIcon />
                <span className='xl:text-xs xxl:text-sm text-neutral-900 font-semibold'>
                  Order history/ Reciepts{' '}
                </span>
              </Link>
              <Link className='flex items-center gap-2 py-2 xl:px-2 xxl:px-5' href='/dashboard_/compliance-documents'>
                <FilesDashboardIcon />
                <span className='xl:text-xs xxl:text-sm text-neutral-900 font-semibold'>
                  Compliance Documents
                </span>
              </Link>
              <Link className='flex items-center gap-2 py-2 xl:px-2 xxl:px-5' href='/dashboard_/services'>
                <ToolboxDashboardIcon />
                <span className='xl:text-xs xxl:text-sm text-neutral-900 font-semibold'>
                  Services
                </span>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className='absolute bottom-10 flex items-center gap-2 py-2 px-5'>
        <SettingsIcon />
        <span className='text-sm text-neutral-900 font-semibold'>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
