import React from 'react'
import { Helmet } from 'react-helmet';
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx';
import Footer from '../Footer/Footer.jsx';
import PageTitle from '../pageTitle/PageTitle.jsx';
import ContactData from '../ContactData/ContactData.jsx';


const Contact = () => {
  return (
    <div style={{ backgroundColor: '#FFE5E5' }}>
    <Helmet>
      <title>Contact | Rave</title>
    </Helmet>
    <NavbarTwo />
    <PageTitle title= "Contact Us"  subtitle= 'Home - Contact us'/>
    <ContactData />
    
    <Footer />
  </div>
  )
}

export default Contact
