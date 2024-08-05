import React from 'react';
import { useEffect } from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/club-house3.jpg';
import img2 from '../../assets/rave1.jpg';
import img3 from '../../assets/club-house3.jpg';
import img4 from '../../assets/event_img.jpeg';


const itemData = [
  { img: img1, title: 'Image 1' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },
  { img: img4, title: 'Image 4' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },
  { img: img3, title: 'Image 3' },
  { img: img3, title: 'Image 3' },
  // Add more image data as needed
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])
  return (
    <div className='gallery'>
    <div className='gallery-heading' data-aos='fade'>
      <h3>Gallery</h3>
      <h4>Event images</h4>
    </div>
    
      <div className='image-container' data-aos='slide-up'>
        {itemData.map((item, index) => (
          <div key={index} className='image-fluid'>
            <img src={item.img} alt={item.title} preload="auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

<div className='service-heading'>
<h3>Services</h3> 

<p> Gateways to limitless <span style={{color: ' #A076F9', fontWeight: 'bolder'}}>unforgettable </span><span style={{color: '#EC53B0',  fontWeight: 'bolder'}}> experiences.</span> </p>
</div>