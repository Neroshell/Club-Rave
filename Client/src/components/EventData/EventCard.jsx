import React, { useState } from 'react';
import { useEffect } from 'react';
import './Eventdata.css';
import Button from '../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyModal from '../Modal/MyModal.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventCard = ({ icon, photo, date, name }) => {
  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])
  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = () => {
    setShowModal(true);
    console.log("Modal should show");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
   
  return (
    <div className='event-card' data-aos='slide-up'>
      <div className='event-img'>
        <img src={photo} alt='event' />
      </div>
      <div className='event-info'>
        <div className='date_container'>
            <div><FontAwesomeIcon icon={icon} /></div>
            <p>{date}</p>
       </div>
        <h2>{name}</h2>
        <Button name='Reserve Table' onClick={handleShowModal}/>
      </div>
      <MyModal show={showModal} onHide={handleCloseModal} />
    </div>
  );
};

export default EventCard;
