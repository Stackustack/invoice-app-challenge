import React from "react";
import { ReactNode } from "react";

import s from "./ModalOverlay.module.scss";

type Props = {
  children: ReactNode;
};

const ModalOverlay = ({ children }: Props) => {
  return <div className={s.modalOverlay}>{children}</div>;
};

export default ModalOverlay;
