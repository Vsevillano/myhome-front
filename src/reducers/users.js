import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../actions/types";

      
  const initialState = { loading: false, users: null, error: null };

  export const getUsersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS_REQUEST:
            return { loading: true };
        case GET_USERS_SUCCESS:            
            return { loading: false, success: true, users: payload };
        case GET_USERS_FAIL:
            return { loading: false, error: payload };        
        default:
            return state;
    }
}



