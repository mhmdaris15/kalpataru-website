import { create } from 'zustand';

type UIState = {
  /** Mobile drawer / nav menu open */
  isNavOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;

  /** Reservation modal open */
  isReservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;

  /** Currently selected dish for the menu page detail panel */
  activeDishId: string | null;
  setActiveDish: (id: string | null) => void;

  /** Active menu category id on the Menu page */
  activeCategory: string;
  setActiveCategory: (id: string) => void;

  /** Initial loading screen done */
  hasLoaded: boolean;
  markLoaded: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((s) => ({ isNavOpen: !s.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),

  isReservationOpen: false,
  openReservation: () => set({ isReservationOpen: true }),
  closeReservation: () => set({ isReservationOpen: false }),

  activeDishId: null,
  setActiveDish: (id) => set({ activeDishId: id }),

  activeCategory: 'mains',
  setActiveCategory: (id) => set({ activeCategory: id }),

  hasLoaded: false,
  markLoaded: () => set({ hasLoaded: true }),
}));
