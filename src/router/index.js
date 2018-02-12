import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Skill from '../components/skill/skill'
import Introduce from '../components/introduce/introduce'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home   
    },

    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/introduce',
      component: Introduce
    }

  ]
})
