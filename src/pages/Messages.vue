<template>
  <div style="max-height: 10vh">
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
    <div class="header">
      <div class="header__name">Чат</div>
      <button @click="$router.push(`/patient/${$route.params.login}`)">
        Назад
      </button>
    </div>
    <div class="messages">
      <div class="messages__body" v-show="messages.length">
        <v-card
          style="margin-top: 5px"
          v-for="message in messages"
          :key="message.id"
        >
          <v-card-title>{{ message.user }}</v-card-title>
          <v-card-subtitle>{{ message.time }}</v-card-subtitle>
          <v-card-text>{{ message.text }}</v-card-text>
        </v-card>
      </div>
      <div class="messages__none" v-show="!messages.length">
        Сообщений пока нет
      </div>
      <div class="messages__footer">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="message"
                  :append-outer-icon="'mdi-send'"
                  filled
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Сообщение"
                  type="text"
                  @click:append-outer="sendMessage"
                  @keydown.enter.prevent="sendMessage"
                  @click:clear="clearMessage"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    password: "Password",
    show: false,
    message: "",
    marker: true,
    iconIndex: 0,
    loading: false,
  }),

  methods: {
    ...mapActions({
      loadMessages: "message/loadMessages",
      send: "message/sendMessage",
    }),

    async sendMessage() {
      this.loading = true;
      await this.send({
        message: this.message,
        login: this.$route.params.login,
      });
      this.clearMessage();
      this.loading = false;
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
  },

  computed: {
    ...mapState({
      messages: (state) => state.message.messages,
    }),
  },

  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },

  async mounted() {
    this.loading = true;
    await this.loadMessages(this.$route.params.login);
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #423189;
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  &__name {
    color: #fff;
    font-size: 24px;
  }
}

button {
  background-color: #364759;
  color: white;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #ff5252;
  }
}

.messages {
  display: flex;
  flex-direction: column;

  &__body {
    margin-top: 15px;
    border: 1px solid #8a8a8b;
    border-radius: 5px;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
  }

  &__none {
    padding: 20px;
    font-size: 20px;
    min-height: 75vh;
    max-height: 75vh;
    line-height: 75vh;
  }
}
</style>