import { create } from 'zustand'
import type { SelectedProduct, OrderItem } from "@/types";

type Store = {
  order: OrderItem[];
  isOrderDrawerOpen: boolean;
  toggleOrderDrawer: () => void;
  addItem: (product: SelectedProduct) => void
}

export const useOrderStore = create<Store>()((set, get) => ({
  order: [],
  isOrderDrawerOpen: false,
  toggleOrderDrawer: () => {
    set((state) => ({ isOrderDrawerOpen: !state.isOrderDrawerOpen }))
  },
  addItem: (product) => {
    const currentOrder = get().order;
    const newItem = {
      ...product,
      quantity: 1,
      subtotal: product.price,
    }

    const order = [...currentOrder, newItem]
    set({ order })

    console.log(get().order)
  }
}))