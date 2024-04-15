import React from "react";
import { IButtonAtomPropsDefault } from "./mock";
import ButtonAtomEnum from "./enum";
import { ButtonAtomProps } from "./type";
import TextAtom from "../Text.Atom";
import TextAtomEnum from "../Text.Atom/enum";
import SkeletonAtom from "../Skeleton.Atom";
import mobile from "./styled/mobile.module.css";

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
          className={`${className} inline-block bg-black rounded-[15px] w-full py-3 ${mobile.btn} hover:bg-bg_hover active:bg-bg_active`}
        >
          {children}
        </button>
      );
    }
    default: {
      return (
        <button className="bg-red-700 rounded-[15px] w-full py-3">
          Ошибка
        </button>
      );
    }
  }
};

ButtonAtom.defaultProps = IButtonAtomPropsDefault;
export default React.memo(ButtonAtom);
