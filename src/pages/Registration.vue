<template>
    <div class="registration__wrapper">
      <div class="registration">
          <v-card
            elevation="3"
            class="card"
          >
              <RegistrationForm/>
          </v-card>
      </div>
  </div>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm'
    export default {
        components: {
            RegistrationForm
        }
    }
</script>

<style scoped>
.registration__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>