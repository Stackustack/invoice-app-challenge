import React from "react";
import Button from "../../atoms/Button/Button";
import Modal from "../../molecules/Modal/Modal";

import sButtons from "./../../atoms/Button/Button.module.scss";
import s from "./DeleteInvoiceModal.module.scss";

type Props = {};

const DeleteInvoiceModal = (props: Props) => {
  return (
    <Modal>
      <h2 className={s.title}>Confirm Deletion</h2>
      <p className={s.desc}>
        Are you sure you want to delete invoice #INVOICE_NUM_HERE? This action
        cannot be undone.
      </p>
      <div className={s.actions}>
        <Button className={sButtons.colorsGrey}>Cancel</Button>
        <Button className={sButtons.colorsWarning}>Delete</Button>
      </div>
    </Modal>
  );
};

export default DeleteInvoiceModal;
