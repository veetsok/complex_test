import { ICommonComponentProps } from "@/user.InterfaceLayer/constants/commonComponentProps/type";
import { InputAtomEnum } from "../enum";

export interface InputAtomProps {
  type: InputAtomEnum;
  isLoading?: ICommonComponentProps["isLoading"];
  children?: ICommonComponentProps["children"];
  checked?: ICommonComponentProps["checked"];
  value?: string | number | readonly string[];
  // onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // onChange?: (val: string) => void;
  onChange?: any;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  placeholder?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
