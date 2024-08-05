import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Create a Home component
import BottleService from './pages/BottleService.jsx';
import Event from './pages/Event.jsx'; 
import About from './pages/About.jsx'; 
import Contact from './pages/Contact.jsx';
import BirthdayService from './pages/BirthdayService.jsx';



const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bottle-service" element={<BottleService />} />
        <Route path="/event" element={<Event/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/birthday-service" element={<BirthdayService/>} />
      </Routes>
    </Router>
  );
}

export default App;
