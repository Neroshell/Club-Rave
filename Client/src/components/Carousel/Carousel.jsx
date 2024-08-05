import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import two from '../../assets/rav_vid2.mp4';
import "./Carousel.css";
import Button from '../Buttons/Button.jsx';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const buttonStyle = {
  margin: '50px auto',
  padding: '7px',
 
 
};


const MyCarousel = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  return (
    <div className='carousel_cont'> 
      <Carousel interval={3000} controls={false} className='carousel-main-div'>
        <Carousel.Item  className='Carousel-Item ' >
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline preload="auto">
              <source src={two} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading'>
              <h1 data-aos = 'fade'>Xperience The Thrill Of  Accra's Nightlife At <span style={{color: " #EC53B0", fontWeight:'900'}}>Rave.</span></h1> 
              <Link to="/about">
                  <Button style={buttonStyle} name="Learn More.." className='learn-button'/>
              </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline preload="auto">
              <source src={two} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading' >
          <h1 >Elevate Your <span style={{color: " #EC53B0"}}>Nightlife</span> Experience To New Heights  </h1> 
          <Link to="/about">
                  <Button style={buttonStyle} name="Learn More.." className='learn-button'/>
              </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline preload="auto">
              <source src={two} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading'>
          <h1>Discover The Pulse Of Accra's After-dark Allure At <span style={{color: " #EC53B0"}}>Rave.</span>  </h1> 
          <Link to="/about">
                  <Button style={buttonStyle} name="Learn More.." />
              </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
