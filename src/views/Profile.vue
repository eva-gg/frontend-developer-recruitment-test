<template>
  <div class="profile mx-auto 2xl:max-w-[1334px] px-[15px] container">
    <div class="grid grid-cols-12 md:gap-md2">
      <div class="lg:col-span-6 col-span-12 order-1 md:p-0 pt-sm">
        <div class="flex gap-md2 md:items-start items-center">
          <div class="space-y-xs flex-1">
            <template v-if="!experienceIsLoading">
              <span class="block text-white md:text-xxl text-xl uppercase tracking-lg md:leading-xxl leading-xl">
                {{ loggedUser?.displayName }}
              </span>

              <div>
                <span class="block text-white text-lg2 uppercase tracking-md">
                  Niveau : {{ userExperience?.level }} / 100
                </span>

                <div class="h-[13px] bg-black-100">
                  <span
                    class="h-full block bg-secondary"
                    :style="{width: `${userExperience?.levelProgressionPercentage}%`}"
                  ></span>
                </div>
              </div>
            </template>

            <template v-else>
              <Skeletor height="100" class="w-[1/4]"/>
              <Skeletor height="50" class="w-full"/>
            </template>
          </div>

          <div class="profile__season-frame flex items-center justify-center">
            <span class="block text-white md:text-xl text-lg uppercase">Saison {{ activeSeasonId }}</span>
          </div>
        </div>

        <div class="xl:-mt-[33.5px]">
          <span class="block text-lg2 text-white uppercase">STATISTIQUES : AFTER-H BATTLE ARENA</span>
          <span class="block text-primary italic font-sans">Les sessions jouées avant le lancement de la saison 3 seront comptabilisées pour la saison 1</span>
        </div>

        <div class="flex gap-sm lg:h-[127px] lg:flex-nowrap flex-wrap">
          <template v-if="!statsAreLoading">
            <Tile class="lg:w-[252px] w-full">
              <span class="block text-white font-bold text-xl uppercase leading-10">{{ userStats?.gameCount }}</span>
              <span class="text-primary font-sans font-thin text-md2">parties jouées</span>
            </Tile>

            <Tile class="flex-1">
              <div class="flex lg:gap-0 gap-sm lg:flex-col items-center lg:w-auto w-full">
                <img
                  class="w-[43px]"
                  :src="victoryIcon"
                  alt=""
                >
                <div class="lg:text-center">
                  <span class="block text-primary text-lg font-bold uppercase tracking-md leading-md mb-1 mt-2">Victoires</span>
                  <span class="text-white text-md2 font-sans">{{ userStats?.gameVictoryCount }}</span>
                </div>
              </div>
            </Tile>

            <Tile class="flex-1">
              <div class="flex lg:gap-0 gap-sm lg:flex-col items-center lg:w-auto w-full">
                <img
                  class="w-[43px]"
                  :src="defeatIcon"
                  alt=""
                >
                <div class="lg:text-center">
                  <span class="block text-primary text-lg font-bold uppercase tracking-md leading-md mb-1 mt-2">Défaites</span>
                  <span class="text-white text-md2 font-sans">{{ userStats?.gameDefeatCount }}</span>
                </div>
              </div>
            </Tile>
          </template>

          <template v-else-if="statsAreLoading">
            <Skeletor height="100" class="flex-1"/>
            <Skeletor height="100" class="flex-1"/>
            <Skeletor height="100" class="flex-1"/>
          </template>
        </div>
      </div>

      <div class="lg:col-span-6 col-span-12 space-y-xl lg:order-1">
        <div class="md:h-[372px] h-[200px] bg-black md:px-lg md:py-md relative z-10 flex items-end -mx-[15px]">
          <span class="text-white uppercase bg-black py-1 px-sm absolute top-md left-lg tracking-md">
              News
          </span>

          <img
            class="absolute h-full w-full object-cover md:top-0 -top-1/2 md:translate-y-0 translate-y-1/2 transform left-0 z-[-1]"
            :src="newsFrame"
            alt=""
          >
          <div class="flex justify-between flex-1 items-end md:bg-transparent bg-black md:p-0 p-sm">
            <h3 class="text-white md:text-lg2 font-bold uppercase tracking-md md:max-w-[250px] md:leading-lg2">
              Découvrez la
              saison 3 et ses nouveautés
            </h3>
            <div>
              <button
                class="uppercase text-white border md:min-h-[55px] tracking-md border-white inline-flex justify-center items-center md:min-w-[150px] min-w-[103px] text-lg font-bold"
              >
                Voir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 mt-md2 gap-md2">
      <div
        class="xl:col-span-6 col-span-12"
        v-if="isProfileRoute"
      >
        <div class="flex gap-lg">
          <template v-if="!statsAreLoading">
            <Tile class="flex-1">
              <div class="flex md:flex-row flex-col items-center md:gap-xl gap-sm w-full md:pl-lg">
                <img
                    class="md:w-auto w-[30px]"
                  :src="timeIcon"
                  alt=""
                >
                <div>
                  <span class="block text-primary text-md2 uppercase tracking-md text-center">Temps de jeu cumulé</span>
                  <span class="text-white text-md2 font-sans flex items-center gap-2 font-normal">
                    <span class="!font-gotham uppercase text-xl font-bold tracking-md">
                      {{ round(userStats?.gameTime / 3600, 2) }}
                    </span>
                    heures
                  </span>
                </div>
              </div>
            </Tile>
          </template>

          <template v-else>
            <Skeletor height="155" class="flex-1"/>
          </template>

          <div class="h-[163px] w-[163px]">
            <!--            <div>{{ userStats?.gameVictoryCount / userStats?.gameDefeatCount }}</div>-->
          </div>
        </div>

        <template v-if="!statsAreLoading">
          <div class="grid grid-cols-12 gap-x-sm gap-y-md2 mt-md2">
            <div class="col-span-6 flex">
              <Tile class="flex-1">
                <span class="block text-primary md:text-md2 uppercase tracking-md text-center">Max dégâts dans une partie</span>
                <span class="block text-white font-bold md:text-xl text-lg leading-xl uppercase tracking-lg">{{
                    userStats?.inflictedDamage
                  }}</span>
              </Tile>
            </div>
            <div class="col-span-6 flex">
              <Tile class="flex-1">
                <span class="block text-primary md:text-md2 uppercase tracking-md text-center">Max kill streak</span>
                <span class="block text-white font-bold md:text-xl text-lg leading-xl uppercase tracking-lg">{{
                    userStats?.bestKillStreak
                  }}</span>
              </Tile>
            </div>
            <div class="col-span-6 flex">
              <Tile class="flex-1">
                <span class="block text-primary md:text-md2 uppercase tracking-md text-center">Total distance parcourue</span>
                <span class="block text-white font-bold md:text-xl text-lg leading-xl uppercase tracking-lg flex items-center gap-2">
                  {{ round(userStats?.traveledDistance) }}
                  <span class="text-md !font-sans normal-case font-medium tracking-normal">Mètres</span>
                </span>
              </Tile>
            </div>
            <div class="col-span-6 flex">
              <Tile class="flex-1">
                <span class="block text-primary md:text-md2 uppercase tracking-md text-center">Moy distance / partie</span>
                <span class="block text-white font-bold md:text-xl text-lg leading-xl uppercase tracking-lg flex items-center gap-2">
                  {{ round(userStats?.traveledDistanceAverage / 1000, 1) }}
                  <span class="text-md !font-sans normal-case font-medium tracking-normal">Km</span>
                </span>
              </Tile>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="grid grid-cols-12 gap-x-sm gap-y-md2 mt-md2">
            <div class="col-span-6">
              <Skeletor height="70" class="flex-1"/>
            </div>
            <div class="col-span-6">
              <Skeletor height="70" class="flex-1"/>
            </div>
            <div class="col-span-6">
              <Skeletor height="70" class="flex-1"/>
            </div>
            <div class="col-span-6">
              <Skeletor height="70" class="flex-1"/>
            </div>
          </div>
        </template>
      </div>

      <div
        class="mt-md2"
        :class="{
          'xl:col-span-6 col-span-12': isProfileRoute,
          'col-span-12': !isProfileRoute
        }"
      >
        <span
          class="text-white text-md2 uppercase tracking-md font-bold"
          v-html="isProfileRoute ? 'Parties récentes' : 'Historique de parties'"
        ></span>

        <template v-if="!historyLoading">
          <div class="overflow-auto">
            <table class="table mt-sm">
              <thead>
              <th>Jeu</th>
              <th>Joueurs</th>
              <th>Map</th>
              <th>Résultat</th>
              <th>Date</th>
              <th>Heure</th>
              </thead>

              <tbody>
              <tr
                v-for="(gameHistory, i) in getGameHistories"
                :key="i"
              >
                <td>{{ gameHistory?.game?.name }}</td>
                <td>{{ gameHistory.playerLength }}</td>
                <td>{{ gameHistory.map }}</td>
                <td>{{ gameHistory.gameStatus }}</td>
                <td>{{ gameHistory.date }}</td>
                <td>{{ gameHistory.dateHours }}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div
            class="flex justify-end mt-lg"
            v-if="isProfileRoute"
          >
            <router-link
              class="text-white underline font-sans text-md2 hover:opacity-80 transition"
              :to="{name: 'history'}"
            >
              Tout voir
            </router-link>
          </div>
        </template>

        <template v-else>
          <div class="space-y-md">
            <Skeletor height="50" v-for="i in 5" :key="i" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { computed, Ref } from 'vue';
