import { configureStore} from '@reduxjs/toolkit';
//import authReducer from './Redux/authSlice';
import {   combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import apiMiddleware from './Redux/middleware/apiMiddleware';
import formReducer from './Redux/reducers/formReducers';

const rootReducer = combineReducers({
 // auth: authReducer,
  form: formReducer
});

const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, apiMiddleware)
});






export default store;