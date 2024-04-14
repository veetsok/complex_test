import React, { useCallback } from "react";
import { InputAtomProps } from "./type";
import { InputAtomEnum } from "./enum";
import { inputStyle } from "./styles/styled";
import { InputMask, checkType } from "./utils";
import { IInputAtomDefaultProps } from "./mock";

const InputAtom: React.FC<InputAtomProps> = (props) => {
  const {
    type,
    className,
    value,
    onChange,
    min,
    max,
    step,
    isLoading,
    ...otherProps
  } = props;

  const additionalClass = inputStyle;

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const inputValue = checkType(type)
          ? InputMask(type, e.currentTarget.value)
          : e.currentTarget.value;
        onChange(inputValue);
      }
    },
    [onChange, type]
  );

  return (
    <>
      {isLoading ? (
        <>Loading....</>
      ) : (
        <input
          className={`${className ? className : ""}  ${additionalClass}`} // Объединяем класс, стиль и дополнительные стили
          type={checkType(type) ? InputAtomEnum.TEXT : type}
          value={value}
          onChange={onChangeHandler}
          onInput={onChangeHandler}
          {...otherProps}
        />
      )}
    </>
  );
};

InputAtom.defaultProps = IInputAtomDefaultProps;
export default React.memo(InputAtom);
