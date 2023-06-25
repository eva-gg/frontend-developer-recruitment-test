<template>
  <div>
    Bonjour hello world
  </div>
</template>

<script
  setup
  lang="ts"
>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('hello world');
});
</script>
