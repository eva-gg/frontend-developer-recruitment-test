<template>
    <Navbar/>

    <div class="md:pt-[46px] pt-[80px]">
        <div class="content md:py-xl pb-xl flex-1 min-h-[calc(100vh-46px)]">
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
  background-color: #161A26;
}
</style>
