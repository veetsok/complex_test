// useReviews.ts
import { useQuery } from "react-query";

const baseUrl = "http://o-complex.com:1337/reviews";

export function useReviews() {
  return useQuery("reviews", async () => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    return response.json();
  });
}
