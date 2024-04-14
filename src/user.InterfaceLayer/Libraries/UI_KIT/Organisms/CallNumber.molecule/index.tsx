// CallNumber.tsx
import React, { useCallback } from "react";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import { useOrder } from "@/business.InterfaceLayer/hooks/store/useOrder";

interface CallNumberProps {}

const CallNumber: React.FC<CallNumberProps> = () => {
  const { phoneNumber, setPhoneNumber, items, clearCart } = useCartStore();
  const { submitOrder } = useOrder();

  const handlePhoneChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
    },
    [setPhoneNumber]
  );

  const handleSubmit = async () => {
    if (phoneNumber.length !== 12) {
      // Handle invalid phone number
      return;
    }

    try {
      // Prepare the cart data
      const cart = items.map(({ id, quantity }) => ({ id, quantity }));

      // Call the submitOrder function from the useOrder hook
      await submitOrder(phoneNumber, cart);

      // If successful, clear the cart or show success message
      // For simplicity, let's assume the server returns success
      alert("Order submitted successfully!");
      // Clear the cart
      clearCart();
    } catch (error) {
      // Handle error
      console.error("Error submitting order:", error);
      // Show error message
      alert("Failed to submit order. Please try again.");
    }
  };

  console.log(phoneNumber);

  return (
    <div className="flex justify-between">
      <div className="flex items-center bg-black gap-5 rounded-[15px] py-2 px-4 max-w-[400px]">
        <InputAtom
          type={InputAtomEnum.TEL}
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      <ButtonAtom
        className="max-w-[268px]"
        type={ButtonAtomEnum.enum_buyButton}
        onClick={handleSubmit}
      >
        Заказать
      </ButtonAtom>
    </div>
  );
};
export default React.memo(CallNumber);
