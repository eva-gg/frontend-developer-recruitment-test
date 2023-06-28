<template>
  <div class="profile mx-auto !2xl:max-w-[1364px] container">
    <div class="grid grid-cols-12 gap-md2">
      <div class="col-span-6">
        <div class="flex gap-md2">
          <div class="space-y-xs flex-1">
            <span class="block text-white text-xxl uppercase tracking-lg leading-[60px]">
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
          </div>

          <div class="profile__season-frame flex items-center justify-center">
            <span class="block text-white text-xl uppercase">Saison {{ activeSeasonId }}</span>
          </div>
        </div>

        <div class="-mt-[33.5px]">
          <span class="block text-lg2 text-white uppercase">STATISTIQUES : AFTER-H BATTLE ARENA</span>
          <span class="block text-primary italic font-sans">Les sessions jouées avant le lancement de la saison 3 seront comptabilisées pour la saison 1</span>
        </div>

        <div class="flex gap-sm h-[127px]">
          <Tile class="w-[252px]">
            <span class="block text-white font-bold text-xl uppercase leading-10">{{ userStats?.gameCount }}</span>
            <span class="text-primary font-sans font-thin text-md2">parties jouées</span>
          </Tile>

          <Tile class="flex-1">
            <img
                class="w-[43px]"
                :src="victoryIcon"
                alt=""
            >
            <span class="block text-primary text-lg font-bold uppercase tracking-md leading-md mb-1 mt-2">Victoires</span>
            <span class="text-white text-md2 font-sans">{{ userStats?.gameVictoryCount }}</span>
          </Tile>

          <Tile class="flex-1">
            <img
                class="w-[43px]"
                :src="defeatIcon"
                alt=""
            >
            <span class="block text-primary text-lg font-bold uppercase tracking-md leading-md mb-1 mt-2">Défaites</span>
            <span class="text-white text-md2 font-sans">{{ userStats?.gameDefeatCount }}</span>
          </Tile>
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
            <h3 class="text-white text-lg2 font-bold uppercase tracking-md max-w-[250px] leading-[30px]">
              Découvrez la
              saison 3 et ses nouveautés</h3>
            <div>
              <button
                  class="uppercase text-white border min-h-[55px] tracking-md border-white inline-flex justify-center items-center min-w-[150px] text-lg font-bold">
                Voir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 mt-md2 gap-md2">
      <div class="col-span-6">
        <div class="flex gap-lg">
          <Tile class="flex-1">
            <div class="flex gap-xl w-full pl-lg">
              <img
                  :src="timeIcon"
                  alt=""
              >
              <div>
                <span class="block text-primary text-md2 uppercase tracking-md">Temps de jeu cumulé</span>
                <span class="text-white text-md2 font-sans flex items-center gap-2 font-normal">
                  <span class="!font-gotham uppercase text-xl font-bold tracking-md">
                    {{ round(userStats?.gameTime / 3600, 2) }}
                  </span>
                  heures
                </span>
              </div>
            </div>
          </Tile>

          <div class="h-[163px] w-[163px]">
            <!--            <div>{{ userStats?.gameVictoryCount / userStats?.gameDefeatCount }}</div>-->
          </div>
        </div>

        <div class="grid grid-cols-12 gap-x-sm gap-y-md2 mt-md2">
          <div class="col-span-6">
            <Tile>
              <span class="block text-primary text-md2 uppercase tracking-md">Max dégâts dans une partie</span>
              <span class="block text-white font-bold text-xl leading-xl uppercase tracking-lg">{{
                  userStats?.inflictedDamage
                }}</span>
            </Tile>
          </div>
          <div class="col-span-6">
            <Tile>
              <span class="block text-primary text-md2 uppercase tracking-md">Max kill streak</span>
              <span class="block text-white font-bold text-xl leading-xl uppercase tracking-lg">{{
                  userStats?.bestKillStreak
                }}</span>
            </Tile>
          </div>
          <div class="col-span-6">
            <Tile>
              <span class="block text-primary text-md2 uppercase tracking-md">Total distance parcourue</span>
              <span class="block text-white font-bold text-xl leading-xl uppercase tracking-lg flex items-center gap-2">
                {{ round(userStats?.traveledDistance) }}
                <span class="text-md !font-sans normal-case font-medium tracking-normal">Mètres</span>
              </span>
            </Tile>
          </div>
          <div class="col-span-6">
            <Tile>
              <span class="block text-primary text-md2 uppercase tracking-md">Moy distance / partie</span>
              <span class="block text-white font-bold text-xl leading-xl uppercase tracking-lg flex items-center gap-2">
                {{ round(userStats?.traveledDistanceAverage / 1000, 1) }}
                <span class="text-md !font-sans normal-case font-medium tracking-normal">Km</span>
              </span>
            </Tile>
          </div>
        </div>
      </div>

      <div class="col-span-6 mt-md2">
        <span class="text-white text-md2 uppercase tracking-md font-bold">Parties récentes</span>
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
          <tr v-for="(gameHistory, i) in getGameHistories" :key="i">
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

const seasonStore = useSeasonsStore();
const { data: loggedUser } = useGetCurrentUserQuery();

const statsQueryParams: Ref = computed(() => ({ id: loggedUser.value?.id }));
const hasStatsQueryParams = computed(() => !!statsQueryParams.value.id);

const { data: userStats } = useGetStatisticsByUser(statsQueryParams, {
  enabled: hasStatsQueryParams,
});

const { data: userExperience } = useGetExperienceByUser(statsQueryParams, {
  enabled: hasStatsQueryParams,
});

const { data: games } = useGetGamesQuery();
const { data: gameHistories } = useGetGameHistoriesQuery();

const getGameHistories = computed(() => gameHistories.value?.filter((o, i) => i < 4)?.map((o) => ({
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 213px;
    width: 252px;
  }
}
</style>
