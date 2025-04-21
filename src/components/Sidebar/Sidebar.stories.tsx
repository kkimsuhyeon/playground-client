import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarProvider, SidebarTrigger } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Sidebar' },
  render: args => {
    return (
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <main>
          {args.children}
        </main>
      </SidebarProvider>
    );
  },
};
