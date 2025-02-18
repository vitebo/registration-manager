import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '~/components/Buttons';

const variants = ['primary', 'success', 'danger', 'warning', undefined] as const;

const sizes = ['sm', undefined] as const;

const meta: Meta<typeof Button> = {
  title: 'Src/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn(), children: 'Click me' },
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: variants
    },
    size: {
      control: {
        type: 'select'
      },
      options: sizes
    },
    onClick: {
      action: 'click'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me'
  }
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : 'Default'}
        </Button>
      ))}
    </div>
  )
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {sizes.map((size) => (
        <Button key={size} {...args} size={size}>
          {size || 'Default'}
        </Button>
      ))}
    </div>
  )
};
