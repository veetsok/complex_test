import { useQuery } from "react-query";
import { useMemo } from "react";
import { Reviews } from "./type";

const baseUrl = "http://o-complex.com:1337/reviews";

export function useReviews() {
  const { data, isLoading, isError } = useQuery<Reviews[]>(
    "reviews",
    async () => {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      return response.json();
    }
  );

  const memoizedData = useMemo(() => data || [], [data]);

  return { reviews: memoizedData, isLoading, isError };
}
