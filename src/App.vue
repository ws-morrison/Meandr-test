<template>
  <div id="app">
    <the-header></the-header>
    <the-main></the-main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";
export default {
  name: "App",
  components: {
    TheHeader,
    TheMain
  }
};
</script>
<style lang="scss">
@import "./assets/scss/commons.scss";
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
