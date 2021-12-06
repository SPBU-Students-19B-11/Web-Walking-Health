<template>
  <div>
    <div class="about">
      <div class="patients__header">Мои данные</div>
      <div class="patients__list">
        <v-card link>
          <v-card-title>{{ doctor }}</v-card-title>
          <v-card-subtitle>Обо мне</v-card-subtitle>
        </v-card>
      </div>
    </div>
    <div class="patients">
      <div class="patients__header">Мои паценты</div>
      <div class="patients__list">
        <div
          class="patients__item"
          v-for="patient in patients"
          :key="patient.login"
        >
          <v-card link @click="toPatient(patient.login)">
            <v-card-title>{{ patient.fullname }}</v-card-title>
            <v-card-subtitle>О пациенте</v-card-subtitle>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    patients: {
      type: Array,
    },
    doctor: {
      type: String,
    },
  },

  methods: {
    toPatient(login) {
      this.$router.push(`/patient/${login}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.patients {
  &__header {
    margin: 16px;
    font-size: 24px;
  }

  &__list {
    margin: 0 5px 0 5px;
  }

  &__item {
    margin-bottom: 5px;
  }
}
</style>