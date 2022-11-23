import axios from "axios";
import api from './api';


const API_URL = "http://localhost:8080/api/auth/";
// const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/auth/";

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
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};