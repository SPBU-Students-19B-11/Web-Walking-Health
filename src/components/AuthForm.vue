<template>
  <div class="welcome">
    <h2 class="welcome__header">Добро пожаловать!</h2>
    <div class="welcome__description">Здесь будет описание. Для авторизации введите свой логин и пароль, указанные при регистрации</div>
    <form class="welcome__form">
      <v-text-field
        class="welcome__field"
        v-model="name"
        label="Логин"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        v-model="email"
        label="Пароль"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <div class="welcome__btns">
        <a class="welcome__link" href="">Забыли пароль?</a>
        <a class="welcome__link" href="">Войти</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
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
.welcome__btns{
  width: 300px;
  display: flex;
  justify-content: space-between;
}


.welcome__link {
  text-decoration: none;
  color: #423189;
  font-weight: 500;
}

</style>