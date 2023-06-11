import UserService from "../services/users.service";
import { CHANGE_ESTADO_USER_FAIL, CHANGE_ESTADO_USER_REQUEST, CHANGE_ESTADO_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./types";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const users = await UserService.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.message });
  }
};

export const changeUserEstado = (id, estado) => async (dispatch) => {
  dispatch({ type: CHANGE_ESTADO_USER_REQUEST });
  try {
    const users = await UserService.changeUserEstado(id, estado);        
    dispatch({ type: CHANGE_ESTADO_USER_SUCCESS, payload: users.data });
  } catch (error) {
    dispatch({ type: CHANGE_ESTADO_USER_FAIL, payload: error.message });
  }
};
