<template>
  <div class="flex px-[133px]">
    <div class="flex gap-2">
      {{ loggedUser?.displayName }}
    </div>

    <div>
      <select
        @change="handleSeasonChange"
        :value="activeSeasonId"
      >
        <option
          v-for="season in seasons"
          :key="season.id"
          :value="season.id"
        >
          {{ season.seasonNumber }}
        </option>
      </select>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { Season } from '@/entities/season/types';
import { useSeasonsStore } from '@/store/seasons.store';
import { useGetSeasonsQuery } from '@/entities/season/hooks';
import { useGetCurrentUserQuery } from '@/entities/user/hooks';
import { computed } from 'vue';

const seasonStore = useSeasonsStore();

const { data: seasons } = useGetSeasonsQuery();
const { data: loggedUser } = useGetCurrentUserQuery();

const activeSeasonId = computed(() => seasonStore.getActiveSeasonId);

const handleSeasonChange = (e: Event) => {
  seasonStore.setActiveSeason(Number((e?.target as HTMLSelectElement)?.value));
};
</script>
