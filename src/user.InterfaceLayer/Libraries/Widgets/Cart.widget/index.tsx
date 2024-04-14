import React, { useMemo } from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";

interface CartWidgetProps {
  items?: any;
}

const CartWidget: React.FC<CartWidgetProps> = ({ items }) => {
  // const memoizedItems = useMemo(() => {
  //   items;
  //   // return items?.map((item, index) => (
  //   //   // <CartBlock key={index} text={item.text} />
  //   // ));
  // }, [items]);

  return (
    <div className="rounded-[15px] bg-bgCard py-[10px] px-3 flex-col gap-2">
      <TextAtom type={TextAtomEnum.enum_h2}>Добавленные товары</TextAtom>
    </div>
  );
};
export default CartWidget;
