import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';
import { ButtonSize, ButtonVariant } from './type';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    variant: { control: 'select', options: ButtonVariant },
    size: { control: 'select', options: ButtonSize },
    children: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
