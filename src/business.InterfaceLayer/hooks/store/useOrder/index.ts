import { useCallback } from "react";

const baseUrl = "http://o-complex.com:1337/order";

export const useOrder = () => {
  const submitOrder = useCallback(async (phone: string, cart: any[]) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, cart }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error submitting order:", error);
      throw new Error("Failed to submit order");
    }
  }, []);

  return { submitOrder };
};
