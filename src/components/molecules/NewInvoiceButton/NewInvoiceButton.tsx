import s from "./NewInvoiceButton.module.scss";
import cn from "classnames";

import Button from "../../atoms/Button/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icon-plus.svg";

type Props = {
  className?: string;
  onClick?: () => void;
};

const NewInvoiceButton = ({ className, onClick }: Props) => {
  return (
    <Button className={cn(s.newInvoiceButton, className)} onClick={onClick}>
      <div className={s.circle}>
        <PlusIcon />
      </div>
      <h4 className={s.addNewItemText} />
    </Button>
  );
};

export default NewInvoiceButton;
