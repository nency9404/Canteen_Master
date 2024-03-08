import axios from "axios";
import {
    GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { API_URL } from "../../Config/api";

export const registerUser = (reqdata) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/api/users/signup`,
      reqdata.userData
    );

    localStorage.setItem("email",data.email);

    if (data.role === "ROLE_CANTEEN_OWNER") {
      console.log(data.role);
      reqdata.navigate("/admin/canteen");
    } else {
      reqdata.navigate("/");

    }

    const payload = {
      email: data.email,
      user: data,
    };
    dispatch({ type: REGISTER_SUCCESS, payload });

    console.log("Register success : ",data);
  } catch (error) {
    dispatch({type:REGISTER_FAILURE,payload:error});
    console.log("error : ", error);
  }
};

export const loginUser = (reqdata) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/api/users/signin`,
      reqdata.userData
    );

    localStorage.setItem("email",data.email);

    if (data.role === "ROLE_CANTEEN_OWNER") {
      reqdata.navigate("/admin/canteen");
    } else {
      reqdata.navigate("/");
    }

    const payload = {
      email: data.email,
      user: data,
    };

    // console.log("named",data.fullName);

    dispatch({ type: LOGIN_SUCCESS, payload });
    console.log("Login success : ",data);
  } catch (error) {
    dispatch({type:LOGIN_FAILURE,payload:error})
    console.log("error : ", error);
  }
};

export const getUser = (email) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_URL}/api/users`);

    
    dispatch({ type: GET_USER_SUCCESS });
    console.log(data);
  } catch (error) {
    dispatch({type:GET_USER_FAILURE,payload:error});
    console.log("error : ", error);
  }
};

export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type: LOGOUT});
        console.log("Logout success");
    } catch (error) {
        console.log("error : ", error);
    }
}