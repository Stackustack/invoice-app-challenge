import React, { ReactNode } from "react";
import cn from "classnames";

import s from "./Button.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: (e?) => void;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={cn(s.base, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
