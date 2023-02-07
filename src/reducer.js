import { INCREMENT, DECREMENT, REMOVE, CLEAR_CART } from "./actions.js";
// items
import cartItems from "./cart-items";

const initialState = {
  cart: cartItems,
  total: cartItems.reduce((total, item) => total + item.price, 0),
  amount: cartItems.length,
};

const reducer = (state = initialState, action) => {
  let cart = [];
  let objectIdx;
  let total = state.total;

  switch (action.type) {
    case INCREMENT:
      cart = [...state.cart];

      objectIdx = cart.findIndex((item) => item.id === action.payload.id);
      cart[objectIdx].amount += 1;
      total += cart[objectIdx].price;

      return { cart: cart, amount: state.amount + 1, total: total };

    case DECREMENT:
      cart = [...state.cart];
      objectIdx = cart.findIndex((item) => item.id === action.payload.id);
      if (cart[objectIdx].amount !== 0) {
        cart[objectIdx].amount -= 1;
        total -= cart[objectIdx].price;
        return { cart: cart, amount: state.amount - 1, total: total };
      } else {
        return state;
      }

    case REMOVE:
      objectIdx = state.cart.findIndex((item) => item.id === action.payload.id);
      const subtractTotal =
        Math.round(state.cart[objectIdx].price) * state.cart[objectIdx].amount;

      const filteredItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        cart: filteredItem,
        amount: state.amount - state.cart[objectIdx].amount,
        total: state.total - subtractTotal,
      };

    case CLEAR_CART:
      return { cart: [], amount: 0, total: 0 };
    default:
      return state;
  }
};

export default reducer;
