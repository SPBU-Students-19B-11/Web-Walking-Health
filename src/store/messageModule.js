import axios from "axios";

export const messageModule = {
  namespaced: true,
  state: () => ({
    messages: [],
    name: "",
    currentId: 1,
  }),

  getters: {},

  mutations: {
    SET_MESSAGES(state, messages) {
      state.messages = messages.map((message) => {
        const messageRes = {};
        messageRes.user = state.name; // Имя исправить

        const date = new Date(message.timestamp * 1000);

        const dateStr = `${date.getDate() < 10 ? 0 : ""}${date.getDate()}.${
          date.getMonth() < 10 ? 0 : ""
        }${date.getMonth() + 1}.${date.getFullYear()} ${
          date.getHours() < 10 ? 0 : ""
        }${date.getHours()}:${
          date.getMinutes() < 10 ? 0 : ""
        }${date.getMinutes()}`;

        messageRes.time = dateStr;

        messageRes.text = message.message;

        messageRes.id = state.currentId++;

        return messageRes;
      });

      state.messages = state.messages.reverse();
    },

    ADD_MESSAGE(state, message) {
      const messageRes = {};
      messageRes.user = state.name; // Имя исправить

      const date = new Date(message.timestamp * 1000);

      const dateStr = `${date.getDate() < 10 ? 0 : ""}${date.getDate()}.${
        date.getMonth() < 10 ? 0 : ""
      }${date.getMonth() + 1}.${date.getFullYear()} ${
        date.getHours() < 10 ? 0 : ""
      }${date.getHours()}:${
        date.getMinutes() < 10 ? 0 : ""
      }${date.getMinutes()}`;

      messageRes.time = dateStr;

      messageRes.text = message.message;

      messageRes.id = state.currentId++;

      state.messages.unshift(messageRes);
    },

    SET_NAME(state, name) {
      state.name = name;
    },
  },

  actions: {
    async loadMessages({ commit }, login) {
      const url = `https://walkinghealth.pythonanywhere.com/medical/getMessages?PatientLogin=${login}`;

      const response = await axios.get(url, {
        headers: {
          CurrentUserLogin: localStorage.getItem("login"),
          AuthToken: localStorage.getItem("token"),
        },
      });

      const data = response.data;
      console.log(data);

      if (data.code > 299) {
      } else {
        commit("SET_NAME", data.result.doctorFullname);
        commit("SET_MESSAGES", data.result.messages);
      }
    },

    async sendMessage({ commit }, messageInfo) {
      const url = `https://walkinghealth.pythonanywhere.com/medical/sendMessage`;

      const response = await axios.post(
        url,
        {
          message: messageInfo.message,
          PatientLogin: messageInfo.login,
        },
        {
          headers: {
            CurrentUserLogin: localStorage.getItem("login"),
            AuthToken: localStorage.getItem("token"),
          },
        }
      );

      const data = response.data;

      console.log(data);

      if (data.code > 299) {
      } else {
        commit("ADD_MESSAGE", data.result);
      }
    },
  },
};
