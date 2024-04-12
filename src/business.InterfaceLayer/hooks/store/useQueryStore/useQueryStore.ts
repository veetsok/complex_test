//useQueryStore.ts
import { create } from "zustand";
import { useQuery } from "react-query";
import { useMemo } from "react";

const baseUrl = "http://o-complex.com:1337/products?page=1&page_size=20";

export const useQueryStore = create(() => ({
  products: [],
}));

export function useProducts() {
  const { data, isLoading, isError, isFetching } = useQuery(
    "product_details_table",
    async () => {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    }
  );

  const products = useMemo(() => data || [], [data]);

  return { products, isLoading, isError, isFetching };
}

// [] - index.tsx:14
// [] - installHook.js:1

// (2)[{...},{...}] - index.tsx:14
// (2)[{...},{...}] - installHook.js:1
