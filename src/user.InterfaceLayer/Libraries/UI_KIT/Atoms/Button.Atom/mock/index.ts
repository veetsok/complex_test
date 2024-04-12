import ButtonEnum from "../enum";

const ButtonsMock = {
  children: "Демо",
  className: "",
  type: ButtonEnum.enum_butButton,
};

export default ButtonsMock;

export const IButtonAtomPropsDefault = {
  children: ButtonsMock.children,
  className: ButtonsMock.className,
  type: ButtonsMock.type,
};
