import { create } from 'zustand'
import type { SelectedProduct, OrderItem } from "@/types";

type Store = {
  order: OrderItem[];
  addItem: (product: SelectedProduct) => void
}

export const useOrderStore = create<Store>()((set, get) => ({
  order: [],
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