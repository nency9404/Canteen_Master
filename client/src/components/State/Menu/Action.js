import axios from "axios";
import { API_URL } from "../../Config/api";
import {
  CREATE_MENU_ITEM_FAILURE,
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  GET_MENU_ITEMS_BY_CANTEEN_ID_FAILURE,
  GET_MENU_ITEMS_BY_CANTEEN_ID_REQUEST,
  GET_MENU_ITEMS_BY_CANTEEN_ID_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  UPDATE_MENU_ITEMS_AVAILABLITY_FAILURE,
  UPDATE_MENU_ITEMS_AVAILABLITY_REQUEST,
  UPDATE_MENU_ITEMS_AVAILABLITY_SUCCESS,
} from "./ActionType";

export const createMenuItem = ({ menu }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });

    try {
      const { data } = await axios.post(`${API_URL}/api/admin/food`, menu);

      console.log("created menu ", menu);
      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const getMenuItemByCanteenId = ({ reqData }) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_CANTEEN_ID_REQUEST });

    try {
      // const { data } = await axios.get(
      //   `${API_URL}/api/food//canteen/${reqData.canteenId}?food_category=${reqData.foodCategory}`
      // );

      let url = `${API_URL}/api/food/canteen/${reqData.canteenId}?food_category=`;
      if (reqData.foodCategory && reqData.foodCategory!=='all') {
        url += `${reqData.foodCategory}`;
      }

      const { data } = await axios.get(url);

      console.log("menu item by canteen ", data);
      dispatch({ type: GET_MENU_ITEMS_BY_CANTEEN_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: GET_MENU_ITEMS_BY_CANTEEN_ID_FAILURE, payload: error });
    }
  };
};

export const searchMenuItem = ({ keyword }) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });

    try {
      const { data } = await axios.get(
        `${API_URL}/api/food/search?name=${keyword}`
      );

      console.log("data----- ", data);
      dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const updateMenuItemsAvailabilty = ({ foodId }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABLITY_REQUEST });

    try {
      const { data } = await axios.put(
        `${API_URL}/api/admin/food/${foodId}`,
        {}
      );

      console.log("update menuItems availabity ", data);
      dispatch({ type: UPDATE_MENU_ITEMS_AVAILABLITY_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: UPDATE_MENU_ITEMS_AVAILABLITY_FAILURE, payload: error });
    }
  };
};

export const deleteFoodAction = ({ foodId }) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_MENU_ITEM_REQUEST });
  
      try {
        const { data } = await axios.delete(`${API_URL}/api/admin/food/${foodId}`);
  
        console.log("delete food ", data);
        dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
      } catch (error) {
        console.log("catch error ", error);
        dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
      }
    };
  };