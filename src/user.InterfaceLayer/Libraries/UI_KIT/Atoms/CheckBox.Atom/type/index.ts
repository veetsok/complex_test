import { CheckboxAtomEnum } from "../enum";

export interface CheckBoxProps {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
  type: CheckboxAtomEnum;
}
