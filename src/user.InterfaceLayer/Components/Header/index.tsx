import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      className={`${globalContainer} py-3 mt-[55px] mb-[105px] bg-[#777] rounded-[15px] text-center`}
    >
      <TextAtom type={TextAtomEnum.enum_h1}>тестовое задание</TextAtom>
    </header>
  );
};
export default React.memo(Header);
