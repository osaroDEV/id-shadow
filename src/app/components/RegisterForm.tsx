import { RegForm } from './RegForm'

const RegisterForm = () => {
  return (
    <div className='flex flex-col w-full h-auto items-center justify-center'>
      <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12'>
        
        <div className='w-full lg:w-[30rem] max-w-md mx-auto md:w-1/2 md:h-[38.5rem] flex flex-col gap-4 p-8 md:-order-1'>
          
          <h1 className='text-[#101828] text-xl lg:text-2xl xl:text-[2.5rem]'>
            Payment Successful
          </h1>
          <p className='text-sm'>
          Congratulations! Your payment was received, finish setting up your account to continue.
          </p>
          <RegForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
