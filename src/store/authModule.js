import axios from "axios";

export const authModule = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem("token") || "",
    login: localStorage.getItem("login") || "",
  }),

  mutations: {
    auth_success(state, user) {
      state.token = user.token;
      state.login = user.login;

      localStorage.setItem("token", user.token);
      localStorage.setItem("login", user.login);
    },
    logout(state) {
      state.token = "";
      state.login = "";

      localStorage.removeItem("token");
      localStorage.removeItem("login");
    },
  },
  actions: {
    async login({ commit }, user) {
      const response = await axios.post(
        "https://walkinghealth.pythonanywhere.com/user/login",
        {
          login: user.login,
          password: user.password,
        }
      );

      const data = response.data;

      console.log(data);

      if (data.code > 299) {
      } else if (data.result.isDoctor === true) {
        commit("auth_success", {
          token: data.result.AuthToken,
          login: user.login,
        });
      }
    },
  },
};
