<template>
  <div class="welcome">
    <loader
      v-if="loading"
      object="#489EE2"
      color1="#ffffff"
      color2="#423189"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      name="circular"
    ></loader>
    <h2 class="welcome__header">Добро пожаловать!</h2>
    <div class="welcome__description">
      Для авторизации введите свой логин и пароль, указанные при регистрации.
    </div>
    <form class="welcome__form">
      <v-text-field
        class="welcome__field"
        v-model="form.login"
        label="Логин"
        required
        :rules="rules.login"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        type="password"
        v-model="form.password"
        label="Пароль"
        required
        :rules="rules.password"
      ></v-text-field>
      <div class="welcome__btns">
        <a class="welcome__link" href="">Забыли пароль?</a>
        <a
          :class="{ disabled: !formIsValid }"
          class="welcome__link"
          href=""
          @click.prevent="sendLogin"
          >Войти</a
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    const defaultForm = Object.freeze({
      login: "",
      password: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        login: [(val) => (val || "").length > 0 || "Введите логин"],
        password: [(val) => (val || "").length > 0 || "Введите пароль"],
      },
      defaultForm,
      loading: false,
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),

    async sendLogin() {
      this.loading = true;
      await this.login({
        login: this.form.login,
        password: this.form.password,
      });

      this.loading = false;
      if (localStorage.getItem("token")) {
        this.$router.push("/profile");
      } else {
        alert("Логин или пароль были введены неверно");
      }
    },
  },

  computed: {
    ...mapState({
      status: (state) => state.auth.status,
    }),

    formIsValid() {
      return this.form.login && this.form.password;
    },
  },
};
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  padding: 30px 30px 60px;
  max-width: 370px;
}

.welcome__header {
  color: #423189;
}

.welcome__description {
  text-align: center;
}

.welcome__btns {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.welcome__link {
  text-decoration: none;
  color: #423189;
  font-weight: 500;
}

.disabled {
  pointer-events: none; /* делаем ссылку некликабельной */
  cursor: default; /* устанавливаем курсор в виде стрелки */
  color: #999; /* цвет текста для нективной ссылки */
}
</style>