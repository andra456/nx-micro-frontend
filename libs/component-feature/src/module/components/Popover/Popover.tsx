import React, { createContext, ReactNode, useState, useEffect, useRef } from "react";
import S from "./_PopoverStyle";
import PopoverPanel from "./PopoverPanel";
import PopoverButton from "./PopoverButton";

interface IPopoverContext {
  visible: boolean;
  toggle: () => void;
  close: () => void;
}

export const PopoverContext = createContext<IPopoverContext>({
  visible: false,
  toggle: () => {},
  close: () => {},
});

const Popover = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggle = () => {
    setVisible((prevState) => !prevState);
  };

  const close = () => {
    setVisible(false);
  };

  const value = { visible, toggle, close };

  return (
    <PopoverContext.Provider value={value}>
      <S.Wrapper ref={popoverRef}>{children}</S.Wrapper>
    </PopoverContext.Provider>
  );
};

Popover.Button = PopoverButton;
Popover.Panel = PopoverPanel;

export default Popover;
