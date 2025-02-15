import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  prog: number;
  setProg: (newProg: number) => void;
}

const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      prog: 0,
      setProg: (newProg) => set({ prog: newProg }),
    }),
    {
      name: 'progress-storage', // unique name for the storage
      getStorage: () => localStorage, // specify the storage to use
    }
  )
);

export default useProgressStore;