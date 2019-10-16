<template>
  <div class="detail">
    <div class="nav" >
      <ul>
        <li class="l-btn" @click="goback"> &lt;</li>
      </ul>
    </div>
 
    <div class="content" v-if="$store.state.detail._id">                                  <!-- data.detail.auth_icon -->
      <div class="header clear"><h2>
        <!-- <img width="40" :src="'http://121.196.198.11:3000'  +  '/upload/noimage.png' " alt=""/> -->
        </h2><p></p></div>
      <div class="cont">
        <h3>{{$store.state.detail.title}}/{{9|fillzero}}</h3> 
        <!-- <div class="time"><p>{{data.time|date}}<span><img src="" alt=""/></span></p></div> -->
        <div class="text-box" v-html="$store.state.detail.content"></div>
      </div>
    </div>
     <img class="info-img" :src="$store.state.detail.url" alt="">
    <div  class="list">
                
                        <div class="info" style='font:16px/18px "";'>
                            <h3>{{$store.state.detail.title}}</h3>
                            <span>{{$store.state.detail.content}}</span> 
                            <p class="around-other-price price"><span>￥</span> <b>{{$store.state.detail.price}}</b></p>   
         </div> 
        </div>

<!-- ---------------------------------------底部--------------------------------------------------------- -->
     <div class="footer" style='font:30px/2 "";'>
         <div class="footer-l" @click="addItem($store.state.detail)">加入购物车</div>
         <div class="footer-r">立即购买</div>
    </div>   

  </div>
</template>
<script>

  import {mapState,mapActions} from 'vuex';
  import  {UPDATE_HOME}  from '../store/types'

  export default {
    data(){
      return {
        data:{},

      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      },
      ...mapActions(['addItem']), 

    },  
    computed:mapState(['home']),
 
    props:["id",'dataName'],
    activated(){
      // let id = this.$route.params.id;

      // let dataName = this.$route.query.dataName;
      
      this.$store.dispatch({type:UPDATE_HOME})


    this.$store.state.head = false
    this.$store.state.foot = false
   

      // axios({
      //   url:`http://localhost:3000/api/${dataName}/${id}`
      // }).then(
      //   res=>{
      //       this.data=res.data.data
      //     // console.log("detail的数据",res)
      //    // console.log(res.data.data)
      //   }
      // )

   
    let id = this.id;
    let dataName = this.dataName;
       console.log(id,dataName)

    this.$store.dispatch('UPDATE_DETAIL',{id,dataName})

    


    }
  }
</script>

<style scoped>
  html,body{ overflow-x: hidden; }
  .nav{width:100%; position:fixed;top:0;left:0; background:#fff; z-index:99;}
  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.005rem; margin:0 auto;}
  .nav ul li{font-size:50px;width:0.29rem;height:0.31rem; background:url() no-repeat 0 0; background-size:100%; margin:0 0 0 0.18rem;color:rgb(150, 162, 168)}

  .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;margin-top:-10px;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .header h2{ float:left; margin-right:0.18rem;}
  .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}

  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{ float:left;position:relative;}
  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
  .time span img{width:100%;height:100%;}

  .cont .text-box{ font-size:0.25rem;}
  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}



          /* ---------------------------------------------------------------------------------------------------- */


  .list{padding-bottom:80px;}
  .list{display:flex;cursor:pointer;margin:20px 0;justify-content:center ;}
  .list img.info-img{display:block; width:106px;height:107px;}
  .list .info{width:307px;height:106px;font:12px/18px "";text-align: left;font-weight: 400;}
  .info > span {
    color: rgba(32, 35, 37, 0.6);
    display: block;
    padding-top:5px;
  }
  .info > h3 {color:rgb(103, 112, 117);font-size:14px;}
  .info > p {color:rgb(241, 105, 26);font-size:20px;font-weight:200;padding-top:10px;}

  /* --------底部--------- */

    .footer{display:flex;position:fixed;bottom:0;font:30px/2 '';justify-content:space-between;width:100%;color:#fff}

    .footer .footer-l{height:60px;width:50%;background:rgb(255, 166, 0);}
    .footer .footer-r{height:60px;width:50%;background:rgb(247, 64, 31)}

  </style>