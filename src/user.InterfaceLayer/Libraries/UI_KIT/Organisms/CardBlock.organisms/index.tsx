import Image from "next/image";
import React, { useCallback } from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import { sanitize, truncateText } from "./utils";
import { CardBlockProps } from "./type";

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 150;

const CardBlock: React.FC<CardBlockProps> = (props) => {
  const { image_url, title, description, price, onClick } = props;

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <div className="grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[9px] px-[10px] bg-bgCard rounded-[15px] flex flex-col gap-2 h-full">
      <div className="overflow-hidden">
        <div className="w-full h-[264px]">
          {image_url ? (
            <Image
              src={image_url}
              alt={"image"}
              className="max-w-full max-h-full object-contain"
              width={281}
              height={280}
              layout="responsive"
            />
          ) : (
            <TextAtom type={TextAtomEnum.enum_h4} className="">
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
        Цена: {price} ₽
      </TextAtom>
      <ButtonAtom onClick={handleClick} type={ButtonAtomEnum.enum_buyButton}>
        Купить
      </ButtonAtom>
    </div>
  );
};

export default React.memo(CardBlock);
