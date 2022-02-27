import { ComponentMeta } from "@storybook/react";

import InvoiceStatusLabel from "../components/atoms/InvoiceStatusLabel/InvoiceStatusLabel";

export default {
  title: "InvoiceStatusLabel",
  component: InvoiceStatusLabel,
} as ComponentMeta<typeof InvoiceStatusLabel>;

export const Pending = () => <InvoiceStatusLabel status="pending" />;
export const Paid = () => <InvoiceStatusLabel status="paid" />;
export const Draft = () => <InvoiceStatusLabel status="draft" />;
