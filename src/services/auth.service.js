import { API_URL } from '../utils/constants/urls';
import api from './api';
import TokenService from "./token.service";

const register = (nombre, apellidos, username, email, telefono, password) => {
  return api.post(API_URL + "signup", {
    nombre, apellidos, username, email, telefono, password
  });
};

const login = (username, password) => {
  return api
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data)
      }
      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return TokenService.getUser();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
};