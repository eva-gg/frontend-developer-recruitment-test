<template>
    <Navbar/>

    <div class="pt-[46px]">
        <div class="content py-xl flex-1 min-h-[calc(100vh-46px)]">
            <router-view></router-view>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import Navbar from '@/entities/app/components/layouts/Navbar.vue';
</script>

<style lang="scss" scoped>
.content {
  background-image: url('~@/assets/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
