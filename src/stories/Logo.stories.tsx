import { ComponentMeta } from "@storybook/react";
import Logo from "../components/atoms/Logo/Logo";

export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Default = () => <Logo />;
