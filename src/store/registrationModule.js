import axios from "axios";

export const registrationModule = {
  namespaced: true,
  state: () => ({
    token: "",
    login: "",
  }),

  mutations: {
    registerSuccess(state, user) {
      state.token = user.token;
      state.login = user.login;

      localStorage.setItem("token", user.token);
      localStorage.setItem("login", user.login);
    },

    clear(state) {
      state.token = "";
      state.login = "";
    },
  },

  actions: {
    async registration({ commit }, user) {
      const response = await axios.post(
        "https://walkinghealth.pythonanywhere.com/user/register",
        {
          fullname: user.fullname,
          login: user.login,
          password: user.password,
          doctorLogin: null,
          stepLength: null,
        }
      );

      const data = response.data;

      // console.log(data);

      if (data.code > 299) {
        alert("Ошибка, попробуйте заново");
      } else {
        commit("registerSuccess", {
          token: data.result.AuthToken,
          login: user.login,
        });
      }
    },
  },
};
