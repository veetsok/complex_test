import React, { useMemo } from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import CartBlockOrganisms from "../../UI_KIT/Organisms/CartBlock.organisms";
import CallNumber from "../../UI_KIT/Organisms/CallNumber.molecule";

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
      {!items ? (
        <div className="text-center flex flex-col gap-5">
          <TextAtom type={TextAtomEnum.enum_h3}>Корзина пока пуста!</TextAtom>
          <TextAtom type={TextAtomEnum.enum_h3}>
            Пришла пора отправиться за покупками!
          </TextAtom>
        </div>
      ) : (
        <>
          <TextAtom type={TextAtomEnum.enum_h2}>Добавленные товары</TextAtom>
          <div className="flex gap-[40px]">
            <div className="flex flex-col">{memoizedItems}</div>
            <TextAtom type={TextAtomEnum.enum_h2}>{total}</TextAtom>
          </div>
          <CallNumber />
        </>
      )}
    </div>
  );
};
export default React.memo(CartWidget);
