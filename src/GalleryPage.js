import React, { useState } from 'react'
import './Gallery.css'

import WSPGallery from './WSPGallery';
import img1 from './mstphotos/1.JPG'
import img2 from './mstphotos/2.JPG'
import img3 from './mstphotos/3.JPG'
import img4 from './mstphotos/4.JPG'
import img5 from './mstphotos/5.JPG'
import img6 from './mstphotos/6.JPG'
import img7 from './mstphotos/7.JPG'
import img8 from './mstphotos/8.JPG'
import img9 from './mstphotos/9.JPG'
import img10 from './mstphotos/10.JPG'
import img11 from './mstphotos/11.JPG'
import img12 from './mstphotos/12.JPG'
import img13 from './mstphotos/13.JPG'
import img14 from './mstphotos/14.JPG'
import img15 from './mstphotos/15.JPG'
import img16 from './mstphotos/16.JPG'
import img17 from './mstphotos/17.JPG'
import img18 from './mstphotos/18.JPG'
// const gallery =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
function GalleryPage() {
    

    // const images = [
    //     {
    //        src: img1,
    //   //      width: 3000,
    //   // height: 3000,
         
          
    //     },
    //     {
    //       src: img2,
         
    //    },
    //    {
    //     src: img3,
      
    //  },
    //  {
    //   src: img4,
    
    // },
    // {
    //   src: img5,
    
    // },
    // {
    //   src: img6,
    
    // },
    // {
    //   src: img7,
   
    // },
    // {
    //   src: img8,
    
    // },
    // {
    //   src: img9,
     
    // },
    // {
    //   src: img10,
     
    // },
    // {
    //   src: img11,
     
    // },
    // {
    //   src: img12,
     
    // },
    // {
    //   src: img13,
     
    // },
    // {
    //   src: img14,
     
    // },
    // {
    //   src: img15,
     
    // },
    // {
    //   src: img16,
    
    // },
    // {
    //   src: img17,
    
    // },
    // {
    //   src: img18,
     
    // },
    //  ];
    const galleryImages = [
      {
        img: `${img1}`
      },
      {
          img: `${img2}`
      },
      {
          img: `${img3}`
      },
      {
          img: `${img4}`
      },
      {
          img: `${img5}`
      },
      {
          img: `${img6}`
      },
      {
          img: `${img7}`
      },
      {
          img: `${img8}`
      },
      {
          img: `${img9}`
      },
      {
          img: `${img10}`
        },
        {
            img: `${img11}`
        },
        {
            img: `${img12}`
        },
        {
            img: `${img13}`
        },
        {
            img: `${img14}`
        },
        {
            img: `${img15}`
        },
        {
            img: `${img16}`
        },
        {
            img: `${img17}`
        },
        {
            img: `${img18}`
        }
     
    ]


  return (
    <div className='gallery-container'>
    <div className='gallery-title'>Gallery</div>
      <div className='images-container'>
      
      <WSPGallery
        galleryImages={galleryImages}
      />
      
      </div>
    </div>
  )
}

export default GalleryPage
