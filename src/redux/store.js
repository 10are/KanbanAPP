import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice';
import educationSlice from './educations/educationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    educations: educationSlice,
  },
})