import { format } from 'date-fns';
import { round } from 'lodash';
import { useRoute } from 'vue-router';
import { Skeletor } from 'vue-skeletor';

import { useGetExperienceByUser } from '@/entities/experience/hooks';
import { useGetStatisticsByUser } from '@/entities/statistic/hooks';
import { useSeasonsStore } from '@/store/seasons.store';
import { useGetCurrentUserQuery } from '@/entities/user/hooks';
import { useGetGameHistoriesQuery } from '@/entities/game-history/hooks';
import { useGetGamesQuery } from '@/entities/games/hooks';

import Tile from '@/cores/DataDisplay/Tile.vue';

import newsFrame from '@/assets/news-frame.png';
import victoryIcon from '@/assets/victory-icon.svg';
import defeatIcon from '@/assets/defeat-icon.svg';
import timeIcon from '@/assets/time-icon.svg';

const route = useRoute();
const seasonStore = useSeasonsStore();

const isProfileRoute = computed(() => route.name === 'profile');

const { data: loggedUser } = useGetCurrentUserQuery();

const statsQueryParams: Ref = computed(() => ({ id: loggedUser.value?.id }));
const hasStatsQueryParams = computed(() => !!statsQueryParams.value.id);

const { data: userStats, isLoading: statsAreLoading } = useGetStatisticsByUser(statsQueryParams, {
  enabled: hasStatsQueryParams,
});

