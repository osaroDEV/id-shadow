import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  currentStep: number;
  selectedMemberType: string | null;
  openModal: () => void;
  closeModal: () => void;
  nextStep: () => void;
  prevStep: () => void;
  selectMemberType: (type: string) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  currentStep: 1,
  selectedMemberType: null,
  openModal: () => set({ isModalOpen: true, currentStep: 1 }),
  closeModal: () => set({ isModalOpen: false, currentStep: 1, selectedMemberType: null }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  selectMemberType: (type: string) => set({ selectedMemberType: type }),
}));

export default useModalStore;