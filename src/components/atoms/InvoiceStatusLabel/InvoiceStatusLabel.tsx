import React from "react";
import cn from "classnames";

import s from "./InvoiceStatusLabel.module.scss";

type Props = {
  status: string;
  className?: string;
};

const InvoiceStatusLabel = ({ status, className }: Props) => {
  const invoiceStatusLabelClasses = () => {
    return cn(
      s.invoiceStatusLabel,
      {
        [s.pending]: status === "pending",
        [s.draft]: status === "draft",
        [s.paid]: status === "paid",
      },
      className
    );
  };

  return (
    <div className={invoiceStatusLabelClasses()}>
      <div className={s.dot} />
      <h4>{status}</h4>
    </div>
  );
};

export default InvoiceStatusLabel;
