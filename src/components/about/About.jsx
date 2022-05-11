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
          Currently i'm intern with web applications into agile team, contributing to the construction , 
          analysis and development ​REST API's, getting experience with Java, Spring Boot, unit test with JUnit, 
          Git with Microsoft Azure, Postgress as database.
      
          I have Intermediate English certified by EFSET English (upper level B2).

          Focus on obtaining certifications and experience in technology, encouraging women and showing 
          that we can enter the most diverse environments in search of gender equality.           
          </p>

          <a href="#contact" className='btn btn-primary'> Entre em contato </a>
        </div>
       </div> 
    </section>
  )
}
export default About



