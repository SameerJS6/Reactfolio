import React, { useState, useRef } from 'react'
import RippleAnimation from './RippleAnimation'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'
import './Styles/MainContent.css'

export default function MainContent() {
  const [count, setCount] = useState(0);
  
  const buttonRef = useRef();
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  RippleAnimation(buttonRef,{});
  RippleAnimation(buttonRef1,{});
  RippleAnimation(buttonRef2,{});

  const IncreamentCount = () => {
    setCount(count + 1);
    console.log(count);
  }

  const DecreamentCount = () => {
    count <= 0 ? "" : setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <div className="content-contianer">
        <p className='title'><strong>SNEAKER COMPANY</strong></p>
        <h1 className='main-title'>fall limited edition sneakers</h1>
        <p className='main-para'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div className="price-container">
          <div className="price-tag">
            <h2>$125.00</h2>
            <p className="discount">50%</p>
          </div>
          <p className='crossed-price'>$250.00</p>
        </div>

        <div className="buttons">
          <div className='counting-container'>
            <button className="minus" ref={ buttonRef1 } onClick={DecreamentCount}>
              <img className="event-none" src={minus} alt="Minus" />
            </button>

            <p className="count">{count}</p>

            <button className="plus" ref={ buttonRef2 } onClick={IncreamentCount}>
            <img className="event-none" src={plus} alt="Plus" />
            </button>
          </div>

          <div className="add-to-cart" ref={ buttonRef }>
            <svg className="add-cart-svg | event-none" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="" fillRule="nonzero"/>
            </svg>
            <button className='add-to-cart-btn | event-none'>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
