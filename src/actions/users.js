import UserService from "../services/users.service";
import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./types";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const users = await UserService.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.message });
  }
};
