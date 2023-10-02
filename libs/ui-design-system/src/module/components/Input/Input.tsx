import React, { InputHTMLAttributes, DetailedHTMLProps, ComponentPropsWithoutRef } from "react";
import S from "./_InputStyle";

const Input = React.forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ style, ...props }: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ref) => {
    return (
      <S.Input style={style}>
        <input {...props} ref={ref} />
      </S.Input>
    );
  },
);
export default Input;
