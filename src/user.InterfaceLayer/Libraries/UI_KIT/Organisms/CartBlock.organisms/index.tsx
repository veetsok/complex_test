import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";

interface CartBlockProps {
  title?: string;
  count?: number;
  price?: number;
}

const CartBlock: React.FC<CartBlockProps> = (props) => {
  const { title, count, price } = props;

  return (
    <div className="flex">
      <TextAtom type={TextAtomEnum.enum_h3}>{title}</TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3}>{count}</TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3}>
        {price?.toLocaleString()} ₽
      </TextAtom>
    </div>
  );
};
export default React.memo(CartBlock);
