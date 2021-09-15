import { ActionTypes } from "../constants/action-type";

const { ADD_TO_CART } = ActionTypes;
const initialState = {
  singleCart: { orders: [] },
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, singleCart: payload };

    default:
      return state;
  }
};
