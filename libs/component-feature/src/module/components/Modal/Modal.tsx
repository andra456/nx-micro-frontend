import React, { HTMLAttributes, useEffect } from "react";
import ReactDOM from "react-dom";
import S from "./_ModalStyle";

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  onClose: () => void;
}

const Modal = ({ visible, onClose, children }: IModalProps) => {
  const onEscape = (e: any) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", onEscape);
    return () => {
      document.body.removeEventListener("keydown", onEscape);
      document.body.style.overflowY = "auto";
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [visible]);

  if (!visible) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <S.Overlay onClick={onClose} />
      <S.Content>{children}</S.Content>
    </>,
    document.getElementById("root")!,
  );
};

export default Modal;
