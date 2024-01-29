import React from 'react'
import './About.css'
import vltc from './vltc_img2.jpeg'
import logo_ai from './logo_ai.png'
import mnit_logo from './Mnit_logo.svg'
function About() {
  return (
    <div className='aboutMNIT'>
    <div className='heading'><img className='logo'src={mnit_logo}/><div> Malaviya National Institute of Technology</div></div>
    <div className='matter'>
      <div className='vltcimage'><img src={vltc}/></div>
      <div className='abouttext'><p>The Institute was jointly established in 1963 as Malaviya Regional Engineering College Jaipur by the Government of India and the Government of Rajasthan. Subsequently, on 26 June, 2002, the college was given the status of National Institute of Technology. On 15 August 2007, it was recognized as the Institute of National Importance through an Act of Parliament. The Institute is fully funded by the Ministry of Education (Shiksha Mantralaya), Government of India.
It lies in the heart of the pink city, imaginatively laid out with a picturesque landscape of 317 acres. It presents a spectacle of harmony in modern architecture and natural beauty. The campus is located in close proximity of Jaipur airport, railway station, major hospitals, and shopping malls.</p></div>
    </div>
    </div>
  )
}

export default About
