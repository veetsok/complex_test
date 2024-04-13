// useProducts.ts
import { useQuery } from "react-query";
import { ProductsResponse } from "./type";

const baseUrl = "http://o-complex.com:1337/products";

export function useProducts(page: number, pageSize: number) {
  const url = `${baseUrl}?page=${page}&page_size=${pageSize}`;
  return useQuery<ProductsResponse, Error>(
    ["products", page, pageSize],
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    }
  );
}
