import React, { ReactNode, useContext } from "react";
import S from "./_PopoverStyle";
import { PopoverContext } from "./Popover";

const PopoverButton = ({ children }: { children?: ReactNode }) => {
  const { toggle } = useContext(PopoverContext);

  return <S.Button onClick={toggle}>{children}</S.Button>;
};

export default PopoverButton;
