import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/duc-than-60566015b/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/thantienduc' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials