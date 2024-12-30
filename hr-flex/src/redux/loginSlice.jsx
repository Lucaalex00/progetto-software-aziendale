import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  user: null,
  isAuthenticated: false,
};

// reducer
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// export reducer
export default authSlice.reducer;