const { data: userExperience, isLoading: experienceIsLoading } = useGetExperienceByUser(statsQueryParams, {
  enabled: hasStatsQueryParams,
});

const { data: games, isLoading: gamesAreLoading } = useGetGamesQuery();
const { data: gameHistories, isLoading: historyAreLoading } = useGetGameHistoriesQuery();

const historyLoading = computed(() => gamesAreLoading.value && historyAreLoading.value);

const getGameHistories = computed(() => gameHistories.value?.filter((o, i) => (isProfileRoute.value ? (i < 4) : true))?.map((o) => ({
  date: format(new Date(o.createdAt), 'MM/dd/yyyy'),
  dateHours: format(new Date(o.createdAt), 'H:mm'),
  playerLength: o.players.length,
  gameStatus: o.data.success ? 'Victoire' : 'Défaite',
  game: games.value?.find((g) => g.id === o.data.gameId),
  map: o.data.map,
})));

const activeSeasonId = computed(() => seasonStore.getActiveSeasonId);

</script>

<style
  lang="scss"
  scoped
>
.profile {
  .profile__season-frame {
    background-image: url('~@/assets/season-frame.webp');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 139px;
    width: 133px;

    @screen md {
      background-size: cover;
      height: 213px;
      width: 252px;
    }
  }
}
</style>
