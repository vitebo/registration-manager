import type { Meta, StoryObj } from '@storybook/react';

import { Header, HeaderTitle } from '~/components/Header';

const meta: Meta<typeof Header> = {
  title: 'Src/Components/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    title: 'Header'
  },
  argTypes: {
    title: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Header {...args}>
      <HeaderTitle>{args.title}</HeaderTitle>
    </Header>
  )
};
