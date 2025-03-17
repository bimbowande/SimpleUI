import type { Meta, StoryObj } from "@storybook/react";
import { NavItem } from "./NavItem";
import { User } from "lucide-react";
import leftIcon from "../../assets/icon_set/left_icon.svg";

const meta = {
  title: "Example/NavItem",
  component: NavItem,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    iconType: "library",
    text: "Nav items with icon library",
    dataTestId: "nav-item",
    iconSrc: <User />,
  },
};

export const WithImage: Story = {
  args: {
    iconType: "image",
    text: "Nav Item without icon",
    dataTestId: "nav-without-icon",
    iconSrc: leftIcon,
  },
};

export const WithClassName: Story = {
  args: {
    text: "List with a class name",
    dataTestId: "nav-with-class-name",
    iconType: "className",
  },
};
