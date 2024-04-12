import React from "react";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-10">
      <div className={`${globalContainer} flex items-center justify-between`}>
        <div className="flex gap-7"></div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
