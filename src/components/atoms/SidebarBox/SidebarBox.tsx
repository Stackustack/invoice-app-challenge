import React, { ReactNode } from "react";

import s from "./SidebarBox.module.scss";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const SidebarBox = ({ children, className }: Props) => {
  return <div className={cn(s.sidebarBox, className)}>{children}</div>;
};

export default SidebarBox;
