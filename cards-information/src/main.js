import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Main from './components/Main.vue'
import CardsContainer from './components/CardsContainer.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/cards',
      component: CardsContainer
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
