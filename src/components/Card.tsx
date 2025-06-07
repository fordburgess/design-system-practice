import React, { type ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Typography from './Typography';

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
      className='relative rounded-sm overflow-hidden mb-4 min-h-full w-[90%] md:h-2/3 md:min-h-0 md:w-[48%] md:mb-0 lg:w-[45%]'
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
        <Typography variant="h1">{title}</Typography>
        <Typography variant="p">{description}</Typography>
      </div>
      {
        footer && footer
      }
    </div>
  )
}

export default Card
