<template>
  <div style="max-height: 10vh">
    <div class="header">
      <div class="header__name">Чат</div>
      <button @click="$router.push('/profile')">Назад</button>
    </div>
    <div class="messages">
      <div class="messages__body">
          <v-card 
            style="margin-top: 5px"
            v-for="message in messages" 
            :key="message.time"
          >
            <v-card-title>{{ message.user }}</v-card-title>
            <v-card-subtitle>{{ message.time }}</v-card-subtitle>
            <v-card-text>{{ message.text }}</v-card-text>
          </v-card>
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
  export default {
    data: () => ({
      password: 'Password',
      show: false,
      message: 'Hey!',
      marker: true,
      iconIndex: 0,
      messages: [{
        user: 'Иванов Иван Иванович',
        time: '12:30',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod quis nesciunt nisi ipsam vitae. Nam reprehenderit ad nulla harum ab doloribus, cum ipsa excepturi dicta voluptatibus odio, quo itaque!'
      },
      {
        user: 'Иванов Иван Иванович',
        time: '12:31',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod quis nesciunt nisi ipsam vitae. Nam reprehenderit ad nulla harum ab doloribus, cum ipsa excepturi dicta voluptatibus odio, quo itaque!'
      },
      {
        user: 'Иванов Иван Иванович',
        time: '12:32',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod quis nesciunt nisi ipsam vitae. Nam reprehenderit ad nulla harum ab doloribus, cum ipsa excepturi dicta voluptatibus odio, quo itaque!'
      },
      {
        user: 'Иванов Иван Иванович',
        time: '12:33',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod quis nesciunt nisi ipsam vitae. Nam reprehenderit ad nulla harum ab doloribus, cum ipsa excepturi dicta voluptatibus odio, quo itaque!'
      },
      {
        user: 'Иванов Иван Иванович',
        time: '12:34',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod quis nesciunt nisi ipsam vitae. Nam reprehenderit ad nulla harum ab doloribus, cum ipsa excepturi dicta voluptatibus odio, quo itaque!'
      },
      {
        user: 'Иванов Иван Иванович',
        time: '12:35',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quod quis nesciunt nisi ipsam vitae. Nam reprehenderit ad nulla harum ab doloribus, cum ipsa excepturi dicta voluptatibus odio, quo itaque!'
      }]
    }),

    methods: {
      sendMessage () {
        this.messages.unshift({
          user: 'Иванов Сергей Иванович',
          time: new Date().getHours() + ':' + new Date().getMinutes(),
          text: this.message
        })
        this.clearMessage();
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      }
    },
  }
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

    &__body{
      max-height: 79vh;
      overflow: auto;
      display: flex;
      flex-direction: column-reverse;
    }
}
</style>