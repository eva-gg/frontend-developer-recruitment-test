<template>
  <div class="p-2 bg-primary">
    {{ games }}
    ---
    {{ seasons }}
  </div>
</template>

<script
  setup
  lang="ts"
>

import { useGetGamesQuery } from '@/entities/games/hooks';
import { useGetSeasonsQuery } from '@/entities/season/hooks';

const { data: games } = useGetGamesQuery();
const { data: seasons } = useGetSeasonsQuery();
</script>
