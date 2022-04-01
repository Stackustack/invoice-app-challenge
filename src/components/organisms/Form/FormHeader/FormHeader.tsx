import React from "react";

import s from "./FormHeader.module.scss";
import BackArrowIcon from "../../../../assets/icon-arrow-left.svg";

type Props = {
  onClickDismissForm: () => void;
};

const FormHeader = ({ onClickDismissForm }: Props) => {
  return (
    <div className={s.formHeader}>
      <button className={s.goBack} onClick={onClickDismissForm}>
        <img src={BackArrowIcon} />
        <div>Go back</div>
      </button>
      <div className={s.headerTitle}>New Invoice</div>
    </div>
  );
};

export default FormHeader;
