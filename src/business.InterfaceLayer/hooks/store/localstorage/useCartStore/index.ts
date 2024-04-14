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
          let updatedItems;
          if (existItemIndex !== -1) {
            updatedItems = [...state.items];
            updatedItems[existItemIndex].quantity += newItem.quantity;
            updatedItems[existItemIndex].sum +=
              newItem.price * newItem.quantity;
          } else {
            const sum = newItem.price * newItem.quantity;
            updatedItems = [...state.items, { ...newItem, sum }];
          }

          // Calculate total sum
          const total = updatedItems.reduce((acc, item) => acc + item.sum, 0);

          return {
            items: updatedItems,
            total,
          };
        }),
      updateItemQuantity: (id, quantity) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? { ...item, quantity, sum: item.price * quantity }
              : item
          );

          // Calculate total sum
          const total = updatedItems.reduce((acc, item) => acc + item.sum, 0);

          return {
            items: updatedItems,
            total,
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

          // Calculate total sum
          const total = updatedItems.reduce((acc, item) => acc + item.sum, 0);

          return {
            items: updatedItems,
            total,
          };
        }),
      decreaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items
            .map((item) =>
              item.id === id && item.quantity > 0
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    sum: item.sum - item.price,
                  }
                : item
            )
            .filter((item) => item.quantity > 0); // Remove items with quantity <= 0

          // Calculate total sum
          const total = updatedItems.reduce((acc, item) => acc + item.sum, 0);

          return {
            items: updatedItems,
            total,
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
