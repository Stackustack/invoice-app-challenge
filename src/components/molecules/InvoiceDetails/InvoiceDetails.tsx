import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import arrowLeftIcon from "../../../assets/icon-arrow-left.svg";
import Button from "../../atoms/Button/Button";
import sButtons from "../../atoms/Button/Button.module.scss";
import Card from "../../atoms/Card/Card";
import InvoiceStatusLabel from "../../atoms/InvoiceStatusLabel/InvoiceStatusLabel";
import s from "./InvoiceDetails.module.scss";
import IInvoice from "./InvoiceInterface";

type InvoiceDetailsTypes = {
  data: IInvoice | null;
  onOpenDeleteModal: () => void;
  onOpenEditOverlay: () => void;
};

const InvoiceDetails = ({
  data,
  onOpenDeleteModal,
  onOpenEditOverlay,
}: InvoiceDetailsTypes) => {
  if (!data) {
    return <div>ELO MORDO, NIE MA TAKIEGO IDKA"</div>;
  }

  return (
    <div className={s.invoiceDetailsWrapper}>
      <Link to="/">
        <div className={s.goBackWrapper}>
          <img className={s.goBackIcon} src={arrowLeftIcon} alt="Back arrow" />
          <div className={s.goBackText}>Go back</div>
        </div>
      </Link>
      <Card className={s.invoiceDetailsStatus}>
        <div>Status</div>
        <div>
          <InvoiceStatusLabel status={data.status} />
        </div>
      </Card>

      <Card className={s.invoiceDetailsData}>
        <div className={s.invoiceIdAndDescWrapper}>
          <div className={s.invoiceId}>{data.id}</div>
          <div className={s.invoiceDesc}>{data.description}</div>
        </div>

        <div className={cn(s.senderAddress, s.addressWrapper)}>
          <div>{data.senderAddress.street}</div>
          <div>{data.senderAddress.city}</div>
          <div>{data.senderAddress.postCode}</div>
          <div>{data.senderAddress.country}</div>
        </div>

        <div className={s.invoiceDate}>
          <div className={s.label}>Invoice Date</div>
          <div className={s.boldedBig}>{data.createdAt}</div>
        </div>

        <div className={s.billTo}>
          <div className={s.label}>Bill To</div>
          <div className={s.boldedBig}>{data.clientName}</div>
          <div className={s.addressWrapper}>
            <div>{data.clientAddress.street}</div>
            <div>{data.clientAddress.city}</div>
            <div>{data.clientAddress.postCode}</div>
            <div>{data.clientAddress.country}</div>
          </div>
        </div>

        <div className={s.paymentDue}>
          <div className={s.label}>Payment Due</div>
          <div className={s.boldedBig}>{data.paymentDue}</div>
        </div>

        <div className={s.sentTo}>
          <div className={s.label}>Sent to</div>
          <div className={s.bolded}>{data.clientEmail}</div>
        </div>

        <div className={s.itemListSummaryWrapper}>
          <ul className={s.items}>
            {data.items.map((i) => {
              return (
                <li key={i.name} className={s.li}>
                  <div>
                    <div className={s.itemTitle}>{i.name}</div>
                    <div className={s.quantityXPrice}>
                      {i.quantity} x {i.price} PLN
                    </div>
                  </div>
                  <div className={s.itemTotal}>{i.total} PLN</div>
                </li>
              );
            })}
          </ul>

          <div className={s.priceSummary}>
            <div>Grand Total</div>
            <div className={s.invoiceTotalValue}>{data.total} PLN</div>
          </div>
        </div>
      </Card>

      <div className={s.actionsPanel}>
        <Button className={sButtons.colorsGrey} onClick={onOpenEditOverlay}>
          Edit
        </Button>
        <Button className={sButtons.colorsWarning} onClick={onOpenDeleteModal}>
          Delete
        </Button>
        {data.status !== "paid" && (
          <Button className={sButtons.colorsPurple}>Mark as Paid</Button>
        )}
      </div>
    </div>
  );
};

export default InvoiceDetails;
