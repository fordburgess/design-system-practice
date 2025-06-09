import type { Meta, StoryObj } from '@storybook/react-vite';
import ThemeProvider from '../../contexts/ThemeContext';
import PlaceholderImage from '../../assets/french-alps.webp';
import '../../styles/index.css';
import Card from './Card';
import type { ThemeName } from '../../contexts/ThemeContext';
import { themeConfig } from '../../styles/themeConfig';

const meta = {
  component: Card,
  argTypes: {
    initialTheme: {
      control: { type: 'select' },
      options: ['default', 'defaultDark', 'defaultBlue']
    }
  },
  args: {
    initialTheme: 'default' as ThemeName
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.args.initialTheme as ThemeName;

      return (
        <ThemeProvider theme={selectedTheme}>
          <div
            className='w-[1200px] h-[700px] flex justify-center py-12'
            style={{ backgroundColor: themeConfig[selectedTheme].palette.layout.background }}
          >
            <Story />
          </div>
        </ThemeProvider>
      )
    }

  ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    title: "I Love Javascript",
    description: "Bonjour tout le monde, j'écris des bêtises parce que je sais pas quoi écrire",
    image: PlaceholderImage,
  }
}
