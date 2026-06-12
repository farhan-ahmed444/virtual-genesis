import { create } from 'zustand'

interface UIStore {
  isSearchOpen: boolean
  isMenuOpen: boolean
  isQuickViewOpen: boolean
  quickViewProduct: string | null
  isLoading: boolean
  openSearch: () => void
  closeSearch: () => void
  toggleMenu: () => void
  openMenu: () => void
  closeMenu: () => void
  openQuickView: (productId: string) => void
  closeQuickView: () => void
  setLoading: (loading: boolean) => void
}

export const useUIStore = create<UIStore>()((set) => ({
  isSearchOpen: false,
  isMenuOpen: false,
  isQuickViewOpen: false,
  quickViewProduct: null,
  isLoading: true,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  openQuickView: (productId) => set({ isQuickViewOpen: true, quickViewProduct: productId }),
  closeQuickView: () => set({ isQuickViewOpen: false, quickViewProduct: null }),
  setLoading: (loading) => set({ isLoading: loading }),
}))
