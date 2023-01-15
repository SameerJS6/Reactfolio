import React, { useState } from 'react'
import './Styles/ImageSlider.css'
import image from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const Images = [ image, image2, image3, image4 ]

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 1;
    console.log("Previous Button Was Clicked");
    setCurrentIndex(prevIndex < 0 ? Images.length -1 : prevIndex);
  }
  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    console.log("Next Button Was Clicked");
    setCurrentIndex(nextIndex === Images.length ? 0 : nextIndex);
    console.log(nextIndex)
  }
  const handleClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <>
      <section className="wrapper" data-active="false">  
        <div className="main-img">
          <img className="hero-img" src={Images[currentIndex]} alt={Images[currentIndex]} onClick={()=> setIsOpen(!isOpen)}/>

          <button className="arrows left-arrow" onClick={ handlePrevClick } >
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
            {Images.map((image, index) => (
              <div key={index} className={`wrapper-content ${currentIndex === index ? "active-img" : ''}`} onClick={() => handleClick(index)}>
                <img className="imgCarousel" src={image} alt="MainImage" />
              </div>
            ))}
          </div> 
      </section>

      {isOpen && <section className="lightbox opacity" data-overlay={`${!isOpen ? "true" : "false"}`}>
            <button className='lightbox-close-btn' onClick={()=> setIsOpen(!isOpen)}>X</button>
          <div className="main-img translate">
            <img className="hero-img" src={Images[currentIndex]} alt={Images[currentIndex]}  />
          </div>
            <button className="box arrows left-arrow " onClick={ handlePrevClick } >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </button>
            <button className="box arrows right-arrow" onClick={ handleNextClick }>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </button>
        

          <div className="image-wrapper">
            {Images.map((image, index) => (
              <div key={index} className={`wrapper-content ${currentIndex === index ? "active-img" : ''}`} onClick={() => handleClick(index)}>
                <img className="imgCarousel" src={image} alt="MainImage" />
              </div>
            ))}
          </div> 
      </section> }
    </>
  )
}
