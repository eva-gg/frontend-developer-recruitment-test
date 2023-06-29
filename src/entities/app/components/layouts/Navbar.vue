<template>
  <div class="navbar flex md:flex-row flex-col xl:px-[133px] md:px-lg bg-black md:h-[46px] items-center fixed w-full top-0 z-[1000]">
    <div class="flex items-center md:w-auto w-full justify-between">
      <div class="flex items-center gap-2 md:ml-0 ml-sm">
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

      <div class="navbar__season md:mx-lg">
        <select
          class="uppercase tracking-lg text-md bg-black text-white"
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
    </div>

    <div class="md:hidden flex w-full justify-end pr-md">
      <svg class="transition" :class="{'rotate-180': isMenuOpen}" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512" @click="handleMenuToggling" @keyup="handleMenuToggling">
        <path fill="white" d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/>
      </svg>
    </div>

    <ul class="navbar__navigation" :class="{'is-open': isMenuOpen}">
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
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useSeasonsStore } from '@/store/seasons.store';
import { useGetSeasonsQuery } from '@/entities/season/hooks';
import { useGetCurrentUserQuery } from '@/entities/user/hooks';

import { routes } from '@/router';

import lvlFrameImg from '@/assets/lvl-frame.svg';

const route = useRoute();
const seasonStore = useSeasonsStore();

const { data: seasons } = useGetSeasonsQuery({
  onSuccess: (data: Season[]) => {
    seasonStore.setActiveSeason(data[data.length - 1].seasonNumber);
  },
});

const isMenuOpen = ref(false);
const { data: loggedUser } = useGetCurrentUserQuery();

const activeSeasonId = computed(() => seasonStore.getActiveSeasonId);
const getRoutes = computed(() => routes.filter((o) => o?.meta?.visible).map((o) => ({
  ...o,
  active: o.name === route.name,
})));

const handleSeasonChange = (e: Event) => {
  seasonStore.setActiveSeason(Number((e?.target as HTMLSelectElement)?.value));
};

const handleMenuToggling = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style
  lang="scss"
  scoped
>
.navbar {
  border-bottom: 1px solid white;
  padding-bottom: theme('spacing.xs');

  @screen md {
    padding-bottom: 0;
    border-bottom: none;
  }
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
    display: flex;
    height: 0;
    transition: height .2s ease-in-out;
    overflow: hidden;
    width: 100%;
    flex-direction: column;
    align-items: center;

    &.is-open {
      height: 100%;
    }

    @screen md {
      width: auto;
      border-bottom: none;
      height: auto;
      column-gap: calc(45px - 32px);
      flex-direction: row;
      padding-bottom: 0!important;
      @apply h-full;
    }

    li {
      width: fit-content;
      position: relative;

      @screen md {
        width: auto;
      }

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
