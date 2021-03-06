import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5> Entrar em contato </h5>
      <h2> Contate-me </h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail/>
            <h4> Email </h4>
            <h5>sabrinapvaz@gmail.com</h5>
            <a href='mailto:sabrinapvaz@gmail.com'>Envie um email</a> 
          </article>
          <article className='contact__option'>
          <AiFillLinkedin/>
            <h4> Linkedin </h4>
            <h5>Sabrina Pereira Vaz</h5>
            <a href='https://www.linkedin.com/in/sabrina-pereira-vaz-1105b4200/'>Envie uma mensagem</a> 
          </article>
        </div>
        {/*  FIM DAS OPÇÕES D ECONTATO */}
      </div>
    </section>
  )
}
export default Contact