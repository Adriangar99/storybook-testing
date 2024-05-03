import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonType } from "./Button";
import { fn, userEvent, within } from "@storybook/test";

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

export const PrimaryHover: Story = {
  args: {
    type: ButtonType.Primary,
    label: "Primary hover",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    const button = canvas.getByText(args.label);
    await user.hover(button);
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: "Secondary",
  },
};

export const SecondaryHover: Story = {
  args: {
    type: ButtonType.Secondary,
    label: "Secondary hover",
  },
};
