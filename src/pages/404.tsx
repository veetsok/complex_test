import React from "react";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import dynamic from "next/dynamic";

const Page404: React.FC = () => {
  return <div className={`${globalContainer}`}>нет страницы </div>;
};
export default React.memo(Page404);
