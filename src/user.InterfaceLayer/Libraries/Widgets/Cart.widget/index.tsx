import React from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";

interface CartWidgetProps {}

const CartWidget: React.FC<CartWidgetProps> = () => {
  return (
    <div className="rounded-[15px] bg-bgCard py-[10px] px-3 flex-col gap-2">
      <TextAtom type={TextAtomEnum.enum_h2}>Добавленные товары</TextAtom>
      <div className="flex">
        <TextAtom type={TextAtomEnum.enum_h3}>Добавленные товары</TextAtom>
      </div>
    </div>
  );
};
export default CartWidget;
