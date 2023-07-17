import { configureStore } from '@reduxjs/toolkit';
import season from './season';

export default configureStore({
  reducer: {
    season,
  },
});