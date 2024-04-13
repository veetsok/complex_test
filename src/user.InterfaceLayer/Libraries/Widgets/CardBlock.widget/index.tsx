import Image from "next/image";
import React from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";

interface CardBlockProps {
  image_url?: string; // Make image_url optional
  title?: string;
  description?: string;
  price?: number;
}

const CardBlock: React.FC<CardBlockProps> = (props) => {
  const { image_url, title, description, price } = props;

  return (
    <div className="grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[9px] px-[10px] bg-bgCard rounded-[15px] flex flex-col h-full">
      <div className="w-[281px] h-[369px]">
        {image_url ? (
          <Image
            src={image_url}
            alt={"image"}
            width={281}
            height={369}
            layout="responsive"
          />
        ) : (
          <div className="placeholder-image">Placeholder Image</div>
        )}
      </div>
      <TextAtom type={TextAtomEnum.enum_h2}>{title}</TextAtom>
      <TextAtom type={TextAtomEnum.enum_h2}>{description}</TextAtom>
      <TextAtom type={TextAtomEnum.enum_h2} className="text-textWhite">
        Цена: {price} ₽
      </TextAtom>
      <ButtonAtom type={ButtonAtomEnum.enum_defaultButton}>Купить</ButtonAtom>
    </div>
  );
};

export default CardBlock;
