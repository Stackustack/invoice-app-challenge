import React from "react";
import cn from "classnames";

import s from "./Logo.module.scss";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className={cn(s.logoWrapper, className)}>
      <div className={s.logo}>
        <LogoIcon />
      </div>
      <div className={s.bottomPartStyle} />
    </div>
  );
};

export default Logo;
