import { ComponentMeta, ComponentStory } from "@storybook/react";
import cn from "classnames";

import Button from "../components/atoms/Button/Button";
import s from "../components/atoms/Button/Button.module.scss";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button className={args.className} children={<h4>{args.children}</h4>} />
);

export const SaveAsDraft = Template.bind({});
SaveAsDraft.args = {
  children: "Save as Draft",
  className: s.colorsDark,
};

export const Delete = Template.bind({});
Delete.args = {
  children: "Delete",
  className: s.colorsWarning,
};

export const MarkAsPaid = Template.bind({});
MarkAsPaid.args = {
  children: "Mark as Paid",
  className: s.colorsPurple,
};

export const AddNewItem = Template.bind({});
AddNewItem.args = {
  children: "+ Add New Item",
  className: cn(s.colorsGrey, s.long),
};
