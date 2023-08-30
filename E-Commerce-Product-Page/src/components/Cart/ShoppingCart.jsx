import React from "react";
import "../Styles/Navbar.css";
import "../Styles/Animations.css";
import "../Styles/ShoppingCart.css";
import { useCartContext } from "../../context/Context";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const { isCartOpen, closeCart, cartItem, totalQuantity } = useCartContext();
  return (
    <>
      <div className={`cart-content-box ${isCartOpen ? "cart-active" : ""}`}>
        <div className="cart-header">
          <h3 className="opacity">Cart {totalQuantity}</h3>
          <button onClick={closeCart} className="cart-close-btn">
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

        {cartItem.length === 0 && (
          <p className="out-title center">Your cart is Empty</p>
        )}

        {cartItem.length >= 1 &&
          cartItem.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
      </div>
    </>
  );
}
