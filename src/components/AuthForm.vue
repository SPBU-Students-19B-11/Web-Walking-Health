<template>
  <div class="welcome">
    <h2 class="welcome__header">Добро пожаловать!</h2>
    <div class="welcome__description">
      Здесь будет описание. Для авторизации введите свой логин и пароль,
      указанные при регистрации
    </div>
    <form class="welcome__form">
      <v-text-field
        class="welcome__field"
        v-model="form.login"
        label="Логин"
        required
        :rules="rules.login"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        type="password"
        v-model="form.password"
        label="Пароль"
        required
        :rules="rules.password"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <div class="welcome__btns">
        <a class="welcome__link" href="">Забыли пароль?</a>
        <a
          :class="{ disabled: !formIsValid }"
          class="welcome__link"
          href=""
          @click.prevent="$router.push('/profile')"
          >Войти</a
        >
      </div>
    </form>
  </div>
</template>

<script>
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
    };
  },
  computed: {
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