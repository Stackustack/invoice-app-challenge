import React from "react";

import s from "./InputFieldWithLabel.module.scss";

type Props = {
  label: string;
  section: string;
  nameHTML: string;
  formik: any;
};

const InputFieldWithLabel = ({ formik, section, nameHTML, label }: Props) => {
  return (
    <div className={s.inputField}>
      <label>{label}</label>
      <input
        onChange={formik.handleChange}
        value={formik.values[section][nameHTML]}
        name={`${section}.${nameHTML}`}
      />
    </div>
  );
};

export default InputFieldWithLabel;
