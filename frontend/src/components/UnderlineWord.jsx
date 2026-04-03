import React from 'react'

function UnderlineWord({children, img}) {
  return (
    <span className='relative inline-block'>
        {children}
        <img
            src={img}
            alt=''
            className='absolute -bottom-2 w-full -z-10 '
        />
    </span>
  )
}

export default UnderlineWord;