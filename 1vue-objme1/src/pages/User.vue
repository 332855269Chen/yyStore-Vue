<template>
  <div class="user">

      <div class="top">
          <img class="bg" src="/images/pd/user.jpg" alt="">
          
          <img class="icon" src="../assets/img/icon/noimage1.png" alt="" style="width:60px;">
            <h5 style="font:16px/2 '';">
              <a href="javascript:;">{{$store.state.user.data.username}}</a> |
              <a href="javascript:;"  @click="logout">注销</a>
            </h5>  
            
      </div>
      <!-- --------------------------------------------------------------------------------- -->
  <aside>
      <ul style='font:12px/1.5 "";'>
          <li class="ui-border"><i class="ui-icon-history abc " style="font:20px/2 '';"><b style="font:16px/2 '';padding-left:5px;">全部订单</b></i>  </li>
          <li class="ui-border"><i class="ui-icon-like abc"   style="font:20px/2 '';">  <b style="font:16px/2 '';padding-left:5px;">我的优惠</b></i>  </li>
          <li class="ui-border"><i class="ui-icon-wallet abc"  style="font:20px/2 '';"> <b style="font:16px/2 '';padding-left:5px;">我的红包</b></i>  </li>
          <li class="ui-border"><i class="ui-icon-scan abc"  style="font:20px/2 '';">   <b style="font:16px/2 '';padding-left:5px;">我的会员</b></i>  </li>
          <li class="ui-border"><i class="ui-icon-collect abc"  style="font:20px/2 '';"><b style="font:16px/2 '';padding-left:5px;">我的收藏</b></i>  </li>
          <li class="ui-border" @click="shopcart"><i class="ui-icon-cart abc"  style="font:20px/2 '';"><b style="font:16px/2 '';padding-left:5px;">我的购物</b></i> </li>
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
  
  .ui-border{text-align:left;color:rgb(137, 151, 137);width:100%;margin:10px 0;
  display:flex;justify-content:space-between;}
  /* .abc{font:12px/2 "";} */

  /* .fl1{font:18px/18px "";color:rgb(137, 151, 137);width:190px;text-align:left;margin:20px 0} */
</style>