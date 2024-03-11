import axios from 'axios';

// Initial state
const initialState = {
  user: null,
  isLoggedIn: false,
  error: null
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true, error: null };
    case 'LOGIN_FAIL':
      return { ...state, user: null, isLoggedIn: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, isLoggedIn: false, error: null };
    case 'REGISTER_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true, error: null };
    case 'REGISTER_FAIL':
      return { ...state, user: null, isLoggedIn: false, error: action.payload };
    default:
      return state;
  }
};

// Action creators
export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://idea-backend-2.onrender.com/api/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
  };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const register = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://idea-backend-2.onrender.com/api/auth/register', formData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    }
  };
};

export default authReducer;
