import type { Meta, StoryObj } from '@storybook/svelte';
import Menu from './Menu.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Scenario/Compare Scenario Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
