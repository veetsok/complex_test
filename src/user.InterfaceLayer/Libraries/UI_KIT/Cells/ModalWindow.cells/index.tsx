import React, { useCallback } from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import ImageAtom from "../../Atoms/Image.Atom";
import ImageEnum from "../../Atoms/Image.Atom/enum";
import CloseIcon from "../../../shared/icons/close.svg?react";
import mobile from "./styled/mobile.module.css";

interface ModalWindowProps {
  close?: (val: boolean) => void;
}

const ModalWindow: React.FC<ModalWindowProps> = (props) => {
  const { close } = props;

  const handleClickClose = useCallback(() => {
    close?.(false);
  }, [close]);

  return (
    <div className="fixed inset-[0] z-[999] flex justify-center items-center">
      <div
        className="absolute inset-[0] z-[-1] bg-bgModal"
        onClick={handleClickClose}
      ></div>
      <div
        className={`${mobile.modal} mx-5 max-h-[calc(100vh-48px)] relative w-[40%] bg-bgCard mx-5 p-6 rounded-[15px]`}
      >
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          icon={<CloseIcon />}
          onClick={handleClickClose}
          className="absolute right-[24px] fill-gray w-6 h-6 cursor-pointer hover:fill-black"
        />
        <TextAtom
          type={TextAtomEnum.enum_h3}
          className="py-6 uppercase text-center"
        >
          Заказ успешно создан
        </TextAtom>
      </div>
    </div>
  );
};
export default ModalWindow;
