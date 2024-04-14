import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStoreItems {
  id: number;
  title: string;
  price: number;
  quantity: number;
  sum: number;
}
export interface CartStore {
  items: CartStoreItems[];
  total: number;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}
export interface ActionsCartStore {
  addItem: (newItem: CartStoreItems) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore & ActionsCartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      phoneNumber: "",
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      addItem: (newItem) =>
        set((state) => {
          const existItemIndex = state.items.findIndex(
            (item) => item.id === newItem.id
          );
          if (existItemIndex !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existItemIndex].quantity += newItem.quantity;
            updatedItems[existItemIndex].sum +=
              newItem.price * newItem.quantity;
            return {
              items: updatedItems,
            };
          } else {
            const sum = newItem.price * newItem.quantity;
            return {
              items: [...state.items, { ...newItem, sum }],
            };
          }
        }),
      updateItemQuantity: (id, quantity) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? { ...item, quantity, sum: item.price * quantity }
              : item
          );
          return {
            items: updatedItems,
          };
        }),
      increaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: Number(item.quantity) + 1,
                  sum: item.sum + item.price,
                }
              : item
          );
          return {
            items: updatedItems,
          };
        }),
      decreaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id && item.quantity > 1
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  sum: item.sum - item.price,
                }
              : item
          );
          return {
            items: updatedItems,
          };
        }),
      clearCart: () => set({ items: [], phoneNumber: "", total: 0 }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
