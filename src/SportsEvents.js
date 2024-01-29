import React from 'react'
import  { useState } from 'react'
import './SportsEvents.css'
import sportscover from './sportscover.jpg'

import { useNavigate } from 'react-router-dom';
function SportsEvents() {
    const navigate = useNavigate();
   function handleInformalEvents(){
    navigate('/events');
   }
   function handleSportsEvents(){
    navigate('/events/sportsevents');
   }

    const [matter,setmatter]=useState("Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. ")
  return (
    <div className='sports-events'>
    <div className='events-cover'>
      <img width='100vw' src={sportscover}/>
    </div>
    <div className='buttons'><button className='button-1' onClick={handleInformalEvents}>Informal Events</button><button className='button-2' onClick={handleSportsEvents}>Sports Events</button></div>

    <div className='large'>
            <div className='medium1'>

                    <div className='small1'>
                        <div className='image1'><img src='https://ss-i.thgim.com/public/cricket/xh6sty/article66991228.ece/alternates/FREE_1200/bat-ball' /></div>
                        <div className='matter1'><h2>Cricket</h2>{matter} </div>
                    </div>


                    <div className='small2'>
                        <div className='matter2'><h2>Cricket</h2>{matter}</div>
                        <div className='image2'><img src='https://ss-i.thgim.com/public/cricket/xh6sty/article66991228.ece/alternates/FREE_1200/bat-ball' /></div>
                        
                    </div>
            </div>





            <div className='medium2'>

                    <div className='small1'>
                        <div className='image1'><img src='https://ss-i.thgim.com/public/cricket/xh6sty/article66991228.ece/alternates/FREE_1200/bat-ball' /></div>
                        <div className='matter1'><h2>Cricket</h2>{matter}</div>
                    </div>


                    <div className='small2'>
                        <div className='matter2'><h2>Cricket</h2>{matter}</div>
                        <div className='image2'><img src='https://ss-i.thgim.com/public/cricket/xh6sty/article66991228.ece/alternates/FREE_1200/bat-ball' /></div>
                        
                    </div>
            </div>





            <div className='medium3'>

                    <div className='small1'>
                        <div className='image1'><img src='https://ss-i.thgim.com/public/cricket/xh6sty/article66991228.ece/alternates/FREE_1200/bat-ball' /></div>
                        <div className='matter1'><h2>Cricket</h2>{matter}</div>
                    </div>


                    <div className='small2'>
                        <div className='matter2'><h2>Cricket</h2>{matter}</div>
                        <div className='image2'><img src='https://ss-i.thgim.com/public/cricket/xh6sty/article66991228.ece/alternates/FREE_1200/bat-ball' /></div>
                        
                    </div>
            </div>
    </div>
      
    </div>
  )
}

export default SportsEvents
