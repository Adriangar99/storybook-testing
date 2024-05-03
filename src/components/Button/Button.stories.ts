import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonType } from "./ButtonType";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: "Secondary",
  },
};
