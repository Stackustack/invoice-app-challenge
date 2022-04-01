import React from "react";
import Button from "../../atoms/Button/Button";
import Modal from "../../molecules/Modal/Modal";

import sButtons from "./../../atoms/Button/Button.module.scss";
import s from "./DeleteInvoiceModal.module.scss";

type Props = {
  invoiceId: string | undefined;
  onClickHide: () => void;
  onClickDelete: () => void;
};

const DeleteInvoiceModal = ({
  invoiceId,
  onClickHide,
  onClickDelete,
}: Props) => {
  return (
    <Modal>
      <h2 className={s.title}>Confirm Deletion</h2>
      <p className={s.desc}>
        Are you sure you want to delete invoice {invoiceId}? This action cannot
        be undone.
      </p>
      <div className={s.actions}>
        <Button className={sButtons.colorsGrey} onClick={onClickHide}>
          Cancel
        </Button>
        <Button className={sButtons.colorsWarning} onClick={onClickDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteInvoiceModal;
