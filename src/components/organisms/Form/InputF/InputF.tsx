import React from "react";
import { FieldHookConfig, useField } from "formik";
import cn from "classnames";

import s from "./InputF.module.scss";

interface OtherProps {
  label: string;
}

const InputF = ({ label, ...props }: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const isValid = !(meta.touched && meta.error);

  return (
    <div
      className={cn(s.inputField, {
        [s[`inputField--valid`]]: isValid,
        [s[`inputField--invalid`]]: !isValid,
      })}
    >
      <label>{label}</label>
      <input {...field} />
    </div>
  );
};

export default InputF;
