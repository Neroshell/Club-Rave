import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import event_img from '../../assets/event_img.jpeg';
import event_img2 from '../../assets/event-one.jpg';

const UpcomingEventsCarousel = () => {
  return (
    <div className='carousel-container'>
      <Swiper
       modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10} // Adjust the space between slides if needed
        slidesPerView={1} // Initially show one slide
        breakpoints={{
          576: {
            slidesPerView: 1, // Show one slide on small devices (landscape phones)
          },
          768: {
            slidesPerView: 2, // Show two slides on medium devices (tablets)
          },
          992: {
            slidesPerView: 3, // Show three slides on large devices (desktops)
          },
        }}
             navigation={{ clickable: true,  }}
             pagination={{ clickable: true }}
             autoplay={{ delay: 2000, pauseOnMouseEnter: true }} 
             loop={true}
      >
        {/* SwiperSlides as children */}
        <SwiperSlide style={{height: 'auto'}}>
          <div className='swiper-slide'>
            <img className='carousel-image' src={event_img} alt="Event" />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{height: 'auto'}}>
          <div className='swiper-slide'>
            <img className='carousel-image' src={event_img2} alt="Event" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{height: 'auto'}}>
          <div className='swiper-slide'>
            <img className='carousel-image' src={event_img} alt="Event" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{height: 'auto'}}>
          <div className='swiper-slide'>
            <img className='carousel-image' src={event_img2} alt="Event" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{height: 'auto'}}>
          <div className='swiper-slide'>
            <img className='carousel-image' src={event_img} alt="Event" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{height: 'auto'}}>
          <div className='swiper-slide'>
            <img className='carousel-image' src={event_img} alt="Event" />
          </div>
        </SwiperSlide>
      </Swiper>
     
     
    </div>
  );
};

export default UpcomingEventsCarousel;
