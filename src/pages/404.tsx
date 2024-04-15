import React from "react";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import dynamic from "next/dynamic";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";

const Page404: React.FC = () => {
  return (
    <div
      className={`${globalContainer} flex flex-col gap-4 justify-center items-center h-[95vh]`}
    >
      <TextAtom type={TextAtomEnum.enum_h1}>нет страницы</TextAtom>
    </div>
  );
};
export default React.memo(Page404);
