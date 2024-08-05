import React from 'react';
import logo from '../../assets/rave_logo.png';
import "./Footer.css";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import bgImageone from '../../assets/club-house3.jpg'; // Corrected background image import
import { Link } from 'react-router-dom';


const Footer = () => {

  const buttonStyles = {
    backgroundColor: '#EC53B0',
    color: '#FFE5E5',
    padding: '12px 30px',
    margin: '20px auto',
    display: "block",
    '@media (min-width: 768px)': { // Adjust margin-top for large screens
      padding: '10px 30px',
    },
    '&:hover': {
      backgroundColor: "rgba(49, 25, 107, 0.6)"   
    },
  };
  const date = new Date();
  const year = date.getFullYear();

  const infoData = [
    {
      icon: faLocationDot,
      title: 'Rave Night Club',
      text: 'Accra road Labardi accra'
    },
    {
      icon: faPhone,
      title: 'Contact phone',
      text: '+233 50 6097 77'
    },
    {
      icon: faClock,
      title: 'Working Days',
      text: 'Wednesday - Sunday '
    }
  ];

  return (
    <div className='footer' style={{ backgroundImage: `url(${bgImageone})` }}>
    
      <ul className='footer-ul'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/event" className="nav-link">Event</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
      </ul>
      
     
      <div className='img-container'>
        <img src={logo} alt="Logo" />
      </div>
      <form>
        <h3 style={{ color: '#FFE5E5', fontSize: '30px', fontWeight: '800' }}>Newsletter</h3>
        <input type="text" placeholder='Enter your email' /> 
        <Button variant="contained" sx={buttonStyles}>Subscribe</Button>
      </form>

      <div className='info'>
        {infoData.map((item, index) => (
          <div className='info-data' key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="text-wrapper">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='icon-data'>
      <a href="https://www.instagram.com/raveaccra?igsh=YjZlYjJxeDZrZXd4" >
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://x.com/raveaccra?t=V5P6zcIRHL8G4IOinc-vfw&s=08" >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/raveaccra?igsh=YjZlYjJxeDZrZXd4" >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      </div>
        
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {year} Copyright<a className='text-white' href='https://mdbootstrap.com/'> Rave Accra</a>
      </div>
    </div>
  );
}

export default Footer;
