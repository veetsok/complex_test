import React, { useCallback, useState } from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";

interface CallNumberProps {}

const CallNumber: React.FC<CallNumberProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

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
export default CallNumber;
