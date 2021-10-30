<template>
  <v-app>
    <div class="container">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
</style>