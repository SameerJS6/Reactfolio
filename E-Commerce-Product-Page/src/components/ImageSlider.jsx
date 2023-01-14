import React, { useState } from 'react'
import './Styles/ImageSlider.css'
import image from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'

export default function ImageSlider() {
  const Images = [
    {
      id: 1,
      src: image,
      caption: "Main Image"
    },
    {
      id: 2,
      src: image2,
      caption: "Image2"
    },
    {
      id: 3,
      src: image3,
      caption: "Image3"
    },
    {
      id: 4,
      src: image4,
      caption: "Image4"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 1;
    console.log("Previous Button Was Clicked");
    setCurrentIndex(prevIndex < 0 ? Images.length : prevIndex);
  }
  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    console.log("Next Button Was Clicked");
    setCurrentIndex(nextIndex === Images.length ? 0 : nextIndex);
  }
  return (
    <>
      <section className="wrapper">
        <div className="main-img">
          <img className="hero-img" src={Images[currentIndex].src} alt={Images[currentIndex].caption} />

          <button className="arrows left-arrow" onClick={ handlePrevClick }>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
          </svg>
          </button>

          <button className="arrows right-arrow" onClick={ handleNextClick }>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
          </svg>
          </button>
        </div>
          <div className="image-wrapper">
            <div className="wrapper-content active-img"><img className="imgCarousel" src={image} alt="MainImage" /></div>
            <div className="wrapper-content"><img className="imgCarousel" src={image2} alt="Image2" /></div>
            <div className="wrapper-content"><img className="imgCarousel" src={image3} alt="Image3" /></div>
            <div className="wrapper-content"><img className="imgCarousel" src={image4} alt="Image4" /></div>
          </div>
      </section>
    </>
  )
}
