import React, { ReactNode, useEffect } from "react";

import s from "./Backdrop.module.scss";

type Props = {
  children?: ReactNode;
};

const Backdrop = ({ children }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return <div className={s.backdrop}>{children}</div>;
};

export default Backdrop;
