import React from "react";
import InvoiceStatusLabel from "../../atoms/InvoiceStatusLabel/InvoiceStatusLabel";
import s from "./InvoiceSimpleCard.module.scss";
import dayjs from "dayjs";

import { ReactComponent as RightArrowIcon } from "../../../assets/icon-arrow-right.svg";
import Card from "../../atoms/Card/Card";

type Props = {
  id: string;
  clientName: string;
  paymentDue: string;
  invoiceTotal: number;
  status: string;
};

const InvoiceSimpleCard = ({
  id,
  clientName,
  paymentDue,
  status,
  invoiceTotal,
}: Props) => {
  return (
    <Card className={s.invoiceItem}>
      <div className={s.id}>
        <h4>
          <span>#</span>
          {id}
        </h4>
      </div>
      <div className={s.paymentDue}>
        Due {dayjs(paymentDue).format("DD MMM YYYY")}
      </div>
      <div className={s.clientName}>{clientName}</div>
      <div className={s.invoiceTotal}>
        <h3>{invoiceTotal} PLN</h3>
      </div>
      <InvoiceStatusLabel className={s.invoiceStatusLabel} status={status} />
      <div className={s.rightArrowIcon}>
        <RightArrowIcon />
      </div>
    </Card>
  );
};

export default InvoiceSimpleCard;
