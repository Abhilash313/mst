import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from './sliderimages/image1.JPG';
import image2 from './sliderimages/image2.JPG';
import image3 from './sliderimages/image3.JPG';
import image4 from './sliderimages/image4.JPG';
import image5 from './sliderimages/image5.JPG';
import image6 from './sliderimages/image6.JPG';
import image7 from './sliderimages/image7.JPG';
import image8 from './sliderimages/image8.JPG';
import "./Slider.css";

const imageData = [
  {
    label1: `${image1}`,
    label2: `${image5}`,
    alt: "image1",
   
  },
  {
    label1: `${image2}`,
    label2: `${image6}`,
    alt: "image2",
    
  },
  {
    label1: `${image3}`,
    label2: `${image7}`,
    alt: "image3",
   
  },
  {
    label1: `${image4}`,
    label2: `${image8}`,
    alt: "image4",
    
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.label1} className="sliderimage"  alt={image.alt} />
    <img src={image.label2} className="sliderimage2"  alt={image.alt} />
  </div>
));


export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="slider">
    <div className="Appslider">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        showThumbs={false}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
    </div>
  );
}