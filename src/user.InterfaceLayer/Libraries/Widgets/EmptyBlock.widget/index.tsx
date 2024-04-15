import React from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";

type EmptyBlockProps = {};

const EmptyBlock: React.FC<EmptyBlockProps> = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[95vh]">
      <TextAtom type={TextAtomEnum.enum_h2}>
        Произошла неизвестная ошибка
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h2}>Попробуйте в другой раз</TextAtom>
    </div>
  );
};
export default EmptyBlock;
