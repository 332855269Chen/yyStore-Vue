<template>
  <div class="detail">
    <div class="nav">
      <ul >
        <li class="l-btn" @click="goback" > &lt;</li>
      </ul>
    </div>
 
    

     <!-- <img class="info-img" :src="$store.state.detail.url" alt=""> -->
            
    <van-swipe :autoplay='3000'  class="clearfix"  @change="onChange">
        <van-swipe-item> <img :src="$store.state.detail.url" alt="" class="info-img" /></van-swipe-item>
        <van-swipe-item> <img :src="$store.state.detail.url"  alt="" class="info-img" /></van-swipe-item>
        <van-swipe-item> <img :src="$store.state.detail.url" alt="" class="info-img" /></van-swipe-item>
        <van-swipe-item> <img :src="$store.state.detail.url"  alt="" class="info-img" /></van-swipe-item>     
    </van-swipe>

  <div class="custom-indicator" slot="indicator" style="background:gray;color:white;font:14px/2 '';">
    {{ current + 1 }}/4
  </div>

    <div  class="list">
                
                        <div class="info" style='font:16px/18px "";'>

                        <p class="around-other-price price"><span>￥</span> <b>{{$store.state.detail.price}}</b></p>   
                            <h3>{{$store.state.detail.title}}</h3>
                            <span>{{$store.state.detail.content}}</span> 
                     
                        </div> 
        </div>



      <van-notice-bar text="好消息好消息！合约购机3688起,Apple/苹果 iPhone 8 Plus 国行苹果8 国行苹果8 国行苹果8 国行苹果8 国行苹果8" left-icon="volume-o"/>
      

      <img src='../assets/img/icon/detail-0.jpg' alt="" style="width:100%">
      <img src='../assets/img/icon/detail-1.jpg' alt="" style="width:100%">
      <img src='../assets/img/icon/detail-2.jpg' alt="" style="width:100%">
      <img src='../assets/img/icon/detail-3.jpg' alt="" style="width:100%">
        
   
<img v-for="img in imageList" v-lazy="img" style="width:100%" :key='img._id'>
 
<!-- ---------------------------------------底部--------------------------------------------------------- -->
     <div class="footer" style='font:30px/2 "";'>
<!-- 
         <div class="footer-l" @click="addItem($store.state.detail)">加入购物车</div>
         <div class="footer-r">立即购买</div> -->

         <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服"  />
          <router-link tag="div" to="/shopcart"> <van-goods-action-icon icon="cart-o" text="购物车"   :info="cptnum" /> </router-link>
          <van-goods-action-button type="warning" text="加入购物车" class="footer-l" @click="addItem($store.state.detail)" />
          <van-goods-action-button type="danger" text="立即购买"  />
         </van-goods-action>

    </div>   



  </div>
</template>
<script>

  import {mapState,mapActions,mapGetters} from 'vuex';
  import  {UPDATE_HOME}  from '../store/types'

  export default {
    data(){
      return {
        data:{},
        current:0,
        imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        // '../assets/img/icon/detail-0.jpg',
        // '../assets/img/icon/detail-1.jpg',
        // '../assets/img/icon/detail-2.jpg',
        // '../assets/img/icon/detail-3.jpg'
        
      ]

      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      },
      ...mapActions(['addItem']), 
       onChange(index) {
      this.current = index;
    }

    },  
    computed:{...mapState(['home']),
       ...mapGetters(['cptnum']),
    },
 
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

    // console.log('detail',this.$store.state.detail)

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


  .list{padding-bottom:5px;}
  .list{display:flex;cursor:pointer;margin:20px 0;justify-content:center ;}
  .list img.info-img{display:block; width:106px;height:107px;}
  .list .info{width:307px;height:106px;font:12px/18px "";text-align: left;font-weight: 400;}
  .info > span {
    color: rgba(32, 35, 37, 0.6);
    display: block;
    padding-top:5px;
  }
  .info h3{color:rgb(103, 112, 117);font-size:14px;}
  .info p{color:rgb(241, 105, 26);font-size:20px;font-weight:200;padding-top:10px;}

  .van-swipe{ position: relative;}
  .custom-indicator{position:absolute;right:3px;top:12px;z-index:133;border-radius:10px;width:50px;opacity:0.7 ;}

  /* --------底部--------- */

    .footer{display:flex;position:fixed;bottom:0;font:30px/2 '';justify-content:space-between;width:100%;color:#fff}

    /* .footer .footer-l{height:60px;width:50%;background:rgb(255, 166, 0);} */
    /* .footer .footer-r{height:60px;width:50%;background:rgb(247, 64, 31)} */

  </style>