import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  currentStep: number;
  selectedMemberType: string | null;
  isEditCompanyMemberModalOpen: boolean;
  openEditCompanyMemberModal: () => void;
  closeEditCompanyMemberModal: () => void;
  openModal: () => void;
  closeModal: () => void;
  nextStep: () => void;
  prevStep: () => void;
  selectMemberType: (type: string) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  isEditCompanyMemberModalOpen: false,
  currentStep: 1,
  selectedMemberType: null,
  openModal: () => {
    document.body.classList.remove('overflow-hidden');
    set({ isModalOpen: true, currentStep: 1 });
  },
  closeModal: () =>
    set({ isModalOpen: false, currentStep: 1, selectedMemberType: null }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  selectMemberType: (type: string) => set({ selectedMemberType: type }),
  openEditCompanyMemberModal: () => {
    document.body.classList.add('overflow-hidden');
    set({ isEditCompanyMemberModalOpen: true });
  },
  closeEditCompanyMemberModal: () => {
    document.body.classList.remove('overflow-hidden');
    set({ isEditCompanyMemberModalOpen: false });
  },
}));

export default useModalStore;
