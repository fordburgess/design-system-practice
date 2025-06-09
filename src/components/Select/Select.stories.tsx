import { Meta, StoryObj } from '@storybook/react-vite'

import Select from './Select';
import ThemeProvider from '../../contexts/ThemeContext';

import '../../styles/index.css';

const meta = {
  component: Select,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {


  }
}
