import React from 'react'
import { Helmet } from 'react-helmet';
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx';
import PageTitle from '../pageTitle/PageTitle.jsx';
import Footer from '../Footer/Footer.jsx';
import BirthdayData from  '../BirthdayData/BirthdayData.jsx';



const BirthdayService = () => {
  return (
    <div>
     <Helmet>
         <title>Birthday Service | Rave</title>
      </Helmet>
        <NavbarTwo/>
        <PageTitle title= "Birthday Service"  subtitle= 'Home - Birthday-service'/>
        <BirthdayData/>
        <Footer/>
      
    </div>
  )
}

export default BirthdayService;
