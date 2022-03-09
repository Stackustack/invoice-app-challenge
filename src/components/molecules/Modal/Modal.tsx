import React from "react";
import Backdrop from "../../atoms/Backdrop/Backdrop";
import { ReactNode } from "react";
import ModalOverlay from "../../atoms/ModalOverlay/ModalOverlay";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <>
      <ModalOverlay>{children}</ModalOverlay>
      <Backdrop />
    </>
  );
};

export default Modal;
