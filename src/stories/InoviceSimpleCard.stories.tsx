import { ComponentMeta, ComponentStory } from "@storybook/react";

import InvoiceSimpleCard from "../components/molecules/InvoiceSimpleCard/InvoiceSimpleCard";

export default {
  title: "InvoiceSimpleCard",
  component: InvoiceSimpleCard,
} as ComponentMeta<typeof InvoiceSimpleCard>;

const Template: ComponentStory<typeof InvoiceSimpleCard> = (args: any) => (
  <InvoiceSimpleCard {...args} />
);

export const InvoicePending = Template.bind({});
InvoicePending.args = {
  id: "XM9141",
  clientName: "Michal Jung",
  paymentDue: "2021-08-19",
  invoiceTotal: 2137,
  status: "paid",
};

export const InvoicePaid = Template.bind({});
InvoicePaid.args = {
  id: "XM9141",
  clientName: "Michal Jung",
  paymentDue: "2021-08-19",
  invoiceTotal: 2137,
  status: "pending",
};

export const InvoiceDraft = Template.bind({});
InvoiceDraft.args = {
  id: "XM9141",
  clientName: "Michal Jung",
  paymentDue: "2021-08-19",
  invoiceTotal: 2137,
  status: "draft",
};
