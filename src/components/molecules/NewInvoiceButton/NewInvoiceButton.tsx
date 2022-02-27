import s from "./NewInvoiceButton.module.scss";

import Button from "../../atoms/Button/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icon-plus.svg";

const NewInvoiceButton = () => {
  return (
    <Button className={s.newInvoiceButton}>
      <div className={s.circle}>
        <PlusIcon />
      </div>
      <h4 className={s.addNewItemText} />
    </Button>
  );
};

export default NewInvoiceButton;
