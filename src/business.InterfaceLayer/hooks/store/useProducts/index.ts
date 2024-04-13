// useProducts.ts
import { useQuery } from "react-query";

const baseUrl = "http://o-complex.com:1337/products";

export function useProducts(page, pageSize) {
  const url = `${baseUrl}?page=${page}&page_size=${pageSize}`;
  return useQuery(["products", page, pageSize], async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  });
}
