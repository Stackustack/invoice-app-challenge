import { useFormikContext } from "formik";
import React from "react";
import Button from "../../../atoms/Button/Button";

import s from "./ActionPanel.module.scss";

type Props = {
  onClickDismissForm: () => void;
};

const ActionPanel = ({ onClickDismissForm }: Props) => {
  const formik = useFormikContext();

  return (
    <div>
      <div className={s.actionPanel}>
        <Button onClick={onClickDismissForm}>Dismiss</Button>
        <Button
          onClick={(e) => {
            e.preventDefault(); // Disabling default behaviour (form submission) (doesn't formik do that by default?)
            console.log("TODO: Save as Draft");
          }}
        >
          Save as Draft
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault(); // Disabling default behaviour (form submission) (doesn't formik do that by default?)
            console.log("TODO: Save & Send");
            console.log(formik.values);
          }}
        >
          Save & Send
        </Button>
      </div>
    </div>
  );
};

export default ActionPanel;
