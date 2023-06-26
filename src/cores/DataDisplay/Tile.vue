<template>
  <div class="tile">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .tile {
    border: 1px solid #FFFFFF;
    background-color: #1F41629B;
    backdrop-filter: blur(9px);
  }
</style>
