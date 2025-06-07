import React from 'react';
import DotMenu from '../assets/dotmenu.png';

const CardHeader = () => {

  return (
    <div className='absolute top-0 w-full px-2 flex justify-end'>
      <img
        src={DotMenu}
        alt='dot-menu'
        style={{
          height: '2rem',
          width: '2rem',
        }}
      />
    </div>
  )
}

export default CardHeader
