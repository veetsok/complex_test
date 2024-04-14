import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";

interface CartBlockProps {
  title?: string;
  count?: number;
  sum?: number;
}

const CartBlock: React.FC<CartBlockProps> = (props) => {
  const { title, count, sum } = props;

  return (
    <div className="flex gap-8 max-w-[425px]">
      <TextAtom
        type={TextAtomEnum.enum_h3}
        className="max-w-[250px] overflow-hidden"
      >
        {title}
      </TextAtom>
      <TextAtom
        type={TextAtomEnum.enum_h3}
        className="h-[50px] overflow-hidden"
      >
        {count}
      </TextAtom>
      <TextAtom
        type={TextAtomEnum.enum_h3}
        className="h-[50px] overflow-hidden"
      >
        {sum?.toLocaleString()} ₽
      </TextAtom>
    </div>
  );
};
export default React.memo(CartBlock);
