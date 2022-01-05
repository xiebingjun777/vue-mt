// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueRouter from 'vue-router'
import {routerMode} from './config/env'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routers = new VueRouter({
  routes:router,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savePosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savePosition || 0 }
    }
  }
}
)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
var vm = new Vue({
  // el:"#app",
  router:routers,
  // components:{App},
  // template: '<App/>'
}
).$mount('#app')
// console.log(vm.router)