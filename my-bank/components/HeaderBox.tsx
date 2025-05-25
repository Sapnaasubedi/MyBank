import { HeaderProps } from '@/types'
import React from 'react'

const HeaderBox = ({type= 'title',title, subText, user}: HeaderProps) => {
  return (
   <div className="header-box">
    <h1 className='header-box-title'>
      {title}
      {type === 'greeting' &&( <span className="text-bankGradient">
        &nbsp; {user}
      </span>

      ) }
    </h1>
    <p className="header-box-subtext">{subText}</p>
   </div>
  )
}

export default HeaderBox
