import type { Meta, StoryObj } from '@storybook/react-vite';
import ThemeProvider from '../../contexts/ThemeContext';
import PlaceholderImage from '../../assets/french-alps.webp';
import '../../styles/index.css';

import Card from './Card';

const meta = {
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className='w-[1200px] h-[700px] flex justify-center py-2'>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    title: "I Love Javascript",
    description: "Bonjour tout le monde, j'écris des bêtises parce que je sais pas quoi écrire",
    image: PlaceholderImage
  }
}
