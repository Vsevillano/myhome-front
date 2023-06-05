import { API_URL } from "../utils/constants/urls";
import api from "./api";

class UserService {
  getPublicContent() {
    return api.get(API_URL + "all");
  }

  getUserBoard() {
    return api.get(API_URL + "user");
  }

  getModeratorBoard() {
    return api.get(API_URL + "mod");
  }

  getAdminBoard() {
    return api.get(API_URL + "admin");
  }
}

export default new UserService();
