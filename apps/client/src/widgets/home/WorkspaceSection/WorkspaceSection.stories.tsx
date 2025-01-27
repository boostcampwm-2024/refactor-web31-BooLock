import { Meta, StoryObj } from '@storybook/react';

import { WorkspaceSection } from './WorkspaceSection';

const meta: Meta<typeof WorkspaceSection> = {
  title: 'widgets/home/WorkspaceSection',
  component: WorkspaceSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkspaceSection>;

export const Default: Story = {
  args: {
    // propsname: value,
  },
};
