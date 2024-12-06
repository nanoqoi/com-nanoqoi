import type { Meta, StoryObj } from '@storybook/react'

import { Header as Component } from '.'

const meta = {
  title: 'Components/Header',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {}
