import { createSlice } from '@reduxjs/toolkit';

const seasonSlice = createSlice({
  name: 'progress',
  initialState: {
    id: null,
    from: null,
    to: null,
    seasonNumber: null,
    active: null,
    status: null,
  },
  reducers: {
    setSeason: (state, action) => {
      state.id = action.payload.id;
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.seasonNumber = action.payload.seasonNumber;
      state.active = action.payload.active;
      state.status = action.payload.status;
    },
  },
});

export const { setSeason } = seasonSlice.actions;

export default seasonSlice.reducer;