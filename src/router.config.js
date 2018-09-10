import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import navbar from "./components/navbar.vue";
import home from "./components/home.vue";
import chooseseat from "./components/chooseseat.vue";
import detail from "./components/detail.vue";
import filmcinema from "./components/filmcinema.vue";
import login from "./components/login.vue";
import tickets from "./components/tickets.vue";
import error from "./components/error.vue";


const routes=[
   {path:"/home", component:home},
    {path:"/chooseseat",component:chooseseat},
    {path:"/detail",component:detail},
    {path:"/filmcinema",component:filmcinema},
    {path:"/login",component:login},
    {path:"/tickets",component:tickets},
    {path:"/",redirect:"/home"},
    {path:"*",component:error},
]

export default new VueRouter({
    routes
})