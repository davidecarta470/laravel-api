
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Contacts from './components/pages/Contacts.vue';
import Posts from './components/pages/Posts.vue';
import PostDetail from './components/pages/PostDetail.vue';
import Error404 from './components/pages/Error404.vue';
const router = new VueRouter({
   mode:'history',
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
   },
     {
     path:'/detail/:slug',
     name:'detail',
     component: PostDetail
   },
     {
     path:'/*',
     
     component: Error404
   }
  ]
})

export default router