import React, { useMemo } from "react";
import { CheckboxAtomEnum } from "./enum";
import { CheckBoxProps } from "./type";
import { checkboxStyle, radioStyle } from "./style";

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { checked, onChange, className, type } = props;

  useMemo(() => onChange, [onChange]);

  switch (type) {
    case CheckboxAtomEnum.CHECKBOX: {
      return (
        <input
          type={CheckboxAtomEnum.CHECKBOX}
          className={`${className ? className : ""}  ${checkboxStyle}`}
          checked={checked}
          onChange={onChange}
        />
      );
    }
    case CheckboxAtomEnum.RADIO: {
      return (
        <input
          type={CheckboxAtomEnum.RADIO}
          className={`${className ? className : ""}  ${radioStyle}`}
          checked={checked}
          onChange={onChange}
        />
      );
    }
    default: {
      return <h5 className="text-h5 text-red">Ошибка</h5>;
    }
  }
};
export default React.memo(CheckBox);
