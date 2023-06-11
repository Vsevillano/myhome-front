import {
  CHANGE_ESTADO_USER_FAIL,
  CHANGE_ESTADO_USER_REQUEST,
  CHANGE_ESTADO_USER_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../actions/types";

const initialState = { isLoading: false, users: null, error: null };

export const getUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_REQUEST:
      return { isLoading: true };
    case GET_USERS_SUCCESS:
      return { isLoading: false, success: true, users: payload };
    case GET_USERS_FAIL:
      return { isLoading: false, error: payload };
    // Activar/Desactivar usuario  
    case CHANGE_ESTADO_USER_REQUEST:
      return { isLoading: true };
    case CHANGE_ESTADO_USER_SUCCESS:
      return { isLoading: false, success: true, users: payload };
    case CHANGE_ESTADO_USER_FAIL:
      return { isLoading: false, error: payload };
    default:
      return state;
  }
};
