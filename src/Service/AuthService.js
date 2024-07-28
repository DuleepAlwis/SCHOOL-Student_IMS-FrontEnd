import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { restEndPoints } from '../Auth/RestEp';
import { loginUser } from '../Redux/actions/formActions';
import store from '../store';


export const loginService = createAsyncThunk(
    '/auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post(restEndPoints.LOGIN, credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

 export const Login = {
    loginUser: async (formData) => {
      // Example: Dispatching an action
      await store.dispatch(loginUser(formData));
  
      // Example: Accessing Redux state
      const state = store.getState();
      // Access specific state properties if needed
  
      // Example: API call using data from Redux state or formData
      // Perform API call or other operations as needed
      return state;
    }
  };