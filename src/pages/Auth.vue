<template>
  <div class="auth__wrapper">
      <div class="auth">
          <v-card
            elevation="3"
            class="card"
          >
              <AuthForm/>
              <ToRegistration/>
          </v-card>
      </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import ToRegistration from '../components/ToRegistration.vue';
export default {
  components: { 
      AuthForm,
      ToRegistration 
  },

  beforeCreate() {
    if (localStorage.getItem('token')) {
      this.$router.push('/profile');
    }
  }
};
</script>

<style scoped>
.auth__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>