import Vue from "vue";
import Auth from "@/pages/Auth";
import Messages from "@/pages/Messages";
import Patient from "@/pages/Patient";
import Profile from "@/pages/Profile";
import Registration from "@/pages/Registration";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/messages/:login",
    component: Messages,
  },
  {
    path: "/patient/:login",
    component: Patient,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/registration",
    component: Registration,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
