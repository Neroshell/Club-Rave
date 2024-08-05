import React from 'react';
import './BottleData.css';
import Card from '../Card/Card.jsx'; // Import the Card component
import drinksData from '../Card/CardData.js'; // Import the drinksData

const BottleData = () => {
  return (
    <div>
    <div className='bottle-data'>
      {drinksData.map((category, index) => (
        <Card
          key={index}
          title={category.title} // Pass the category title as prop
          drinks={category.drinks} // Pass the array of drinks as prop
        />
      ))}
        
    </div>
        <p className='bottle-data-p'>Prices are subject to change without notice</p>
    </div>
  );
};

export default BottleData;
