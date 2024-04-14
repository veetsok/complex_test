import Image from "next/image";
import React, { useCallback } from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import { sanitize, truncateText } from "./utils";
import { CardBlockProps } from "./type";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";
import InputAtom from "../../Atoms/Input.Atom";
import { InputAtomEnum } from "../../Atoms/Input.Atom/enum";

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 150;

const CardBlock: React.FC<CardBlockProps> = (props) => {
  const { image_url, title, description, price, id } = props;
  const {
    addItem,
    increaseQuantity,
    decreaseQuantity,
    updateItemQuantity,
    items,
  } = useCartStore();

  const item = items.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;

  const handleAddToCart = useCallback(() => {
    addItem({ id, title, price, quantity: 1, sum: 0 });
  }, [addItem, id, title, price]);

  const handleIncreaseQuantity = useCallback(() => {
    increaseQuantity(id);
  }, [increaseQuantity, id]);

  const handleDecreaseQuantity = useCallback(() => {
    decreaseQuantity(id);
  }, [decreaseQuantity, id]);

  const handleQuantityChange = useCallback(
    (value: number) => {
      updateItemQuantity(id, value);
    },
    [id, updateItemQuantity]
  );

  return (
    <div className="grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[9px] px-[10px] bg-bgCard rounded-[15px] flex flex-col gap-2 h-full">
      <div className="overflow-hidden">
        <div className="w-full h-[264px]">
          {image_url ? (
            <Image
              src={image_url}
              alt="image"
              className="max-w-full max-h-full object-contain"
              width={281}
              height={280}
              layout="responsive"
            />
          ) : (
            <TextAtom type={TextAtomEnum.enum_h4}>
              Ошибка загрузки картинки
            </TextAtom>
          )}
        </div>
      </div>
      <TextAtom
        type={TextAtomEnum.enum_h4}
        className="h-[40px] overflow-hidden"
      >
        {truncateText(sanitize(title), MAX_TITLE_LENGTH)}
      </TextAtom>
      <TextAtom
        type={TextAtomEnum.enum_h4}
        className="h-[80px] overflow-hidden"
      >
        {truncateText(sanitize(description), MAX_DESCRIPTION_LENGTH)}
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-textWhite">
        Цена: {price?.toLocaleString()} ₽
      </TextAtom>
      {quantity < 1 ? (
        <ButtonAtom
          onClick={handleAddToCart}
          type={ButtonAtomEnum.enum_buyButton}
        >
          Купить
        </ButtonAtom>
      ) : (
        <div className="flex gap-2 items-center">
          <ButtonAtom
            onClick={handleDecreaseQuantity}
            type={ButtonAtomEnum.enum_buyButton}
          >
            <TextAtom type={TextAtomEnum.enum_h2}>-</TextAtom>
          </ButtonAtom>
          <div className="inline-flex justify-center bg-black rounded-md max-w-[150px]">
            <InputAtom
              type={InputAtomEnum.NUMBER}
              className="h-[60px] hover:bg-bg_hover active:bg-bg_active text-white w-full text-center bg-transparent text-h3"
              value={Number(quantity)}
              onChange={handleQuantityChange}
            />
          </div>

          <ButtonAtom
            onClick={handleIncreaseQuantity}
            type={ButtonAtomEnum.enum_buyButton}
          >
            <TextAtom type={TextAtomEnum.enum_h2}>+</TextAtom>
          </ButtonAtom>
        </div>
      )}
    </div>
  );
};

export default React.memo(CardBlock);
