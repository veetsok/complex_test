import Image from "next/image";
import React from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";

interface CardBlockProps {}

const CardBlock: React.FC<CardBlockProps> = () => {
  return (
    <div className="grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[9px] px-[10px] bg-bgCard rounded-[15px] flex flex-col h-full">
      <div className="w-[281px] h-[369px]">{/* <Image /> */}</div>
      <TextAtom type={TextAtomEnum.enum_h2}>Заголовок</TextAtom>
      <TextAtom type={TextAtomEnum.enum_h2}>описание</TextAtom>
    </div>
  );
};
export default CardBlock;
