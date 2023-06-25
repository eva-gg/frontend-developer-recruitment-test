<template>
  <Navbar />
<!--  <div class="p-2 bg-primary flex flex-col gap-2">-->
<!--    <div>-->
<!--      {{ games }}-->
<!--    </div>-->
<!--  </div>-->
  <router-view></router-view>
</template>

<script
  setup
  lang="ts"
>
import Navbar from '@/entities/app/components/layouts/Navbar.vue';
// import { useGetGamesQuery } from '@/entities/games/hooks';
//
// const { data: games } = useGetGamesQuery();
</script>
