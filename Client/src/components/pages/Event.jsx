import React from 'react'
import { Helmet } from 'react-helmet';
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx';
import Footer from '../Footer/Footer.jsx';
import PageTitle from '../pageTitle/PageTitle.jsx';
import EventData from '../EventData/Eventdata.jsx';



const Event = () => {
  return (
    <div>

      <Helmet>
        <title>Event | Rave</title>
      </Helmet>
        <NavbarTwo/>
        <PageTitle title= "Upcoming Events"  subtitle= 'Home - Event'/>
        <EventData />
        <Footer/>

    </div>
  )
}

export default Event
