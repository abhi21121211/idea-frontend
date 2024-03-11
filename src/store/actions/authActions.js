import axios from 'axios';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://idea-backend-2.onrender.com/api/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.message });
    }
  };
};

export const register = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://idea-backend-2.onrender.com/api/auth/register', userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL', payload: error.message });
    }
  };
};
