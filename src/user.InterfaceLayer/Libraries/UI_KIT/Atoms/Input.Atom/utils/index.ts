import { InputAtomEnum, LikeTxtTypeEnum } from "../enum";

export const checkType = (type: string) => {
  return type in LikeTxtTypeEnum;
};

export const InputMask = (type: InputAtomEnum, val: string) => {
  switch (type) {
    case InputAtomEnum.NUMBER:
      return validateValue(val, /^[0-9]*$/);
    case InputAtomEnum.CVV:
      if (val.length === 4) return val.slice(0, -1);
      return validateValue(val, /^[0-9]*$/);
    case InputAtomEnum.TEXT_ONLY:
      return validateValue(val, /^[a-zA-Zа-яА-Я\s]+$/);
    case InputAtomEnum.CARD: {
      val = validateValue(val.replace(/\s/g, ""), /^(\d{0,4}){0,3}\d{0,4}$/);
      return val.replace(/(.{4})(?!$)/g, "$1 ");
    }
    case InputAtomEnum.CARD_DATE: {
      if (val.length === 2) val = val.substring(0, 2) + "/" + val.substring(2);
      return validateValue(val, /^(\d{0,2}\/){0,1}\d{0,2}$/);
    }
    case InputAtomEnum.TEL: {
      if (val.length === 13) return val.slice(0, -1);
      return "+7" + validateValue(val.substring(2), /^[0-9]*$/);
    }
    default:
      return val;
  }
};

const validateValue = (value: string, rule: RegExp) => {
  return rule.test(value) ? value : value.slice(0, -1);
};
