import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonial.css';

import nexticon from '../../assets/nexticon.png';
import backicon from '../../assets/backicon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonials = [
  {
    img: user_1,
    name: 'Emily Smith',
    location: 'Educady, US',
    text: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.',
  },
  {
    img: user_2,
    name: 'Michael Johnson',
    location: 'Educady, USA',
    text: 'The faculty members at Edusity are not just teachers but mentors. They have guided me through my educational journey and helped me grow personally and professionally.',
  },
  {
    img: user_3,
    name: 'Sarah Brown',
    location: 'Educady, USA',
    text: 'I appreciate the innovative learning methods at Edusity. The practical approach to education has given me confidence in my skills and future career.',
  },
  {
    img: user_4,
    name: 'John Davis',
    location: 'Educady, USA',
    text: 'Edusity has a vibrant campus culture that encourages networking and collaboration. I\'ve built lifelong friendships and gained invaluable experiences here.',
  },
];

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <img src={nexticon} alt="Next" className="nextBtn" />
      <img src={backicon} alt="Back" className="backBtn" />

      <Swiper
        modules={[Navigation, Pagination]} // Enable navigation and pagination
        slidesPerView={1}
        navigation={{
          nextEl: '.nextBtn',
          prevEl: '.backBtn',
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial.img} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.location}</span>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
