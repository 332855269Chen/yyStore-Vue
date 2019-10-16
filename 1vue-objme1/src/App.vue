<template>
  <div id="app">
    <Header v-show="$store.state.head"></Header>

   <transition
		enter-active-class = "animated bounceInRight"
   >  
   <!-- //<keep-alive>的作用就是 记录缓存 节省性能  同时也会造成一些问题,因为之前的页面从来都没有被卸载过-->
      <keep-alive
      :exclude="['user']"
      > 

        <router-view></router-view>
        
      </keep-alive>

   </transition>

    <Footer v-show="$store.state.foot"></Footer>
     
  </div>
</template>

<script>

import Header from  './components/Header'
import Footer from  './components/Footer'
 
export default {
  name: 'app',
  components: {
    Header,Footer
  },
   methods:{ 
    checkPath(path){//路由检测
      // console.log('path',path);
      if(/home|follow|column/.test(path)){
        this.$store.state.head=true;
        this.$store.state.foot=true;
      }
      if(/user|search/.test(path)){
        this.$store.state.head=false;
        this.$store.state.foot=true;
      }
      if(/login|reg|detail|shopcart/.test(path)){
        this.$store.state.head=false;
        this.$store.state.foot=false;
      }
    }
  },
  watch:{
    $route:{
      handler(current,prev){
        // current.path==/home|/follow|/colukn|/detail/23423234
        this.checkPath(current.path)
      },
      immediate:true,
      deep:true
    }
  }
}
</script>



<style scoped>
#app{
  /* font-family:  "Hiragino Sans GB"; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
