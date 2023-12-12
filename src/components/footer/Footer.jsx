/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo'>THANKGTECH</a>

       <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer__socials">
           <a href="https://www.facebook.com/Oluwaseun.adekunke1206/"><FaFacebookF/></a>
           <a href="https://github.com/ThankG12"><BsGithub/></a>
           <a href="https://twitter.com/ThankGTech"><IoLogoTwitter/></a>
       </div>

       <div className="footer__copyright">
        <small>&copy; THANKGTECH. All rights reserved.</small>
       </div>
    </footer>
  )
}

export default Footer
