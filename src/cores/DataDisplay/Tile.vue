<template>
    <div class="tile">
        <div class="tile__content">
            <!--            <template v-if="$slots.default">-->
            <slot/>
            <!--            </template>-->

            <!--            <template v-else>-->
            <!--                <div class="flex flex-col" :class="{'!flex-col-reverse': props.reverse}">-->
            <!--                    <span class="">{{ props.title }}</span>-->
            <!--                    <span>{{ props.subtitle }}</span>-->
            <!--                </div>-->
            <!--            </template>-->
        </div>
    </div>
</template>

<script
    lang="ts"
    setup
>
// import {defineProps} from 'vue';

// const props = defineProps({
//     title: {
//         type: String,
//         default: '',
//     },
//     subtitle: {
//         type: String,
//         default: '',
//     },
//     reverse: {
//         type: Boolean,
//         default: false,
//     },
// });
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
