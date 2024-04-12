import { InputAtomEnum } from "../enum";

export const InputAtomMock = {
  type: InputAtomEnum.TEXT,
};

export const IInputAtomDefaultProps = {
  type: InputAtomMock.type,
  value: "",
  onChange: () => ({}),
};
