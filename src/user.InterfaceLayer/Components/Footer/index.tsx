import React from "react";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import Link from "next/link";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";

const Footer: React.FC = () => {
  return (
    <footer className="my-10">
      <div className={`${globalContainer} text-center`}>
        <Link
          href="https://t.me/ivan_veetsok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TextAtom
            type={TextAtomEnum.enum_h4}
            className="font-bold cursor-pointer uppercase"
          >
            © Ivan Veetsok
          </TextAtom>
        </Link>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
