import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { restEndPoints } from '../Auth/RestEp';


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