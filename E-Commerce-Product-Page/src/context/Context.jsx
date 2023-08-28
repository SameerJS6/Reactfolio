import { createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value="Cart Context">{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
