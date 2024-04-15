import { useQuery } from "react-query";
import { useMemo } from "react";
import { ProductsResponse } from "./type";

const baseUrl = "http://o-complex.com:1337/products";

export function useProducts(page: number, pageSize: number) {
  const url = `${baseUrl}?page=${page}&page_size=${pageSize}`;
  const { data, isLoading, isError } = useQuery<ProductsResponse, Error>(
    ["products", page, pageSize],
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    }
  );

  const memoizedData = useMemo(() => data, [data]);

  return { products: memoizedData, isLoading, isError };
}
