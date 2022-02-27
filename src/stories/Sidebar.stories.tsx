import { ComponentMeta } from "@storybook/react";

import Sidebar from "../components/organisms/Sidebar/Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Default = () => <Sidebar />;
