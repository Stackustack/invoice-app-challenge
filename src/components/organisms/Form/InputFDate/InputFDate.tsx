import React, { forwardRef, ReactNode, useRef, useState } from "react";
import { FieldHookConfig, useField, useFormikContext } from "formik";
import cn from "classnames";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./InputFDate.module.scss";

interface OtherProps {
  label: string;
}

const InputFDate = ({
  label,
  ...props
}: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { name } = field;
  const { setFieldValue } = useFormikContext();

  const isValid = !(meta.touched && meta.error);

  // REFACTOR POTENTIAL:
  // we could format the data in custom input component
  // and pass normal Date obj as "selected" prop to DatePicker
  // To think: how to solve correct formating date when submitting the form? (maybe current solution isn't bad?)
  // Correct approach after talk with Damian:
  // vals comming from the BE should be normalized, so for dates it should
  // be Date type. Formik can handle Date type, but during sending (onSubmit) that to BE it should be converted
  // to format that's correctly handled by BE

  const parseDataToDateObj = (stringDate: string): Date => {
    return dayjs(stringDate, "YYYY-MM-DD").toDate();
  };

  const convertDateFromObjToStr = (date: Date): string => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  // CUSTOM INPUT
  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <input
      className={s.actualInputFieldForDate}
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly // value controlled within DatePicker component
    />
  ));

  return (
    <div
      className={cn(s.inputField, {
        [s[`inputField--valid`]]: isValid,
        [s[`inputField--invalid`]]: !isValid,
      })}
    >
      <label>{label}</label>
      <DatePicker
        selected={parseDataToDateObj(field.value)}
        onChange={(value) =>
          setFieldValue(name, convertDateFromObjToStr(value))
        }
        customInput={<CustomInput />}
        dateFormat="dd MMM yyyy"
      />
    </div>
  );
};

export default InputFDate;
