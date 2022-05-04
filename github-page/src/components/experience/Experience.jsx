import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5> Quais habilidades possuo</h5>
      <h2>Minhas experiências</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'> Intermediário</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'> Intermediário</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'> Básico</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'> Básico</small>
            </div>
          </article>
        </div>
     </div>

     {/* FINAL DO FRONTEND */}
     <div className="experience__backend">   
     <h3>Backend</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'> Intermediário</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>SpringBoot</h4>
              <small className='text-light'> Intermediário</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'> Básico</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Postgress DB</h4>
              <small className='text-light'> Intermediário</small>
            </div>
          </article>
        </div>
    </div>
  </div>  
    </section>
  )
}
export default Experience