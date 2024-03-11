import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth'; // Import your authentication reducer

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers as needed
});

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
