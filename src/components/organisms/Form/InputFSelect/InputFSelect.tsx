import React from "react";
import Select from "react-select";
import { FieldHookConfig, useField, useFormikContext } from "formik";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import { options } from "./selectOptions";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const Label = styled.label`
  color: #7e88c3;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

const fontCss = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  background-color: red;
`;

const fontSelect = {
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "15px",
  letterSpacing: "-0.25px",
};

const styles = {
  control: (base) => ({
    ...base,
    fontCss,
    height: "48px",
    color: "#0C0E16",
    paddingTop: "2px",

    border: "1px solid #DFE3FA",
    //TODO: Add active class
  }),
  menu: (base) => ({
    ...base,
    ...fontSelect,
  }),
  option: (base) => ({
    ...base,
    height: "49px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #DFE3FA",
    "&:last-child": {
      borderBottom: "none",
    },
    //TODO ACTIVE STATE
  }),
};

type OtherProps = {
  label: string;
};

const InputFSelect = ({
  label,
  ...props
}: OtherProps & FieldHookConfig<string>) => {
  const [{ name, value }] = useField(props);
  const { setFieldValue } = useFormikContext();

  const defaultValue = (val: string) => {
    // formik.value is converted "num=>str" by formik for some reason
    // so initial value need additional parsing
    return options.find((option) => option.value === parseInt(val));
  };

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Select
        styles={styles}
        options={options}
        defaultValue={defaultValue(value)}
        onChange={(value) => setFieldValue(name, value?.value)}
      />
    </FieldWrapper>
  );
};

export default InputFSelect;
