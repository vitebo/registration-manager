import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Confirm } from '~/components/Confirm';

const meta: Meta<typeof Confirm> = {
  title: 'Src/Components/Confirm',
  component: Confirm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    title: 'Aprovar cadastro',
    message: 'Deseja realmente aprovar o cadastro de Vitebo?',
    onConfirm: fn(),
    onCancel: fn()
  },
  argTypes: {
    title: {
      control: 'text'
    },
    message: {
      control: 'text'
    },
    onConfirm: {
      action: 'confirm'
    },
    onCancel: {
      action: 'cancel'
    }
  }
} satisfies Meta<typeof Confirm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
