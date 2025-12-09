import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartCount: 0,

      setCartCount: (count) => set({ cartCount: count }),
      increase: () => set((state) => ({ cartCount: state.cartCount + 1 })),
      decrease: () => set((state) => ({ cartCount: state.cartCount - 1 })),
      reset: () => set({ cartCount: 0 }),
    }),
    {
      name: "cart-store",
    }
  )
);
