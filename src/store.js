//store.js
import { configureStore } from '@reduxjs/toolkit';
import flowReducer from './flowSlice';

const store = configureStore({
  reducer: {
    flow: flowReducer,
  },
});

export default store;
