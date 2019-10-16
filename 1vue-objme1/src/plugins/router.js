import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue'
// import Shopcart from '../pages/Shopcart.vue'
// import Search from '../pages/Search.vue'
let Search  = () => import(/* webpackChunkName: "sou" */  '../pages/Search.vue') //在import里的注释 只有webpack 能解析

// import User from '../pages/User.vue'
let User  = () => import(/* webpackChunkName: "sou" */  '../pages/User.vue')  //在分片打包命名时，多个组件命名为一个组名 同名会拆到一个块，可减少请求次数

import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
// import Error from '../pages/Error.vue'


let routes=[
  {path:'/Home',component:Home},
  // {path:'/Shopcart',component:Shopcart},
  {path:'/Shopcart',component:(response)=>{require(['../pages/Shopcart.vue'],response)}},
  {path:'/Search',component:Search},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/Reg',component:Reg},
  // {path:'/Detail/:id',component:Detail,name:'detail'},
  {path:'/Detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,...route.query})},
  // {path:'/Detail/:id',component:Detail,name:'detail',props:true},
  {path:'/',redirect:'/home'},
  // {path:'*',component:Error},

];

let router = new VueRouter({
  routes,
  //滚动 每次回到初始位置 距离顶部为 y:0
	scrollBehavior(to,from,savedPosition){
		return { x: 0, y:0 }//对于所有路由导航，简单地让页面滚动到顶部
  }
  // ,
  //  mode: 'history'
})

export default router