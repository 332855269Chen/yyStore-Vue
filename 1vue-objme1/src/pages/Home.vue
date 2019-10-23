<template>
  <div class="home">
      <!-- 轮播图 -->
    <silder></silder>



    <!-- --------------------------bg---------------------------------------------------------------------------- -->
 
    <a href="#" class="bj"><img src="/images/pd/bj.png" alt=""></a>

    <!-- --------------------新品---------------------------------------------------------------------------------- -->
     <div class="top">
       <h3>新品上架</h3>
     </div>

     
  
    <list :list-data="$store.state.home" :data-name="'home'"></list>
    <list2 :list-data="$store.state.home" :data-name="'home'"></list2>

 
  <!-- ------------------------------------------------------------------------------------------------------ -->
  </div>
</template>

<script>
import silder from '../components/silder'  //引入轮播图组件
import list from '../components/list'  //引入轮播图组件
import list2 from '../components/list2'   //引入轮播图组件

import {mapActions,mapState} from 'vuex'
export default {
    data(){ 
      return {
        listData:[],
        column:[]
      }
    },  
    components:{
        silder,list,list2
    },


    // activated(){
    //         axios({
    //      url:'/api/column',
        
    //       params:{_page:1,_limit:10}
    //     }).then(
    //       (res)=>{
    //         this.listData = res.data.data
    //         // console.log(res.data.data)
    //         // console.log(this.$store.state)


    //         setTimeout(()=>{
    //        this.column=res.data.data;
    //           },0) 

    //        }
    
    // )   
    // }, 

 

      // // 使用版本管理 请求 数据  有bug 第一次加载页面 数据无法回来，切换页面后，可以回数据
      activated(){
          this.$store.dispatch('UPDATE_HOME')  
                //对象的遍历 Object.keys(obj)
            // console.log(Object.keys(this.$store.state))
            // console.log(Object.values(this.$store.state)[2])

          // this.listData = Object.values(this.$store.state)[2]
          // this.column =  Object.values(this.$store.state)[2]
     
          // console.log(2,'mounted', this.$store.state, typeof(this.$store.state.home))
             
        },
 

        //测试：
        // beforeDestroy(){
        //   console.log(4,'beforeDestroy',this.$store.state.home,      typeof(this.$store.state.home))
        // },
        // beforeCreate(){
        //   console.log(1,'beforeCreate',this.$store.state.home,      typeof(this.$store.state.home))
        // },
        //   updated: function () {
        //     this.$nextTick(function () {
        //       console.log(3,'updated',this.$store.state.home,      typeof(this.$store.state.home))       
        //     })
        //  }

         
} 
</script>


<style scoped>
  .bj{display:block,} 
  .bj img{width:100%}
  /* --------------列表-------------------------------------------------------------------------------- */
  .top{width:100%;height:0.93rem;position: relative;}
  .top h3{color:#2b577a;line-height:0.93rem;font-size: 20px;position: absolute;left:10px;top:2px}
 
</style>