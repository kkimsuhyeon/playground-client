import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
  },
};
