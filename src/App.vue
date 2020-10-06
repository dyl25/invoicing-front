<template>
  <nav-bar></nav-bar>

  <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 p-4">
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
