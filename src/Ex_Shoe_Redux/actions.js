// actions.js
import * as actionTypes from "./actionTypes";

export const viewDetail = (shoe) => {
  return {
    type: actionTypes.VIEW_DETAIL,
    payload: shoe,
  };
};

export const removeShoe = (idShoe) => {
  return {
    type: actionTypes.REMOVE_SHOE,
    idShoe,
  };
};

export const addToCart = (shoe) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: shoe,
  };
};

export const updateCartQuantity = (shoeId, quantity) => {
    return {
      type: actionTypes.UPDATE_CART_QUANTITY,
      payload: { shoeId, quantity },
    };
  };