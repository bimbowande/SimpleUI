import type { Meta, StoryObj } from "@storybook/react";
import TitleHeader from "./TitleHeader";

const meta = {
  title: "Title",
  component: TitleHeader,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TitleHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitlePrimary: Story = {
  args: {
    variant: "primary",
    link: "#",
    dataTestId: "data-test-id-primary",
    text: "BimboWande",
  },
};

export const TitleSecondary: Story = {
  args: {
    variant: "secondary",
    link: "#",
    dataTestId: "data-test-id-secondary",
    text: "BimboWande",
  },
};
