import React from "react";
import "./Styles/Navbar.css";
import "./Styles/Animations.css";
import "./Styles/ShoppingCart.css";
import mainImage from "../assets/image-product-1-thumbnail.jpg";

export default function ShoppingCart(props) {
  return (
    <>
      <div
        className={`cart-content-box ${
          props.cartIsOpen == true ? "cart-active" : ""
        }`}
      >
        <div className="cart-header">
          <h3 className="opacity">Cart</h3>
          <button className="cart-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cart-close-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="checkout-wrapper">
          <div className="checkout-content">
            <div className="thumbnail">
              <img src={mainImage} alt="Main-Image-Thumbnail" />
            </div>
            <div className="out-title">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x <span>3</span> <strong>$375.00</strong>
              </p>
            </div>
            <div className="delete">
              <button className="delete-btn">
                <svg
                  className="event-none"
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
            </div>
          </div>
          <div className="checkout-btn">
            <button className="out-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
