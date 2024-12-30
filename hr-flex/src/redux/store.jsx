// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './loginSlice'; // Import Reducer from slice file
import dashboardReducer from './dashboardSlice'

const store = configureStore({
  reducer: {
    auth: authReducer, // add Reducer to store config
    dashboard: dashboardReducer
  },
});

export default store;
