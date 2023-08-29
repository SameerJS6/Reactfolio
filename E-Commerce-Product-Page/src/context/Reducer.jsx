export default function Reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cartItem: [], quantity: 0, totalQuantity: 0 };
  }

  if (action.type === "INCREASE_ITEM") {
    return { ...state, quantity: state.quantity + 1 };
  }

  if (action.type === "DECREASE_ITEM") {
    return { ...state, quantity: state.quantity <= 0 ? 0 : state.quantity - 1 };
  }

  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cartItem: action.payload,
      totalQuantity: state.totalQuantity + state.quantity,
      quantity: 0,
    };
  }

  if (action.type === "GET_TOTAL") {
    let newTotal = state.cartItem.reduce(
      (acc, curr) => acc + Number(curr.price) * state.totalQuantity,
      0
    );
    return { ...state, total: newTotal };
  }
  return state;
}
