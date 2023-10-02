import React, { HTMLAttributes, ReactNode, useContext } from "react";
import S from "./_PopoverStyle";
import { PopoverContext } from "./Popover";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  position?: ["bottom" | "top", "left" | "right"];
}

const PopoverPanel = ({ children, position = ["top", "right"], ...props }: IProps) => {
  const { visible } = useContext(PopoverContext);

  if (visible) {
    return (
      <S.Panel position={position} {...props}>
        {children}
      </S.Panel>
    );
  }
  return null;
};

export default PopoverPanel;
