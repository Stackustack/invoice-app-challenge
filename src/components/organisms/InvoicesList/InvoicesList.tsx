import React from "react";

import InvoiceSimpleCard from "../../molecules/InvoiceSimpleCard/InvoiceSimpleCard";

import s from "./InvoicesList.module.scss";
import noInvoicesPicture from "../../../assets/illustration-empty.svg";
import IInvoice from "../../molecules/InvoiceDetails/InvoiceInterface";
import { Link } from "react-router-dom";

type InvoicesListTypes = {
  invoices: IInvoice[] | null;
};

const InvoicesList = ({ invoices }: InvoicesListTypes) => {
  if (!invoices) {
    return (
      <div className={s.noInvoicesWrapper}>
        <img
          src={noInvoicesPicture}
          alt="No invoices"
          className={s.noInvoices__picture}
        />
        <div className={s.noInvoices__header}>There is nothing here</div>
        <div className={s.noInvoices__desc}>
          Create an invoice by clicking the{" "}
          <span className={s.bolded}>New</span> button and get started
        </div>
      </div>
    );
  }

  const list = invoices.map((i) => {
    return (
      <Link to={`/invoice/${i.id}`} key={i.id}>
        <InvoiceSimpleCard
          id={i.id}
          clientName={i.clientName}
          paymentDue={i.paymentDue}
          invoiceTotal={i.total}
          status={i.status}
        />
      </Link>
    );
  });

  return <div className={s.invoicesList}>{list}</div>;
};

export default InvoicesList;
