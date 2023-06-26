<template>
  <div class="navbar flex px-[133px] bg-black h-[46px] items-center">
    <div class="flex items-center gap-2">
      <div class="flex relative items-center justify-center">
        <span class="absolute block text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[25px] font-bold">20</span>
        <img
          :src="lvlFrameImg"
          alt=""
        >
      </div>
      <span class="block text-white uppercase tracking-lg text-md">
        {{ loggedUser?.displayName }}
      </span>
    </div>

    <div class="navbar__season mx-lg">
      <select
        class="uppercase tracking-lg text-md"
        @change="handleSeasonChange"
        :value="activeSeasonId"
      >
        <option
          v-for="season in seasons"
          :key="season.id"
          :value="season.id"
        >
          <span class="uppercase">
            saison {{ season.seasonNumber }}
          </span>
        </option>
      </select>
    </div>

    <ul class="navbar__navigation flex h-full items-center gap-x-[calc(45px - 32px)]">
      <li
        v-for="(route, i) in getRoutes"
        :key="i"
        class="h-full flex items-center"
        :class="{'is-active': route.active}"
      >
        <router-link
          :class="{'text-primary': route.active}"
          :to="{name: route.name}"
          class="text-white block text-md uppercase tracking-lg px-md py-1"
        >
          {{ route.meta.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { Season } from '@/entities/season/types';
import { computed } from 'vue';

import { useSeasonsStore } from '@/store/seasons.store';
import { useGetSeasonsQuery } from '@/entities/season/hooks';
import { useGetCurrentUserQuery } from '@/entities/user/hooks';

import { useRoute } from 'vue-router';
import { routes } from '@/router';

import lvlFrameImg from '@/assets/lvl-frame.svg';

const route = useRoute();
const seasonStore = useSeasonsStore();

const { data: seasons } = useGetSeasonsQuery({
  onSuccess: (data: Season[]) => {
    seasonStore.setActiveSeason(data[data.length - 1].seasonNumber);
  },
});

const { data: loggedUser } = useGetCurrentUserQuery();

const activeSeasonId = computed(() => seasonStore.getActiveSeasonId);
const getRoutes = computed(() => routes.filter((o) => o?.meta?.visible).map((o) => ({
  ...o,
  active: o.name === route.name,
})));

const handleSeasonChange = (e: Event) => {
  seasonStore.setActiveSeason(Number((e?.target as HTMLSelectElement)?.value));
};
</script>

<style
  lang="scss"
  scoped
>
.navbar {
  .navbar__season {
    @apply px-sm relative;

    &::before, &::after {
      position: absolute;
      content: '';
      height: 24px;
      width: 1px;
      background-color: theme('colors.gray.DEFAULT');
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }

  .navbar__navigation {
    li {
      position: relative;

      &::after {
        opacity: 0;
        content: '';
        position: absolute;
        bottom: 0;
        height: 3px;
        width: 100%;
        background-color: theme('colors.purple.DEFAULT');
        transition: .2s ease-in-out opacity;
      }

      &.is-active {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
