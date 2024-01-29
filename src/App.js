
import { useState,useEffect } from 'react';
import './App.css';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';

import GalleryPage from './GalleryPage';
import Footer from './Footer';
import About2 from './About2';

import SportsEvents from './SportsEvents';
import InformalEvents from './InformalEvents';

// import Gallery from './Gallery';



  function App() {

  //  const images = ["https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg","https://img0.junaroad.com/uiproducts/18372339/zoom_0-1653023799.jpg","https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/10/Masthead-Mobile@2x-3.jpg","https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/10/Masthead-Mobile@2x-3.jpg"];
  

   
 
 
  return (
   
   <Router> 
      
     
    <Navbar/>
        
        
      
    <Routes baseName="/">
        
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        <Route path='/events/sportsevents' element={<SportsEvents/>} />
          <Route path='/events' element={<InformalEvents/>} />
        
        </Routes>

        <Footer/>
        
      </Router>
    

  );
}

export default App;
