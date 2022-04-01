import React, { forwardRef } from "react";
import { Form as FormikForm, Formik } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormSection from "../Form/FormLegend/FormSection";
import InputF from "./../Form/InputF/InputF";
import FormHeader from "../Form/FormHeader/FormHeader";
import ActionPanel from "../Form/ActionPanel/ActionPanel";
import FormErrors from "../Form/FormErrors/FormErrors";

import { initialValues, validationSchema } from "../Form/FormData";
import s from "./Form.module.scss";
import InputFDate from "./InputFDate/InputFDate";
import InputFSelect from "./InputFSelect/InputFSelect";

type Props = {
  isDisplayed: boolean;
  draftInvoiceData?: any;
  onClickDismissForm: () => void;
};

const Form = ({ isDisplayed, draftInvoiceData, onClickDismissForm }: Props) => {
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
            initialValues={draftInvoiceData || initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormikSubmit}
          >
            {(formik) => (
              <FormikForm>
                <div className={s.form}>
                  {/* TEXT INPUT FIELD */}
                  <FormSection legend="Bill From">
                    <InputF
                      label="Street Address"
                      name="senderAddress.street"
                    />
                    <InputF label="City" name="senderAddress.city" />
                    {/* <InputF label="Post Code" name="senderAddress.postCode" /> */}
                    {/* <InputF label="Country" name="senderAddress.country" /> */}
                  </FormSection>

                  {/* DATE INPUT */}
                  <FormSection>
                    <InputFDate label="Invoice Date" name="createdAt" />
                  </FormSection>

                  <FormSection>
                    <InputFSelect label="Payment Terms" name="paymentTerms" />
                  </FormSection>
                  <FormErrors />
                </div>
                <ActionPanel onClickDismissForm={onClickDismissForm} />
              </FormikForm>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Form;
