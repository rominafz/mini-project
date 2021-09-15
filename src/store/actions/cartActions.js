import { ActionTypes } from "../constants/action-type";
const { ADD_TO_CART } = ActionTypes;
export const setCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
