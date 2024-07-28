// import { createSlice } from '@reduxjs/toolkit';
// import { Login } from '../Service/AuthService';

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//       user: null,
//       token: null,
//       isLoading: false,
//       error: null,
//     },
//     reducers: {
//       logout(state) {
//         state.user = null;
//         state.token = null;
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(Login.pending, (state) => {
//           state.isLoading = true;
//           state.error = null;
//         })
//         .addCase(Login.fulfilled, (state, action) => {
//           state.isLoading = false;
//           state.user = action.payload.user;
//           state.token = action.payload.token;
//         })
//         .addCase(Login.rejected, (state, action) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         });
//     },
//   });
  
//   export const { logout } = authSlice.actions;
//   export default authSlice.reducer;