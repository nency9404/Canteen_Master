import axios from "axios";
import { API_URL } from "../../Config/api";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS,
} from "./ActionType";

export const createOrder = (reqData, userEmail) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    try {
      const { data } = await axios.post(
        `${API_URL}/api/order?email=${userEmail}`,
        reqData.order
      );

      console.log("created order data", data);
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    }
  };
};

export const getUsersOrders = (userEmail) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_REQUEST });

    try {
      const { data } = await axios.get(
        `${API_URL}/api/order/user?email=${userEmail}`
      );

      console.log("user data", data);
      dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
    }
  };
};
