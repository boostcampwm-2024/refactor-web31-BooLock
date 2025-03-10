import { create } from 'zustand';

type TCoachMarkStore = {
  isCoachMarkOpen: boolean;
  currentStep: number;
  openCoachMark: () => void;
  closeCoachMark: () => void;
  setCurrentStep: (step: number) => void;
};

export const useCoachMarkStore = create<TCoachMarkStore>()((set) => ({
  isCoachMarkOpen: true,
  currentStep: 0,
  openCoachMark: () => set({ isCoachMarkOpen: true, currentStep: 0 }),
  closeCoachMark: () => set({ isCoachMarkOpen: false, currentStep: 5 }),
  setCurrentStep: (step) => set({ currentStep: step }),
}));
