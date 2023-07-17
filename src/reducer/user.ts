import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    username: null,
    displayName: null,
    email: null,
    seasonXp: {
      level: null,
      levelProgressionPercentage: null,
      experience: null,
      experienceForNextLevel: null,
      experienceForCurrentLevel: null,
      seasonId: null,
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
    },
    setUserSeasonXp: (state, action) => {
      state.seasonXp.level = action.payload.level;
      state.seasonXp.levelProgressionPercentage = action.payload.levelProgressionPercentage;
      state.seasonXp.experience = action.payload.experience;
      state.seasonXp.experienceForNextLevel = action.payload.experienceForNextLevel;
      state.seasonXp.experienceForCurrentLevel = action.payload.experienceForCurrentLevel;
      state.seasonXp.seasonId = action.payload.seasonId;
    },
    clearSeasonXp: (state) => {
      state.seasonXp.level = null;
      state.seasonXp.levelProgressionPercentage = null;
      state.seasonXp.experience = null;
      state.seasonXp.experienceForNextLevel = null;
      state.seasonXp.experienceForCurrentLevel = null;
      state.seasonXp.seasonId = null;
    }
  },
});

export const { setUser, setUserSeasonXp, clearSeasonXp } = userSlice.actions;

export default userSlice.reducer;