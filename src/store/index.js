import Vue from 'vue'
import Vuex from 'vuex';
import authModule from '@/store/authModule';
import messageModule from '@/store/messageModule';
import patientModule from '@/store/patientModule';
import {profileModule} from '@/store/profileModule';
import registrationModule from '@/store/registrationModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authModule,
        messageModule,
        patientModule,
        profile: profileModule,
        registrationModule
    }
})