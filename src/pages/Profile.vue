<template>
  <div>
    <div class="profile">
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
      <ProfileHeader :fullName="fullName" />
      <ProfileBody :patients="patients" :doctor="fullName" />
      <ProfileFooter />
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileBody from "../components/Profile/ProfileBody.vue";
import ProfileFooter from "../components/Profile/ProfileFooter.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { ProfileHeader, ProfileBody, ProfileFooter },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      fullName: (state) => state.profile.fullName,
      patients: (state) => state.profile.patients,
    }),
  },

  methods: {
    ...mapActions({
      getMainInfo: "profile/getMainInformation",
    }),
  },

  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },

  async mounted() {
    this.loading = true;
    await this.getMainInfo();
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
}
</style>