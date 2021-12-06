import Vue from "vue";
import Vuex from "vuex";
import { authModule } from "@/store/authModule";
import { messageModule } from "@/store/messageModule";
import { patientModule } from "@/store/patientModule";
import { profileModule } from "@/store/profileModule";
import { registrationModule } from "@/store/registrationModule";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth: authModule,
    message: messageModule,
    patient: patientModule,
    profile: profileModule,
    registration: registrationModule,
  },
});
