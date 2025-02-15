import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BusinessType {
  businessName: string;
  designator: string;
  businessDescription: string;
  alternateName: string;
  alternateDesignator: string;
}

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  nationality: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
  equity: string;
}

interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
}

interface BusinessDetails {
  industry: string;
  employees: string;
  revenue: string;
  description: string;
}

interface OnboardingState {
  businessType: BusinessType;
  contactDetails: ContactDetails;
  businessDetails: BusinessDetails;
  members: Member[];
  setBusinessType: (data: Partial<BusinessType>) => void;
  setContactDetails: (data: Partial<ContactDetails>) => void;
  setBusinessDetails: (data: Partial<BusinessDetails>) => void;
  addMember: (member: Omit<Member, 'id'>) => void;
  removeMember: (id: string) => void;
  reset: () => void;
}

const initialState = {
  businessType: {
    businessName: '',
    designator: '',
    businessDescription: '',
    alternateName: '',
    alternateDesignator: '',
  },
  contactDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
  },
  businessDetails: {
    industry: '',
    employees: '',
    revenue: '',
    description: '',
  },
  members: [],
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      ...initialState,
      setBusinessType: (data) =>
        set((state) => ({
          businessType: { ...state.businessType, ...data },
        })),
      setContactDetails: (data) =>
        set((state) => {
          const newState = {
            contactDetails: { ...state.contactDetails, ...data },
          };
          
          // If this is the first submission and there are no members yet,
          // add the contact details person as the first member
          if (state.members.length === 0) {
            const { firstName, lastName, address, state: memberState, city, zipCode } = newState.contactDetails;
            if (firstName && lastName) {
              return {
                ...newState,
                members: [{
                  id: crypto.randomUUID(),
                  firstName,
                  lastName,
                  nationality: 'nigerian', // Default value
                  address,
                  state: memberState,
                  city,
                  zipCode,
                  equity: '10%', // Default value
                }],
              };
            }
          }
          return newState;
        }),
      setBusinessDetails: (data) =>
        set((state) => ({
          businessDetails: { ...state.businessDetails, ...data },
        })),
      addMember: (member) =>
        set((state) => ({
          members: [...state.members, { ...member, id: crypto.randomUUID() }],
        })),
      removeMember: (id) =>
        set((state) => ({
          members: state.members.filter((member) => member.id !== id),
        })),
      reset: () => set(initialState),
    }),
    {
      name: 'onboarding-storage',
    }
  )
);