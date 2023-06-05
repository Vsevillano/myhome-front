import { API_URL } from "../utils/constants/urls";
import api from "./api";
import TokenService from "./token.service";

const register = (nombre, apellidos, username, email, telefono, password) => {
  return api.post(API_URL + "auth/signup", {
    nombre,
    apellidos,
    username,
    email,
    telefono,
    password,
  });
};

const login = (username, password) => {
  return api
    .post(API_URL + "auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }
      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const sendMailforgotPassword = (email) => {
  return api
    .post(API_URL + "auth/reset", {
      recipient: email,
      subject: "Recuperar contraseña",
    })
    .then((response) => {
      
      return response.data;
    });
  // si todo va bien, devolverá un 200
};

const checkForgotPasswordToken = (token) => {
  // TO DO hacer llamada a /api/auth/changepassword/{token}
  // si todo va bien, devolverá un 200
};

const changeUserPassword = (username, password) => {
  // TO DO hacer llamada a /api/auth/changepassword
  // si todo va bien, devolverá un 200
  return api
    .post(API_URL + "auth/changepassword", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }
      return response.data;
    });
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
  changeUserPassword,
  checkForgotPasswordToken,
  sendMailforgotPassword
};
