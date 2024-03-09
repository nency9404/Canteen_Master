import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: true,
  error: null,
  success: null,
  email: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null, success: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        email: action.payload.email,
        user: action.payload.user,
        success: "Register Success",
      };

      case GET_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };

      case LOGOUT:
        return initialState;

    default:
      return state;
  }
};
