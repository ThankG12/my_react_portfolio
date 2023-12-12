import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {PiUsersThreeFill} from 'react-icons/pi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
             <img src= {ME} alt="About__me"/>
          </div>
      </div>

      <div className="about__content">
       <div className= "about__cards">
        <article className='about__card'>
          <BsAward className='about__icon'/>
          <h5>Experience</h5>
          <small>10+ Years Working</small>
          </article> 

        <article className='about__card'>
          <PiUsersThreeFill className='about__icon'/>
          <h5>Clients</h5>
          <small>400+ Wordwide</small>
          </article> 

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>80+ Completed</small>
          </article> 
        </div>

        <p>
          I am committed to continuous learning and staying up-to-date with the latest industry trends and technologies. 
          I regularly explore new frameworks, libraries, and best practices to enhance my development skills. 
          I believe in writing clean, maintainable code and follow industry-standard coding conventions and design patterns.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
