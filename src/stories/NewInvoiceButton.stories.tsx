import { ComponentMeta } from "@storybook/react";

import NewInvoiceButton from "../components/molecules/NewInvoiceButton/NewInvoiceButton";

export default {
  title: "NewInvoiceButton",
  component: NewInvoiceButton,
} as ComponentMeta<typeof NewInvoiceButton>;

export const Default = () => <NewInvoiceButton />;
