import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onboarding - Create Account',
  description: 'Complete your account setup',
};

export default function OnboardingPage() {
  redirect('/onboarding/business-type');
  return null;
}