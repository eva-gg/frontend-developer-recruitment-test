<template>
  <div class="tile">
    <div class="tile__content">
      <template v-if="$slots.default">
        <slot />
      </template>

      <template v-else>
        <h1>{{ props.title }}</h1>
        <h2>{{ props.subtitle }}</h2>
      </template>
    </div>
  </div>
</template>

<script
  lang="ts"
  setup
>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
});
</script>

<style
  lang="scss"
  scoped
>
.tile {
  display: flex;
  align-items: center;
  position: relative;
  padding: theme('spacing.xxs');
  z-index: 0;

  &::after {
    z-index: -1;
    position: absolute;
    inset: 0;
    content: '';
    background-color: #1F41629B;
    backdrop-filter: blur(9px);
  }

  .tile__content {
    padding: theme('spacing.md');
    border: 1px solid rgba(255, 255, 255, 0.15);
    height: 100%;
    width: 100%;
  }
}
</style>
