import axios from "axios";

export const profileModule = {
  namespaced: true,
  state: () => ({
    patients: [],
    fullName: "",
  }),

  mutations: {
    SET_NAME(state, fullName) {
      state.fullName = fullName;
    },

    SET_PATIENTS(state, patients) {
      state.patients = patients;
    },
  },

  actions: {
    async getMainInformation({ commit }) {
      const login = localStorage.getItem("login");
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://walkinghealth.pythonanywhere.com/user/getData?login=" + login,
        {
          headers: {
            CurrentUserLogin: login,
            AuthToken: token,
          },
        }
      );

      const data = response.data;

      if (data.code > 299) {
      } else {
        commit("SET_NAME", data.result.fullname);
        commit("SET_PATIENTS", data.result.patients);
      }
    },
  },
};
