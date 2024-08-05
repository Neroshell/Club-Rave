import React from 'react'
import { Helmet } from 'react-helmet';
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx';
import PageTitle from '../pageTitle/PageTitle.jsx';
import Footer from '../Footer/Footer.jsx';
import AboutData from  '../AboutData/AboutData.jsx';

const About = () => {
  return (
    <div>
      <Helmet>
         <title>About Us | Rave</title>
      </Helmet>
      <NavbarTwo />
      <PageTitle title= "About us"  subtitle= 'Home - About'/>
      <AboutData />
      <Footer />

      
    </div>
  )
}

export default About
