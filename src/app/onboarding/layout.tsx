'use client';

import Header from '../components/Header';
import useModalStore from '../../../lib/store/useModalStore';
import AddCompanyMemberOne from '../components/AddCompanyMemberOne';
import AddCompanyMemberTwo from '../components/AddCompanyMemberTwo';
import AddCompanyMemberThree from '../components/AddCompanyMemberThree';

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isModalOpen, currentStep, selectedMemberType } = useModalStore();
  return (
    <div className='min-h-screen bg-gray-50 relative'>
      <Header />
      <main className='container mx-auto lg:px-[8.125rem] lg:py-8'>
        {children}
        {isModalOpen && (
          <>
            {currentStep === 1 && <AddCompanyMemberOne />}
            {selectedMemberType === 'individual' && (
              <AddCompanyMemberTwo />
            )}
            {selectedMemberType === 'company' && (
              <AddCompanyMemberThree />
            )}
          </>
        )}
      </main>
    </div>
  );
}
