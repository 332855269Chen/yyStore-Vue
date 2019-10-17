<template>
  <div class="banner">
    <!-- <ul class="clearfix">

       <li>
        <img src="/images/banner/banner9.png" alt=""/>
       </li>

       <li>
        <img src=" /images/banner/banner7.jpg" alt=""/>
       </li>

       <li>
        <img src="/images/banner/banner8.jpg" alt=""/>
       </li>

       <li>
        <img src=" /images/banner/banner9.jpg" alt=""/>
       </li>

    </ul> -->
       
    <van-swipe :autoplay='2000'  class="clearfix" :show-indicators = true @change="onChange">
        <van-swipe-item> <img src="/images/banner/banner9.png" alt=""/></van-swipe-item>
        <van-swipe-item> <img src=" /images/banner/banner7.jpg" alt=""/></van-swipe-item>
        <van-swipe-item> <img src="/images/banner/banner8.jpg" alt=""/></van-swipe-item>
        <van-swipe-item> <img src=" /images/banner/banner9.jpg" alt=""/></van-swipe-item>     
    </van-swipe>
  <div class="custom-indicator" slot="indicator" style="color:white;font:14px/2 '';">
    {{ current + 1 }}/4
  </div>
  </div>
</template>
<script>

// import $ from 'jquery';
// import Swipe from '../assets/js/swipe.js';

export default {
  data(){
    return {
      current:0
    }
  },
  props:['banner'],
    methods: {
    onChange(index) {
      this.current = index;
    }
  }
  // mounted(){
  //   new Swipe($('.banner')[0],{
  //     auto:2000,
  //     continuous:true,
  //     stopPropation:true,
  //     callback:function (index,element){
  //       $('.banner ol li').removeClass('active');
  //       $('.banner ol li').eq(index).addClass('active');
  //     }
  //   })

  // },
  //  methods: {
  //   onChange(index) {
  //     console.log(index);
  //   }
  // }
}
</script>

<style scoped>

.banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index : 1}
van-swipe-item{width:6.4rem;float:left;position: relative;}
.banner img{width:100%; display:block;height:200px;}

.custom-indicator{position:absolute;right:0;bottom:0;z-index:33;width:40px;border-radius:10px;}

/* .banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);} */
/* .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;} */

/* .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;} */

</style>
