import React from 'react';
import { Helmet } from 'react-helmet';
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx';
import PageTitle from '../pageTitle/PageTitle.jsx';
import Footer from '../Footer/Footer.jsx';
import BottleData from  '../BottleData/BottleData.jsx';

const BottleService = () => {
  return (
    <div style={{ backgroundColor: '#FFE5E5' }}>
      <Helmet>
        <title>Bottle | Rave</title>
      </Helmet>
      <NavbarTwo />
      <PageTitle title= "Bottle Services"  subtitle= 'Home - Bottle services'/>
      <BottleData />
      <Footer />
    </div>
  );
}

export default BottleService;
