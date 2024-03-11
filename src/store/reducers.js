import { combineReducers } from 'redux';
import authReducer from './auth'; // Import your authentication reducer
import courseReducer from './course'; // Import your course reducer


// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  // Add other reducers as needed
});

export default rootReducer;
