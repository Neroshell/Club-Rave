// Eventdata.js
import React from 'react';
import EventCard from './EventCard';
import eventinfo from './Eventinfo';



const Eventdata = () => {

  
  return (
    <div className='event-data'>
      {eventinfo.map((event, index) => (
        <EventCard
          key={index}
          icon = {event.icon}
          photo={event.photo}
          date={event.date}
          name={event.name}
        />
      ))}
    </div>
  );
};

export default Eventdata;
