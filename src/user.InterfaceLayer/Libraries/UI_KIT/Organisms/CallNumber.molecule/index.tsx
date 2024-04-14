import React, { useCallback } from "react";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";

interface CallNumberProps {}

const CallNumber: React.FC<CallNumberProps> = () => {
  const { phoneNumber, setPhoneNumber } = useCartStore();

  const handlePhoneChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
    },
    [setPhoneNumber]
  );

  const handleSubmit = () => {};

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
