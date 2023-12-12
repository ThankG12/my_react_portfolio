import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>KYC-AGENT</h3>
          </div>

          <ul className='service__list'>
           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Proficiency in using KYC tools, database, and software application.
            </p>
            
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Strong ethical mindset and the ability to maintain sensitive and confidential information.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Adaptable to changing regulatory requirement and industry tools.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Ability to work independently and make decision within established guidelines.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Attention to details and the ability to analyze and interpret customer information accurately.
            </p>
           </li>
          </ul>
        </article>
        {/* END OF KYC-AGENT */}



        <article className='service'>
          <div className="service__head">
            <h3>IT-SUPPORT</h3>
          </div>

          <ul className='service__list'>
           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Attention to detail and the ability to analyze and interpret customer information accurately.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Excellent research and investigative skills to identify potential risks and discrepancies.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Good communication skills to interact with customers and explain KYC requirements clearly.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Strong ethical mindset and the ability to handle sensitive and confidential information.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Proficiency in using KYC tools, databases, and software applications.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Ability to work independently and make decisions within established guidelines.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Adaptable to changing regulatory requirements and industry trends.
            </p>
           </li>
          </ul>
        </article>
        {/* END OF IT-SUPPORT*/}


        <article className='service'>
          <div className="service__head">
            <h3>WEB-DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Register a suitable domain name that reflects your professional identity.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Develop a responsive website that adapts seamlessly to different screen sizes.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Apply CSS styles to enhance the visual appearance of your website.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Design a layout that effectively organizes your content.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Implement a clear and intuitive navigation system.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Proficiency in HTML, CSS, and JavaScript.
            </p>
           </li>

           <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Knowledge of version control systems (e.g., Git).
            </p>
           </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}


        


      </div>
    </section>
  )
}

export default Services
