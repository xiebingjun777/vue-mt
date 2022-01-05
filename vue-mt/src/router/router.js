import App from '../App.vue'

const home = r => require.ensure([],()=>r(require('../pages/home/home.vue')),'home')
export default [
    {
      path: '/',
      name: 'home',
      component: App, //顶层路由对应index.html
      children:[
        //地址为空时跳转到home页
        {
          path:"",
          redirect:'/home'
        },
        {
          path:'/home',
          component:home
        }
      ]
    }
  ]

