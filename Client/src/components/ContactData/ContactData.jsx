import React from 'react';
import './ContactData.css';
import ContactForm from './ContactForm.jsx';

const ContactData = () => {
  return (
    <div className='contact-data'>
      <div className='contact-map'>
        <iframe
          title="Location Map"
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=rave%20accra+(rave%20accra)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
      <div className='form-info'>
        <div className='form-info-content'>
          <h1>Did you know?</h1>
          <p>For more information, please fill out the form located here or call (233) 123-457. For other inquiries email: info@raveaccra.com</p>
          <p>If you are inquiring about your items lost during your time here, please provide any identifying information of your lost items such as name, brand, colour, etc and we'll be in touch if it turns up.</p>
          <p>The management reserves the right to change drink and admission prices from time to time. Please email info@raveaccra.com for further information.</p>
        </div>

        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactData;
