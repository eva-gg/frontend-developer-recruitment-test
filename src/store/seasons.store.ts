import { Season } from '@/entities/season/types';
import { defineStore } from 'pinia';

export const useSeasonsStore = defineStore('seasons', {
  state: (): { activeSeasonId: null | Season['id'] } => ({
    activeSeasonId: null,
  }),
  getters: {
    getActiveSeasonId: (state) => state.activeSeasonId,
  },
  actions: {
    setActiveSeason(id: Season['id']) {
      this.activeSeasonId = id;
    },
  },
});
