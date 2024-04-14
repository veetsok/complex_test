import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStoreItems {
  id: number;
  title: string;
  price: number;
  quantity: number;
}
export interface CartStore {
  items: CartStoreItems[];
  total: number;
}
export interface ActionsCartStore {}

const useCartStore = create<CartStore & ActionsCartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
