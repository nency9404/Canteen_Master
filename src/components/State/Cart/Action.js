import axios from "axios";
import { API_URL } from "../../Config/api";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  REMOVE_CARTITEM_FAILURE,
  REMOVE_CARTITEM_REQUEST,
  REMOVE_CARTITEM_SUCCESS,
  UPDATE_CARTITEM_FAILURE,
  UPDATE_CARTITEM_REQUEST,
  UPDATE_CARTITEM_SUCCESS,
} from "./ActionType";

export const findCart = (userEmail) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    console.log(userEmail);

    try {
      const res = await axios.get(`${API_URL}/api/cart?email=${userEmail}`);

      console.log("my cart ",res.data);
      dispatch({ type: FIND_CART_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error ",error);
      dispatch({ type: FIND_CART_FAILURE, payload: error });
    }
  };
};

/// getAllCartItem 6:38:52

export const addItemToCart = ({reqData}) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    // console.log(reqData);
    try {
      const { data } = await axios.put(
        `${API_URL}/api/cart/add?email=${reqData.userEmail}`,
        reqData.cartItem
      );

      console.log("add item to cart ", data);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    } catch (error) {
      console.log("error ",error);
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
    }
  };
};


export const updateCartItem = ({reqData}) => { // Remove destructuring
  return async (dispatch) => {
    dispatch({ type: UPDATE_CARTITEM_REQUEST });
    console.log(reqData);
    try {
      const { data } = await axios.put(
        `${API_URL}/api/cart-item/update`,
        reqData
      );

      console.log("update cartItem ", data);
      dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error });
    }
  };
};  

export const removeCartItem = (cartItemId, userEmail) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CARTITEM_REQUEST });

    try {
      const { data } = await axios.delete(
        `${API_URL}/api/cart-item/${cartItemId}/remove?email=${userEmail}`
      );

      console.log("remove cartItem ", data);
      dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
    } catch (error) {
      dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error });
    }
  };
};

export const clearCartAction = (userEmail) => {
    return async (dispatch) => {
      dispatch({ type: CLEAR_CART_REQUEST });
  
      try {
        const { data } = await axios.put(
          `${API_URL}/cart/clear?email=${userEmail}`,
          {}
        );
  
        console.log("clear cart ", data);
        dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: CLEAR_CART_FAILURE, payload: error });
      }
    };
  };
  