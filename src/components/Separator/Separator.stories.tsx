import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Separator from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <div className='flex gap-4'>
        <div>123</div>
        <Separator {...args} orientation='vertical' />
        <div>123</div>
      </div>
    );
  },
};
