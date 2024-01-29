import React from 'react'
import mstlogo from './logo_ai.png'
import './About2.css'


function About2() {
  return (
    <div className='maincontainer'>
      <div className='heading'> Malaviya Sports Tournament - MST</div>
      <div className='subcontainer'>
          <div className='mstlogo'>
          <img src={mstlogo}/>
          </div>
          <div className='text'>
          <p>The Institute was jointly established in 1963 as Malaviya Regional Engineering College Jaipur by the Government of India and the Government of Rajasthan. Subsequently, on 26 June, 2002, the college was given the status of National Institute of Technology. On 15 August 2007, it was recognized as the Institute of National Importance through an Act of Parliament. The Institute is fully funded by the Ministry of Education (Shiksha Mantralaya), Government of India. It lies in the heart of the pink city, imaginatively laid out with a picturesque landscape of 317 acres. It presents a spectacle of harmony in modern architecture and natural beauty. The campus is located in close proximity of Jaipur airport, railway station, major hospitals, and shopping malls.
          </p> </div>
      </div>
    </div>
  )
}

export default About2
