import React, { useState } from 'react'
import './Styles/ImageSlider.css'
import './Styles/Animations.css'
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
              <path d="M11 1 3 9l8 8" stroke="" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
          </button>

          <button className="arrows right-arrow" onClick={ handleNextClick }>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8" stroke="" strokeWidth="3" fill="none" fillRule="evenodd"/>
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

      {isOpen && <section className="lightbox opacity">
            <button className='lightbox-close-btn scale-in' onClick={()=> setIsOpen(!isOpen)}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="" fillRule="evenodd"/>
            </svg>
            </button>
          <div className="main-img translate">
            <img className="hero-img" src={Images[currentIndex]} alt={Images[currentIndex]}  />
          </div>
            <button className="box arrows left-arrow scale-in" onClick={ handlePrevClick } >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </button>
            <button className="box arrows right-arrow scale-in" onClick={ handleNextClick }>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </button>
        

          <div className="image-wrapper">
            {Images.map((image, index) => (
              <div key={index} className={`wrapper-content tilt-in-bottom-2 ${currentIndex === index ? "active-img" : ''}`} onClick={() => handleClick(index)}>
                <img className="imgCarousel" src={image} alt="MainImage" />
              </div>
            ))}
          </div> 
      </section> }
    </>
  )
}
