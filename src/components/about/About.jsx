import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Saiba mais </h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} />
          </div>
        </div>

        <div className="about__content">
          <div classname="about__cards">

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>
                <a href="https://cursos.alura.com.br/user/sabrinapvaz/fullCertificate/9417875d5b0e10ed6842fe9ae1bd615d">Cursos</a>
              </h5>
              <small> Com certificações </small>
          </article>
           
          </div>

          <p>
          Atualmente desenvolvo aplicações web, inserida no contexto de times ágeis, contribuindo para 
          construção, análise e desenvolvimento de API's REST em Java com SprngBoot, realizo testes unitários com
          Junit, controle de versionamento de código Git com Microsoft Azure e Postgress como banco de dados relacional.
      
          Possuo inglê niver Upper B2 com certificação pela EFSET English.
          
          </p>

          <a href="#contact" className='btn btn-primary'> Entre em contato </a>
        </div>
       </div> 
    </section>
  )
}
export default About



