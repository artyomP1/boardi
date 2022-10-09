<template>
  <div id="app">
    <AppHeader />
    <router-view class="page" />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
}
body {
  box-sizing: border-box;
  margin: 0;
  background-color: aliceblue;
}

.page {
  // height: calc(100vh - 101px);
  min-height: calc(100vh - 101px);
}
</style>
