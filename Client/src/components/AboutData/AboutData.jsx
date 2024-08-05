import React from 'react'
import { useEffect } from 'react';
import './AboutData.css'
import image from '../../assets/club-house3.jpg';
import img2 from '../../assets/rave1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [

    {
        imageOne: img2
    },
    
    {
        imageOne: image
    },
    
    {
        imageOne: img2
    },
    {
        imageOne: image
    },
]

const AboutData = () => {
    useEffect(() => {
        AOS.init({duration: 3000});
      }, [])
  return (
    <div className='about-data'>
             <div className='about-data-content' data-aos='fade'>
                    <h2>Unleash Your Nightlife Fantasy with Endless Revelry</h2>
                    <p>At ClubRave, we are more than just a venue; we are the heartbeat 
                    of Accra's nightlife, pulsating with energy and rhythm. Step into our world,
                    where every moment is an electrifying symphony of music, 
                    lights, and unforgettable experiences.</p>
                   
                    <h4>Best night life Experience</h4>
                    <p>Immerse yourself in the perfect fusion of music and live performances
                    curated to set new standards in entertainment.  
                    Our stage is graced by the finest Accra DJs and live bands, igniting the dance 
                    floor with infectious beats that resonate through the night.</p>
            </div>
             <div className='about-image-sect'>
                 {images.map((image, index) => (
                    <div data-aos='slide-up' className='about-image-container' key={index}>
                         <img src={image.imageOne} alt={`Image ${index + 1}`} />
             </div>
))}


            </div>
    </div>
  )
}

export default AboutData
