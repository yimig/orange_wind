<template>
  <div class="flex h-full w-full justify-center items-center bg-orange-light">
    <div class="justify-center items-center text-5xl relative text-darklight flex">
      <Banner></Banner>
    </div>
  </div>
</template>

<script>
import Banner from "../Banner/Banner.vue";
export default {
  name: "MainLayout",
  components:{
    Banner,
  }
}
</script>

<style scoped>
</style>
