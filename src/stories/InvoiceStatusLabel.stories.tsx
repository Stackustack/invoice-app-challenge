import { ComponentMeta } from "@storybook/react";

import InvoiceStatusLabel from "../components/atoms/InvoiceStatusLabel/InvoiceStatusLabel";
import s from "./../components/molecules/NewInvoiceButton/NewInvoiceButton.module.scss";

// For some reason fonts are not working when using @import in css
// importing this in storybooks preview.js doesn't work for some reason
import "../styles/fonts.scss";

export default {
  title: "InvoiceStatusLabel",
  component: InvoiceStatusLabel,
} as ComponentMeta<typeof InvoiceStatusLabel>;

export const Pending = () => <InvoiceStatusLabel status="pending" />;
export const Paid = () => <InvoiceStatusLabel status="paid" />;
export const Draft = () => <InvoiceStatusLabel status="draft" />;
