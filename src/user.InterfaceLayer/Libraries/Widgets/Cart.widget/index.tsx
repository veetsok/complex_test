import React, { useMemo } from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import CartBlockOrganisms from "../../UI_KIT/Organisms/CartBlock.organisms";

interface CartWidgetProps {}

const CartWidget: React.FC<CartWidgetProps> = () => {
  const { items, total } = useCartStore();

  const memoizedItems = useMemo(() => {
    return items?.map((item, index) => (
      <CartBlockOrganisms
        key={index}
        title={item.title}
        count={item.quantity}
        sum={item.sum}
      />
    ));
  }, [items]);

  return (
    <div className="rounded-[15px] bg-bgCard py-[10px] px-3 flex-col gap-2">
      <TextAtom type={TextAtomEnum.enum_h2}>Добавленные товары</TextAtom>
      {memoizedItems}
    </div>
  );
};
export default React.memo(CartWidget);
