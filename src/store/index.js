// Implement Redux store configuration
import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import courseReducer from './course';

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer
});

const store = createStore(rootReducer);

export default store;
