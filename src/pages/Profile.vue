<template>
  <div>
    <div class="profile">
      <ProfileHeader 
        :fullName="fullName"
      />
      <ProfileBody />
      <ProfileFooter />
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileBody from "../components/Profile/ProfileBody.vue";
import ProfileFooter from "../components/Profile/ProfileFooter.vue";
import { mapState } from "vuex";
export default {
  components: { ProfileHeader, ProfileBody, ProfileFooter },
  computed: {
      ...mapState({
          fullName: state => state.profile.fullName,
      })
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
}
</style>