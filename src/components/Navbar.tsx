import { useTheme } from '../contexts/ThemeContext';
import Select from './Select';
import { themeConfig } from '../styles/themeConfig';

const Navbar = () => {
  const currentTheme = useTheme().theme;
  const themeStyles = useTheme().themeStyles;
  const changeTheme = useTheme().setTheme;

  return (
    <div
      className='fixed top-0 w-full h-[6vh] md:h-[8vh] flex justify-end items-center px-4 z-100'
      style={{
        backgroundColor: themeStyles.palette.components.background
      }}
    >
      <Select
        options={
          Object.entries(themeConfig).map(([key, value]) => ({ text: value.mode, value: key }))
        }
        defaultValue={currentTheme}
        action={changeTheme}
      />
    </div>
  )
}

export default Navbar
