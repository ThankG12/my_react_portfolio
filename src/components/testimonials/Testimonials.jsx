/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Mrs Omotayo',
    review: 'I would highly recommend Oluwaseun to anyone looking for a talented and dedicated web designer. His professionalism, expertise, and commitment to excellence make him a top choice. I am extremely satisfied with the outcome of my website and look forward to working with Oluwaseun on future projects. Thank you, Oluwaseun, for your exceptional work!'
  },
  {
    avatar: AVTR2,
    name: 'Mr Elijah',
    review: 'Working with Oluwaseun on my website was an absolute pleasure! From the initial consultation to the final delivery, he exceeded my expectations at every step of the way. His expertise, creativity, and attention to detail truly brought my vision to life.'
  },
  {
    avatar: AVTR3,
    name: 'Mr Dayo',
    review: 'I would highly recommend Oluwaseun to anyone looking for a talented and dedicated web designer. His professionalism, expertise, and commitment to excellence make him a top choice. I am extremely satisfied with the outcome of my website and look forward to working with Oluwaseun on future projects. Thank you, Oluwaseun, for your exceptional work!'
  },
  {
    avatar: AVTR4,
    name: 'Mr Charles',
    review: 'Oluwaseun ability to understand and translate my ideas into a visually stunning and user-friendly website was remarkable. He patiently listened to my requirements, offered valuable insights, and collaborated closely with me throughout the entire process. I appreciated his prompt communication and his willingness to incorporate any changes I requested.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
             <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
