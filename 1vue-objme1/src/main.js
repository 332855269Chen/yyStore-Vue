

import Vue from 'vue'
//打包时样式错乱，百度说css引入前置，没用
import './assets/css/base.css'
import "./assets/js/font"
import App from './App.vue'

Vue.config.productionTip = false


// import './assets/js/banner'
// import './assets/js/banner-he'



import './plugins/axios';

//全局过滤器的配置
import './filters'

//配置全局animate.css 动画 插件
import 'animate.css'

import store from './plugins/store'

import router from './plugins/router'


//配置服务器地址
Vue.prototype.server = require('./config/server')  //在vue头上配置实例属性，别的地方可以通过this.$server 拿数据


// user数据同步到本地
let local = window.localStorage.getItem('user');

if(local){
  store.commit('CHECK_USER',JSON.parse(local))
}


//安装引入所有 vant ui
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//按需引入，全局注册使用
import {Swipe, SwipeItem,GoodsAction,GoodsActionIcon,GoodsActionButton,Card,Stepper,SwipeCell,Cell, CellGroup,Button,
  SubmitBar,Checkbox, CheckboxGroup,Lazyload,NoticeBar,Loading } from 'vant';

Vue.use(Swipe).use(SwipeItem) .use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Card).use(Stepper).use(Card).use(SwipeCell)
.use(Cell).use(CellGroup).use(Button).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Lazyload).use(NoticeBar).use(Loading )

new Vue({ 
  data:{
    // head:true,
    // foot:true,
    // homeItem:
    
  },
  render: h => h(App), 
  router,
  store
}).$mount('#app')
