import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';
import logo from './logo.png'
import mnit_logo from './Mnit_logo.svg'

function Footer() {
  return (
    <>
    <div className='footer'>
    <div className='mnit-logo'><img src={mnit_logo}/><h6>MNIT</h6></div>
            <div className='footer-logo'><img src={logo}/><h6>MST</h6></div>
            
           
            <div className='quick-links-container'>
            <div className='quick-links-title'>Quick Links</div>
            <div className='quick-links'>
            <Link to="/" >Home</Link>
            <Link to="/schedule" >Schedule</Link>
        
            <Link to="/events" >Events</Link>
            <Link to="/gallery" className='Link'  >Gallery</Link>
            
            <Link to="/contact" >Contact</Link>
            </div>
            </div>
      {/* <div></div> */}
    </div>
    <div className='footer2' style={{height:'5vh',backgroundColor:'#FFBF00',display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
      © Copyright Malviya Sports tournament. All Rights Reserved
    </div>
    <div className='invisible-footer'></div>
    </>
  )
}

export default Footer
