import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import ShareLight from '../assets/share-light.png';
import ShareDark from '../assets/share-dark.png';

type CardFooterProps = {
  credit: string,
}

const CardFooter: React.FC<CardFooterProps> = ({ credit }: CardFooterProps) => {
  const theme = useTheme().theme

  return (
    <div
      className='absolute bottom-0 w-full flex justify-between p-2'
    >
      <div></div>
      <p className='text-sm'>{credit}</p>
      <img
        src={theme == 'default' ? ShareDark : ShareLight}
        alt='share-icon'
        style={{ height: '1rem', width: '1rem' }}
      />
    </div>
  )
}

export default CardFooter
