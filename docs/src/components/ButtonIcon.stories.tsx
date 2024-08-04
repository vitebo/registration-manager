import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import { ButtonIcon } from '~/components/Buttons';

const variants = ['primary', undefined] as const;

const meta: Meta<typeof ButtonIcon> = {
  title: 'Src/Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn(), children: <HiOutlineArrowLeft /> },
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: variants
    },
    onClick: {
      action: 'click'
    }
  }
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {variants.map((variant) => (
        <ButtonIcon key={variant} {...args} variant={variant}>
          <HiOutlineArrowLeft />
        </ButtonIcon>
      ))}
    </div>
  )
};
