import React, { useState } from 'react'
import './Navbar.css'
import {Link,useLocation} from 'react-router-dom';
import logo from './logo.png'

function Navbar() {
  const location = useLocation();

  
  const currentPath = location.pathname;
const [homecolor,sethomecolor]=useState('goldenrod');
// if(currentPath==='/'){
//   sethomecolor('goldenrod');

// }
  //  console.log(currentPath);

    // const navstyle={
    //   if(currentPath ==='/')
    //   zIndex:-1
    // else
    // zIndex: 0
    // }
   
  
  return (
    <div>
       <div className='navtoponly' ><img   src={logo}/><div>MST</div></div>
    
    <div className='nav'>
    <div className='logo'><Link id='logo'><div className='logoimage'><img src={logo}/></div><div className='wname'>MST</div></Link></div>
      
      
      <Link to="/" className='link' ><div id='home'  className='icon'><i class="fa-solid fa-house fa-lg"></i></div><div className='navtext'>Home</div></Link>
      <Link to="/schedule" ><div className='icon'><i class="fa-regular fa-calendar fa-lg"></i></div><div className='navtext'>Schedule</div></Link>
   
      <Link to="/events" ><div className='icon'><i class="fa-solid fa-medal fa-lg"></i></div><div className='navtext'>Events</div></Link>
      <Link to="/gallery" className='Link'  ><div className='icon'><i class="fa-regular fa-image fa-lg"></i></div><div className='navtext'>Gallery</div></Link>
      
      <Link to="/contact" ><div className='icon'><i class="fa-regular fa-envelope fa-lg"></i></div><div className='navtext'>Contact</div></Link>
      
      
    </div>
    <div className='invisiblefooter' ></div>
   
    </div>
  )
}

export default Navbar
