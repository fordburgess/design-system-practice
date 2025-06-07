import React, { type ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type CardProps = {
  title: string,
  description: string,
  image: string,
  header?: ReactNode,
  footer?: ReactNode,
  height?: number,
  width?: number,
}

const Card: React.FC<CardProps> = ({ title, description, image, header, footer }) => {
  const themeStyles = useTheme().themeStyles;

  return (
    <div
      className='relative rounded-sm overflow-hidden mb-4 min-h-full w-[90%] md:h-2/3 md:min-h-0 md:w-[40%] md:mb-0'
      style={{
        backgroundColor: themeStyles.palette.components.background,
        boxShadow: themeStyles.palette.components.boxShadow
      }}
    >
      {
        header && header
      }
      <img
        className='w-full h-1/2 object-center object-cover'
        src={image}
        alt='card-image'
      />
      <div className='h-1/2 p-4'>
        <h1 className='mb-4' style={{ color: themeStyles.palette.text.primary }}>{title}</h1>
        <p style={{ color: themeStyles.palette.text.secondary }}>{description}</p>
      </div>
      {
        footer && footer
      }
    </div>
  )
}

export default Card
