import React, { useCallback, useState } from "react";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import { useOrder } from "@/business.InterfaceLayer/hooks/store/useOrder";
import ModalWindow from "../../Cells/ModalWindow.cells";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";

interface CallNumberProps {}

const CallNumber: React.FC<CallNumberProps> = () => {
  const { phoneNumber, setPhoneNumber, items, clearCart } = useCartStore();
  const { submitOrder } = useOrder();

  const [isShowModal, setIsShowModal] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
      if (value.length < 12) {
        setPhoneError("Пожалуйста, введите корректно телефонный номер");
      } else {
        setPhoneError("");
      }
    },
    [setPhoneNumber]
  );

  const handleSubmit = useCallback(() => {
    if (phoneNumber.length !== 12) {
      setPhoneError("Пожалуйста, введите корректно телефонный номер");
      return;
    }
    const cart = items.map(({ id, quantity }) => ({ id, quantity }));
    submitOrder(phoneNumber.substring(1), cart);
    clearCart();
    setIsShowModal(true);
  }, [phoneNumber, items, submitOrder, clearCart, setIsShowModal]);

  return (
    <>
      {isShowModal && (
        <ModalWindow
          close={() => {
            setIsShowModal(false);
          }}
        />
      )}
      <div className="flex flex-col gap-3">
        {phoneError && (
          <TextAtom type={TextAtomEnum.enum_h3} className="text-red-500">
            {phoneError}
          </TextAtom>
        )}
        <div className="flex justify-between">
          <div
            className={
              phoneError
                ? "border boder-solid border-red-500 flex items-center bg-black gap-5 rounded-[15px] py-2 px-4 max-w-[400px]"
                : "flex items-center bg-black gap-5 rounded-[15px] py-2 px-4 max-w-[400px]"
            }
          >
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
            <TextAtom type={TextAtomEnum.enum_h3}>Заказать</TextAtom>
          </ButtonAtom>
        </div>
      </div>
    </>
  );
};

export default React.memo(CallNumber);
