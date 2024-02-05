import React, { useState } from 'react'
import './Navbar.css'
import {Link,useLocation} from 'react-router-dom';
import logo from './logo.png'

function Navbar() {
  const location = useLocation();
  const tabs={home:0,schedule:0,events:0,gallery:0,contact:0}
  const [isActive,setIsActive] = useState({home:1,schedule:0,events:0,gallery:0,contact:0})
  
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
    function check(props){
      console.log(props.target.id)
      let id=props.target.id
      tabs[id]=1
      setIsActive({...tabs})
     }
  
  return (
    <div>
       <div className='navtoponly' ><img   src={logo}/><div>MST</div></div>
    
    <div className='nav'>
    <div className='logo'><Link id='logo'><div className='logoimage'><img src={logo}/></div><div className='wname'>MST</div></Link></div>
      
      
      <Link to="/" className='link' >
        <div  className='icon' >
          <i class="fa-solid fa-house fa-lg" style={{color:isActive.home? 'goldenrod' : ''}}></i>
        </div>
        <div className='navtext'  onClick={check} id="home" style={{color:isActive.home?'goldenrod':''}}>
          Home
        </div>
      </Link>
      <Link to="/schedule" >
        <div className='icon'  >
          <i class="fa-regular fa-calendar fa-lg" style={{color:isActive.schedule? 'goldenrod' : ''}}  ></i>
        </div>
        <div className='navtext'  onClick={check} id="schedule" style={{color:isActive.schedule? 'goldenrod' : ''}}>
          Schedule
        </div>
      </Link>
   
      <Link to="/events" >
        <div className='icon'>
          <i class="fa-solid fa-medal fa-lg" style={{color:isActive.events? 'goldenrod' : ''}}></i>
        </div>
        <div className='navtext' onClick={check} id="events" style={{color:isActive.events? 'goldenrod' : ''}}>
          Events
        </div>
      </Link>
      <Link to="/gallery" className='Link'  >
        <div className='icon' >
          <i class="fa-regular fa-image fa-lg" style={{color:isActive.gallery? 'goldenrod' : ''}}></i>
        </div>
        <div className='navtext' onClick={check} id="gallery" style={{color:isActive.gallery? 'goldenrod' : ''}}>
          Gallery
        </div>
      </Link>
      
      <Link to="/contact" >
        <div className='icon' >
          <i class="fa-regular fa-envelope fa-lg" style={{color:isActive.contact? 'goldenrod' : ''}}></i>
        </div>
        <div className='navtext' onClick={check} id="contact" style={{color:isActive.contact? 'goldenrod' : ''}}>
          Contact
        </div>
      </Link>
      
      
    </div>
    <div className='invisiblefooter' ></div>
   
    </div>
  )
}

export default Navbar
