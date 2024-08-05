import React, { useEffect } from 'react'; // Added useEffect
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ title, drinks }) => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div className="drinks-card" data-aos='fade-up'>
      <h1 className="drinks-card-h1">{title}</h1>
      <ul className="drinks-card-list">
        {drinks.map((drink, index) => (
          <li key={index}>{drink.name}...........{drink.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
