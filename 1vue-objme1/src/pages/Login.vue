<template>
  <div class="content">
    <router-link tag="div" to="/home"><a class="gohome" href="javaScript:;" style="font:20px/2 '';color:gray;position:absolute;left:10px;top:10px;">返回首页</a></router-link>
    <h1></h1>
    <div class="login-box">
      <p class="lsolid"></p>
      <div class="login">
        <router-link to="/login" style="background:#fe846d;">登录</router-link>
        <span></span>
        <router-link to="/reg">注册</router-link>
      </div>
      <p class="rsolid"></p>
    </div>
    <ul>
      <li class="lifirst">
        <input type="text" v-model="ipt"/>
        <span>帐号</span>
      </li>
      <li>
        <input type="text" v-model="ipt2"/>
        <span>密码</span>
      </li>
      <li v-if="msg" style="font-size:20px;margin-top:18px;">
        {{msg}}
      </li>
    </ul>
    <div class="footbox">
      <input style="cursor:pointer;background:red;" type="button" value="登 录" class="login-btn" @click="login"  />
      <a href="javascript:;" class="tishi">忘记密码？</a>
    </div>
  </div>
</template>
 
<script>
export default {
  data(){
    return {
      ipt:"",
      ipt2:"",
      msg:""
    }
  },
  methods:{
    
    login(){
      // axios({
      //   url:"http://localhost:3000/api/login",
      //   // method:"get",
      //   params:{
      //     username:this.ipt,
      //     password:this.ipt2,
      //     save:true
      //   }
      // }).then(
      //     res=>{
      //       if(res.data.err === 1){
      //         this.msg = res.data.msg
      //       }else{
      //          //1. 跳转同时，路由携带用户数据给user
          
      //          this.$router.push('/user')
              
      //       }
      //     }
      //   )

     this.$store.dispatch('CHECK_USER',{
        username:this.ipt,
        password:this.ipt2
      }).then(
        data=>data.err == 0 ? this.$router.push('/user') : this.msg = data.mess
      )


    }
  }

}
</script>>


<style scoped>
  body{ background:#f2f4f5;}
  .content{max-width:6.4rem; margin:0 auto;}
  .content .fhbtn{ padding-top:0.27rem;}
  .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url() no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
  .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/icon/Logo.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
  .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
  .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
  .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
  .content .login-box{ position:relative;}
  .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
  .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
  .content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
  .content ul li{height:0.95rem; position:relative;}
  .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
  .content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
  .content ul li span{margin-top:12px;width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
  .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
  .content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
  .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
  </style>