import React from "react";
import { useFormikContext } from "formik";
import { flatten } from "flat";

import s from "./FormErrors.module.scss";

type Props = {};

const FormErrors = (props: Props) => {
  const { errors, submitCount } = useFormikContext();

  const errorMsg = Array.from(
    new Set(Object.entries(flatten(errors)).map(([_k, v]) => v))
  );

  const errorsJSX = () => {
    return errorMsg.map((e) => <div>{`${e}`}</div>);
  };

  return (
    <div className={s.formErrors}>
      {errorMsg && submitCount > 0 && errorsJSX()}
    </div>
  );
};

export default FormErrors;
