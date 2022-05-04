import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sabrina-pereira-vaz-1105b4200/" target="_blank"> <BsLinkedin/></a>
        <a href="https://github.com/SabrinaPVaz" target="_blank"> <FaGithub/> </a>

    </div>
  )
}

export default HeaderSocial
