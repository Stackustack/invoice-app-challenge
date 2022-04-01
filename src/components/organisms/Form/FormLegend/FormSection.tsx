import React, { ReactNode } from "react";

import s from "./FormSection.module.scss";

type Props = {
  children: ReactNode;
  legend?: string;
};

const FormSection = ({ children, legend }: Props) => {
  return (
    <>
      <div className={s.sectionHeader}>{legend}</div>
      {children}
    </>
  );
};

export default FormSection;
