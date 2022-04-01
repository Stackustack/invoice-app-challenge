import React from "react";
import Backdrop from "../../atoms/Backdrop/Backdrop";
import { ReactNode } from "react";
import ModalOverlay from "../../atoms/ModalOverlay/ModalOverlay";

import s from "./Modal.module.scss";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <Backdrop>
      <ModalOverlay>{children}</ModalOverlay>
    </Backdrop>
  );
};

export default Modal;
