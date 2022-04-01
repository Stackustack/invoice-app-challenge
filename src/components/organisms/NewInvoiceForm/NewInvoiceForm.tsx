import React from "react";
import { Form, Formik } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormSection from "../Form/FormLegend/FormSection";
import InputF from "./../Form/InputF/InputF";
import FormHeader from "../Form/FormHeader/FormHeader";
import ActionPanel from "../Form/ActionPanel/ActionPanel";
import FormErrors from "../Form/FormErrors/FormErrors";

import { initialValues, validationSchema } from "../Form/FormData";
import s from "./NewInvoiceForm.module.scss";

type Props = {
  isDisplayed: boolean;
  onClickDismissForm: () => void;
};

// TO REMOVE - REPLACED BY FORM.TSX
// TO REMOVE - REPLACED BY FORM.TSX
// TO REMOVE - REPLACED BY FORM.TSX
// TO REMOVE - REPLACED BY FORM.TSX
// TO REMOVE - REPLACED BY FORM.TSX

const NewInvoiceForm = ({ isDisplayed, onClickDismissForm }: Props) => {
  const onFormikSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {isDisplayed && (
        <div className={s.wrapper}>
          <FormHeader onClickDismissForm={onClickDismissForm} />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormikSubmit}
          >
            {(formik) => (
              <Form>
                <div className={s.form}>
                  <FormSection legend="Bill From">
                    <InputF label="Street Address" name="billFrom.street" />
                    <InputF label="City" name="billFrom.city" />
                    <InputF label="Post Code" name="billFrom.postCode" />
                    <InputF label="Country" name="billFrom.country" />
                  </FormSection>
                  <FormErrors />
                </div>
                <ActionPanel onClickDismissForm={onClickDismissForm} />
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default NewInvoiceForm;
