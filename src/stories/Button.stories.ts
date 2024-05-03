import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'My Test/Button',
  component: Button,
  // ...
};
    
export default meta;

type Story = StoryObj<typeof Button>;
  
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click',
    backgroundColor: 'red'
  }
};


  export const Warning: Story = {
    args: {
      primary: false,
      label: 'Delete now',
      backgroundColor: 'red',
    }
  };