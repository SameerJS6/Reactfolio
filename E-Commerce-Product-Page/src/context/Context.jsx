import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import Reducer from "./Reducer";
import { Item } from "../data";

const CartContext = createContext();

const InitialState = {
  total: 0,
  quantity: 0,
  totalQuantity: 0,
  product: Item,
  cartItem: [],
};

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const increaseItem = () => {
    dispatch({ type: "INCREASE_ITEM" });
  };
  const decreaseItem = () => {
    dispatch({ type: "DECREASE_ITEM" });
  };
  const addToCart = () => {
    if (state.quantity === 0) return;

    dispatch({ type: "ADD_TO_CART", payload: Item });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartItem, state.totalQuantity]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        isCartOpen,
        openCart,
        closeCart,
        clearCart,
        increaseItem,
        decreaseItem,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
