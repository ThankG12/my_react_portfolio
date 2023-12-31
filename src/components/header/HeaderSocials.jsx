import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/oluwaseun-adekunle-38a994278/" rel='noreferrer'><BsLinkedin/></a>
      <a href="https://github.com/ThankG12" rel='noreferrer'><BsGithub/></a>
      <a href="https://dribbble.com/ThankG12?onboarding=true" rel='noreferrer'><BsDribbble/></a>
    </div> 
  )
}

export default HeaderSocials
