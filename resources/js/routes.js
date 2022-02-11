
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Contacts from './components/pages/Contacts.vue';
import Posts from './components/pages/Posts.vue';
const router = new VueRouter({
   made:'history',
   linkExactActiveClass:'active',
   routes:[
     {
     path:'/',
     name:'home',
     component: Home
   },
     {
     path:'/about',
     name:'about',
     component: About
   },
     {
     path:'/contacts',
     name:'contacts',
     component: Contacts
   },
     {
     path:'/blog',
     name:'blog',
     component: Posts
   }
  ]
})

export default router