<template>
  <div class="profile mx-auto max-w-[1364px]">
    <div class="grid grid-cols-12 gap-md">
      <div class="col-span-6">
        <div class="flex gap-md2">
          <div class="space-y-xs flex-1">
            <span class="block text-white text-xxl uppercase tracking-lg leading-[60px]">
              {{ loggedUser?.displayName }}
            </span>
            <span class="block text-white text-lg2 uppercase tracking-md">Niveau : 20/100</span>
            <div class="h-[13px] bg-black-100">
              <div class="h-full w-80 bg-secondary"></div>
            </div>
          </div>

          <div class="profile__season-frame flex items-center justify-center">
            <span class="block text-white text-xl uppercase">Saison {{ activeSeasonId }}</span>
          </div>
        </div>

        <div class="-my-[33.5px]">
          <span class="block text-lg2 text-white uppercase">STATISTIQUES : AFTER-H BATTLE ARENA</span>
          <span class="block text-primary italic font-sans">Les sessions jouées avant le lancement de la saison 3 seront comptabilisées pour la saison 1</span>
        </div>

        <div class="flex gap-sm">
          <span>210</span>
          <span>125</span>
          <span>85</span>
        </div>
      </div>

      <div class="col-span-6 space-y-xl">
        <div class="h-[372px] bg-black px-lg py-md relative z-10 flex items-end">
          <span class="text-white uppercase bg-black py-1 px-sm absolute top-md left-lg tracking-md">
              News
          </span>

          <img
            class="absolute h-full w-full object-cover top-0 left-0 z-[-1]"
            :src="newsFrame"
            alt=""
          >
          <div class="flex justify-between flex-1 items-end">
            <h3 class="text-white text-lg2 text-bold uppercase tracking-md max-w-[250px] leading-[30px]">Découvrez la
              saison 3 et ses nouveautés</h3>
            <div>
              <button class="uppercase text-white border min-h-[55px] tracking-md border-white inline-flex justify-center items-center min-w-[150px] text-lg font-bold">
                Voir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { useGetStatisticsByUser } from '@/entities/statistic/hooks';
import { useSeasonsStore } from '@/store/seasons.store';
import { computed, onMounted, Ref } from 'vue';
import { useGetCurrentUserQuery } from '@/entities/user/hooks';

import newsFrame from '@/assets/news-frame.png';

const { data: loggedUser } = useGetCurrentUserQuery();
const statsQueryParams: Ref = computed(() => ({ id: loggedUser.value?.id }));
const hasStatsQueryParams = computed(() => !!statsQueryParams.value.id);

const { data: stats } = useGetStatisticsByUser(statsQueryParams.value, {
  enabled: hasStatsQueryParams,
});

const seasonStore = useSeasonsStore();
const activeSeasonId = computed(() => seasonStore.getActiveSeasonId);

onMounted(() => {
  console.log('hello world');
});
</script>

<style
  lang="scss"
  scoped
>
.profile {
  .profile__season-frame {
    background-image: url('~@/assets/season-frame.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 213px;
    width: 252px;
  }
}
</style>
