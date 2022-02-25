import React from "react";
import s from "./Card.module.scss";
import cn from "classnames";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ className, children }: CardProps) => {
  return <div className={cn(s.base, className)}>{children}</div>;
};

export default Card;
