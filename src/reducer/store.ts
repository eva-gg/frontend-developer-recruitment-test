import { configureStore } from '@reduxjs/toolkit';
import season from './season';
import user from './user';

export default configureStore({
  reducer: {
    season,
    user,
  },
});