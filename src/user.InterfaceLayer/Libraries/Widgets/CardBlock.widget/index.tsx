import Image from "next/image";
import React from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import { sanitize } from "./utils";

interface CardBlockProps {
  image_url?: string;
  title?: string;
  description?: string;
  price?: number;
}

const CardBlock: React.FC<CardBlockProps> = (props) => {
  const { image_url, title, description, price } = props;

  return (
    <div className="grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[9px] px-[10px] bg-bgCard rounded-[15px] flex flex-col h-full">
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
      <TextAtom type={TextAtomEnum.enum_h4} className="mt-2">
        {sanitize(title)}
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h4} className="overflow-hidden">
        {sanitize(description)}
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-textWhite">
        Цена: {price} ₽
      </TextAtom>
      <ButtonAtom type={ButtonAtomEnum.enum_defaultButton}>Купить</ButtonAtom>
    </div>
  );
};

export default CardBlock;
