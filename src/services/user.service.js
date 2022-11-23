import api from "./api";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/test/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/test/";

const getPublicContent = () => {
  return api.get(API_URL + "all");
};

const getUserBoard = () => {
  return api.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return api.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return api.get(API_URL + "admin");
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};