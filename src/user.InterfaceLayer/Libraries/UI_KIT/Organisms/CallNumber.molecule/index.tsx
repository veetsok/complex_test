import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";

interface CallNumberProps {}

const CallNumber: React.FC<CallNumberProps> = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center bg-black gap-5 rounded-[15px] py-2 px-4 max-w-[400px]">
        <TextAtom type={TextAtomEnum.enum_h2} className="text-white">
          +7
        </TextAtom>
        <InputAtom type={InputAtomEnum.TEL} />
      </div>
      <ButtonAtom
        className="max-w-[268px]"
        type={ButtonAtomEnum.enum_buyButton}
      >
        Заказать
      </ButtonAtom>
    </div>
  );
};
export default CallNumber;
