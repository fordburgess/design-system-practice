import React, { type ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const themeStyles = useTheme().themeStyles;

  return (
    <div
      className='h-dvh w-dvw flex flex-col pt-[6vh] md:pt[8vh]'
      style={{
        backgroundColor: themeStyles.palette.layout.background
      }}
    >
      <Navbar />
      {children}
    </div>

  )
}

export default Layout
