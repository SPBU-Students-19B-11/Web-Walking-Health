<template>
  <div class="registration__wrapper">
    <div class="registration">
      <v-card elevation="3" class="card">
        <RegistrationForm />
      </v-card>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "../components/RegistrationForm";
export default {
  components: {
    RegistrationForm,
  },
  beforeCreate() {
    if (localStorage.getItem("token")) {
      this.$router.push("/profile");
    }
  },
};
</script>

<style scoped>
.registration__wrapper {
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
</style>