<template>
  <div class="welcome">
    <h2 class="welcome__header">Регистрация</h2>
    <div class="welcome__description">
      Здесь будет описание. Пожалуйста, заполните данные и идентифицируйте себя
    </div>
    <form class="welcome__form">
        <v-radio-group
            mandatory
            v-model="form.user"
        >
            <v-radio
                :label="'Я пациент'"
                value="patient"
            ></v-radio>
            <v-radio
                :label="'Я врач'"
                value="doctor"
            ></v-radio>
        </v-radio-group>
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
        v-model="form.password"
        type="password"
        label="Пароль"
        required
        :rules="rules.password"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        v-model="form.passwordRepeat"
        type="password"
        label="Повторите пароль"
        required
        :rules="rules.passwordRepeat"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        v-model="form.fullName"
        label="ФИО"
        required
        :rules="rules.fullName"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
        <v-autocomplete
            v-if="form.user === 'patient'"
            ref="doctorFullName"
            v-model="form.doctorFullName"
            :rules="rules.doctorFullName"
            :items="doctors"
            label="ФИО лечущего врача"
            required
        ></v-autocomplete>
      <div class="welcome__btns">
        <a
          :class="{ disabled: !formIsValid }"
          class="welcome__link"
          href=""
          @click.prevent="$router.push('/profile')"
          >Зарегистрироваться</a
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
      user: 'patient',
      fullName: '',
      doctorFullName: ''
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        login: [(val) => (val || "").length > 0 || "Введите логин"],
        password: [(val) => (val || "").length > 0 || "Введите пароль"],
        passwordRepeat: [(val) => (val || "") === this.form.password || "Пароли не совпадают"],
        fullName: [(val) => (val || "").length > 0 || "Введите ФИО"],
        doctorFullName: [(val) => (val || "").length > 0 || "Укажите лечущего врача"]
      },
      defaultForm,
      doctors: ['Игнатьев Клим Платонович', 'Фролов Геннадий Николаевич', 'Ситников Игнат Протасьевич', 'Белов Назарий Альвианович']
    };
  },
  computed: {
    formIsValid() {
        if (this.form.user === 'patient') {
            return this.form.login 
                && this.form.password 
                && (this.form.password === this.form.passwordRepeat)
                && this.form.fullName
                && this.form.doctorFullName;
        }

      return this.form.login 
        && this.form.password 
        && (this.form.password === this.form.passwordRepeat)
        && this.form.fullName;
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