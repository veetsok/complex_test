import React, { useMemo } from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import CartBlockOrganisms from "../../UI_KIT/Organisms/CartBlock.organisms";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import InputAtom from "../../UI_KIT/Atoms/Input.Atom";
import { InputAtomEnum } from "../../UI_KIT/Atoms/Input.Atom/enum";

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
    <div className="rounded-[15px] bg-bgCard py-[10px] px-3 flex flex-col gap-5 max-w-[708px] my-0 mx-auto">
      <TextAtom type={TextAtomEnum.enum_h2}>Добавленные товары</TextAtom>
      {memoizedItems}
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
    </div>
  );
};
export default React.memo(CartWidget);
