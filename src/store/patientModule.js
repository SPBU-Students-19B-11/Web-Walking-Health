import axios from "axios";

export const patientModule = {
  namespaced: true,

  state: () => ({
    activity: [],
    name: "",
    show: false,
    datesOfActivity: [],
    acceleration: [],
    speeds: [],
    distances: [],
    loading: false,
  }),

  mutations: {
    SET_PROPS(state) {
      state.loading = true;
      state.acceleration = state.activity.map((event) => {
        return [new Date(event.timestamp), event.acceleration.toFixed(2)];
      });

      state.speeds = state.activity.map((event) => {
        return [new Date(event.timestamp), event.speed.toFixed(2)];
      });

      state.distances = state.activity.map((event) => {
        return [new Date(event.timestamp), event.distance.toFixed(2)];
      });
      state.loading = false;
    },

    SET_ACTIVITY(state, activity) {
      state.activity = activity;
    },

    SET_NAME(state, name) {
      state.name = name;
    },

    SET_SHOW(state, show) {
      state.show = show;
    },

    SET_DATES(state, dates) {
      state.datesOfActivity = dates.map((date) => {
        return date.split(".").reverse().join("-");
      });
    },

    SET_LOADING(state, value) {
      state.loading = value;
    },
  },

  actions: {
    async getInformationAboutPatient({ commit }, query) {
      commit("SET_LOADING", true);
      const response = await axios.get(
        `https://walkinghealth.pythonanywhere.com/medical/getData?PatientLogin=${query.patientLogin}&date=${query.date}`,
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
      } else if (data.code === 204) {
        commit("SET_SHOW", false);
        commit("SET_NAME", data.result.patientFullname);
      } else {
        commit("SET_SHOW", true);
        commit("SET_ACTIVITY", data.result.data);
        commit("SET_NAME", data.result.patientFullname); // Изменить на реальное имя
        commit("SET_PROPS");
      }

      commit("SET_LOADING", false);

      // commit("SET_NAME", query.patientLogin);
    },

    async getDatesOfActivity({ commit }, login) {
      commit("SET_LOADING", true);
      const response = await axios.get(
        `https://walkinghealth.pythonanywhere.com/medical/getDates`,
        {
          headers: {
            CurrentUserLogin: login,
            AuthToken: localStorage.getItem("token"),
          },
        }
      );

      const data = response.data;

      console.log(data);
      if (data.code > 299) {
      } else {
        commit("SET_DATES", data.result);
      }
      commit("SET_LOADING", false);
    },
  },
};
