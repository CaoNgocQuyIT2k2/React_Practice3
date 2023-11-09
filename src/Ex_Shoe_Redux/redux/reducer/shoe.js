// shoe.js
import { shoeArr } from "../../data";
import * as actionTypes from "../../actionTypes";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_DETAIL: {
      return { ...state, detail: action.payload };
    }
    case actionTypes.REMOVE_SHOE: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.idShoe),
      };
    }
    case actionTypes.ADD_TO_CART: {
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        newCart[index].cartQuantity += 1;
      } else {
        newCart.push({ ...action.payload, cartQuantity: 1 });
      }

      return { ...state, cart: newCart };
    }

    case actionTypes.UPDATE_CART_QUANTITY: {
        const { shoeId, quantity } = action.payload;
        const newCart = state.cart.map((item) =>
          item.id === shoeId ? { ...item, cartQuantity: item.cartQuantity + quantity || 1 } : item
        );
        return { ...state, cart: newCart };
      }

      
    default:
      return state;
  }
};
