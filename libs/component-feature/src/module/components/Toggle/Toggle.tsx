import React, { useEffect, useState } from "react";
import { Text } from "../Text";
import S from "./_ToggleStyle";

interface IToggleProps {
  defaultChecked?: boolean;
  checkedText?: string;
  uncheckedText?: string;
  onToggle?: (checked: boolean) => void;
  beforeToggle?: (fn: () => any) => any;
}

const Toggle = ({ defaultChecked = false, onToggle, checkedText, uncheckedText, beforeToggle }: IToggleProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    onToggle?.(checked);
  }, [checked]);

  return (
    <S.Wrapper
      checked={checked}
      onClick={
        beforeToggle ? () => beforeToggle?.(() => setChecked((prev) => !prev)) : () => setChecked((prev) => !prev)
      }
    >
      <S.Button checked={checked} />
      {checkedText && (
        <Text
          style={{
            marginLeft: checked ? 18 : 4,
            marginRight: checked ? 4 : 18,
            transition: "margin 200ms ease-out",
            lineHeight: "16px",
          }}
          variant="body3-medium"
          color={checked ? "n-0" : "n-900"}
        >
          {checked ? checkedText : uncheckedText || checkedText}
        </Text>
      )}
    </S.Wrapper>
  );
};

export default Toggle;
