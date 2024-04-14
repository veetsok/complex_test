import React from "react";
import { IButtonAtomPropsDefault } from "./mock";
import ButtonAtomEnum from "./enum";
import { ButtonAtomProps } from "./type";
import TextAtom from "../Text.Atom";
import TextAtomEnum from "../Text.Atom/enum";
import SkeletonAtom from "../Skeleton.Atom";

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
  const { children, className, onClick, type, isLoading, disabled, style } =
    props;

  if (isLoading) {
    return <SkeletonAtom />;
  }

  switch (type) {
    case ButtonAtomEnum.enum_buyButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          className={`${className} inline-block bg-black rounded-md w-full py-3 hover:bg-bg_hover active:bg-bg_active`}
        >
          <TextAtom
            className="peer font-bold mx-auto text-white leading-relaxed uppercase"
            type={TextAtomEnum.enum_h5}
          >
            {children}
          </TextAtom>
        </button>
      );
    }
    default: {
      return (
        <button className="bg-red-700 rounded-md w-full py-3">Ошибка</button>
      );
    }
  }
};

ButtonAtom.defaultProps = IButtonAtomPropsDefault;
export default React.memo(ButtonAtom);
