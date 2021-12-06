<template>
  <v-app>
    <div class="body">
      <div class="container1">
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background-color: #edeef0;
}

.body {
  background-color: #edeef0;
  min-height: 100%;
  min-width: 100%;
}
.container1 {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>