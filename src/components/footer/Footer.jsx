import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer a'> Ir para home </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre mim</a></li>
        <li><a href='#experience'>Experiências</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; SabrinaPVaz. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
