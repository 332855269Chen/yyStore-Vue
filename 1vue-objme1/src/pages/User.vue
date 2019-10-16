<template>
  <div class="user">

      <div class="top">
          <img class="bg" src="/images/pd/user.jpg" alt="">
          
          <img class="icon" src="../assets/img/icon/noimage.png" alt="">
            <h5 style="font:16px/2 '';">
              <a href="javascript:;">{{$store.state.user.data.username}}</a> |
              <a href="javascript:;"  @click="logout">注销</a>
            </h5>  
            
      </div>
      <!-- --------------------------------------------------------------------------------- -->
  <aside>
      <ul style='font:22px/2 "";'>
          <li class="ui-border-b"><i class="ui-icon-history abc ">全部订单</i> <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-like abc">我的优惠</i> <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-wallet abc">我的红包</i>  <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-scan abc">我的会员</i>  <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-collect abc">我的收藏</i>  <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b" @click="shopcart"><i class="ui-icon-cart abc">我的购物</i>  <i class="ui-icon-next fr"></i> </li>
      </ul>
  </aside>


  </div>
</template>




<script>

import store from '../plugins/store'

export default {
       data(){
    return {
      user:{}
    }
  },
    //非store版本 写法
  // beforeRouteEnter(to,from,next){
  //   axios({
  //       url:"http://localhost:3000/api/user"
  //   }).then(
  //     res=>{
  //       res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next("/login")
  //       // console.log(res.data.data.username)
  //     }
  //   )
  // },
  // methods:{
  //   logout(){
  //       axios({
  //           url:"http://localhost:3000/api/logout",
  //           method:"delete"
  //         }).then(
  //           res=>{
  //             // console.log(res)
  //           this.$router.push("/login")
  //           }
            
  //         )
  //    }
  // }
      
    beforeRouteEnter(to,from,next){
    // store.state.$store.state.user.data.err==0 ? next(_this=>_this.user=store.state.user) : next('/login')
    store.state.user.err==0 ? next() : next('/login')
  },
  methods:{
    logout(){
      //76行 处，注销会报错
      axios({
        url:'/api/logout',
        method:'delete'
      }).then(
        res=>{
          if(res.data.err===0){
            this.$router.push('/home')
            
            this.$store.commit('CHECK_USER',{
              err:1,
              msg:'未登录'
            })
            window.localStorage.removeItem('user')
          }
        }
      )

    },
    shopcart(){
       this.$router.push('/shopcart')
    }
  }


  
}
</script>

<style scoped>
  .top{position: relative;margin-top:-60px;}
  .top img.bg{width:100%;height:2.64rem}
  .top img.icon{width:60px;height:60px;border-radius:50%;position:absolute;left:10px;top:20px;}
  .top h5{font:16px/2 "";color:#fff;position: absolute;left:85px;top:20px;}
  .top h5 a{color:#fff}
  
  .ui-border-b{text-align:left;color:rgb(137, 151, 137);width:100%;text-align:left;margin:20px 0;
  display:flex;justify-content:space-between;   border-bottom:1px solid gray}
  .abc{font:22px/2 "";}

  /* .fl1{font:18px/18px "";color:rgb(137, 151, 137);width:190px;text-align:left;margin:20px 0} */
</style>