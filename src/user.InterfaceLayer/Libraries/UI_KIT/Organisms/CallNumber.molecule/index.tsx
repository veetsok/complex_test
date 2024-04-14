// CallNumber.tsx
import React, { useCallback, useState } from "react";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import { useOrder } from "@/business.InterfaceLayer/hooks/store/useOrder";
import ModalWindow from "../../Cells/ModalWindow.cells";

interface CallNumberProps {}

const CallNumber: React.FC<CallNumberProps> = () => {
  const { phoneNumber, setPhoneNumber, items, clearCart } = useCartStore();
  const { submitOrder } = useOrder();

  const [isShowModal, setIsShowModal] = useState(false);
  const openModal = useCallback(() => {
    setIsShowModal(true);
  }, [setIsShowModal]);

  const handlePhoneChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
    },
    [setPhoneNumber]
  );
  const handleSubmit = async () => {
    if (phoneNumber.length !== 11) {
      return;
    }
    try {
      const cart = items.map(({ id, quantity }) => ({ id, quantity }));
      await submitOrder(phoneNumber, cart);
      alert("Order submitted successfully!");
      clearCart();
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    }
  };

  console.log("79163452487".length);

  return (
    <>
      {isShowModal && <ModalWindow close={setIsShowModal} />}
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
          onClick={openModal}
        >
          Заказать
        </ButtonAtom>
      </div>
    </>
  );
};
export default React.memo(CallNumber);
