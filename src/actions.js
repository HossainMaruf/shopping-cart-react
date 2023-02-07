export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const RESET = "RESET";

// action creator

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
