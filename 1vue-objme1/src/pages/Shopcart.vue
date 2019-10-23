<template>
  <div class="shopcart">

    
<header class="ui-border-tb" style="padding-bottom:1px;" >
    <div class="ui-c-header clearfix">
            
        <div class="fl ui-c-cartttt"  style="display:flex;">
           <!-- 返回箭 -->
            <i class="ui-icon-return" @click="goback"></i>
              <h2 style='margin-left:130px;font:30px/40px "" ' >购物车</h2>
        </div>

        <div class="fl ui-c-cart" style="display:flex">

          <!-- //复选框 全选 -->
            <!-- 全选 <i class="ui-icon-success ui-icon-cu  quanxuan" style="display:flex;"></i> -->
          
        </div>
    </div>
</header>


<section>
    <div class="list">
      
        <ul> 
          <li class="ui-border-b"
             v-for="item of buycar"
             :key="item._id"
            

            >
              
          
              <!-- ----------------------------------------------- -->
          <!-- <div  style="position:relative">
              <van-card
                  :num="item.number"
                  :price="item.price"
                  :desc="item.des"  
                  :title="item.title"
                  :thumb="item.url"
        
                  origin-price="8888"

            
                > 
                </van-card>
      <van-stepper v-model="item.number" style="position:absolute;right:12px;bottom:6px;"   @plus='changeItem({_id:item._id,num:1})'/>
                  </div>          //单个商品 不同数量的 总价 {{item.price * item.number}}   --> 
                  

<!-- //  <router-link  :to="{ name:'detail', params:{id:item._id}, query:{dataName:dataName} }">  -->

         <van-swipe-cell>

              <van-cell :border="false"  value="" style="border:0;padding:0;background-color:none;"> 
              
                <div  style="position:relative">
                           <!-- 子复选框 -->
                   <!-- <van-checkbox  class="check" checked-color='#fe0604' v-model="item.satus" @change="itemChange()"></van-checkbox> -->

                      <van-card
                          :num="item.number"
                          :price="item.price"
                          :desc="item.des"  
                          :title="item.title"
                          :thumb="item.url"
                          origin-price="8888"   
                        > 
                        
                        </van-card>
                        
              <van-stepper v-model="item.number" style="position:absolute;right:12px;bottom:6px;"   @plus='changeItem({_id:item._id,num:1})' @minus="changeItem({_id:item._id,num:-1})"/>
                  </div>
             
                  </van-cell>

              <template slot="right">
                <van-button square type="danger" text="删除"  style="border-bottom:0;height:120px;line-height:100px;" @click="removeItem({_id:item._id})"/>
                <!-- <van-button square type="primary" text="收藏"/> -->
              </template>
              
         </van-swipe-cell> 

      <!-- //  </router-link> -->

            </li>
        </ul>

         <div class="footer"> 
             <van-submit-bar  :price="cptall*100 "  button-text="提交订单"> 

                  <!-- <van-checkbox  checked-color='#fe0604' @change="change()" v-model="allCheck">全选</van-checkbox> -->

             </van-submit-bar>
         </div>   

    </div>

</section>

  </div>
</template>





<script>

import {mapGetters,mapActions} from 'vuex'
export default {
  
    props:['listData','dataName'],

      data(){
        return {
         value:0,
        //  allCheck: false,
        //  satus:false, 
         
        }
      },
    computed:{
   ...mapGetters(['buycar','cptall','cptnum']),

      // cptall(){
      //       var  all= 0;
      //       this.$store.state.buycar.forEach(function (val, index,arr) {
      //   // console.log('index:'+index+','+'val:'+val) // val是当前元素，index当前元素索引，arr数组
      //   // console.log('shop',arr)
      //   console.log('shop1-1,',index)
      //   console.log('shop1-2,',val)

      //       all =  val.price*val.price 
      // })
      //       console.log(all)
            
      //       console.log('shop2',this.$store.state.buycar)
      //       // console.log(this.$store.state.buycar.price,typeof(this.$store.state.buycar.price))

      
      //       return this.$store.state.buycar.price * this.$store.state.buycar.number
      // }
 
    },
  
   beforeRouteEnter(to,from,next){
    axios({
        url:"/api/user"
    }).then(
      res=>{
        res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next("/login")
        // console.log(res.data.data)
      }
    )
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    ...mapActions(['changeItem','clearBuycar','removeItem' ]),

  },

  // activated(){
  //     // console.log('car',this.$store.state.buycar[0])
  //     // console.log('cptcheck',cptcheck)
  // }

}
</script>

<style scoped>
  .ui-border-tb{margin-top:-60px; }
  .ui-c-cartttt{font:20px/40px "";color:rgb(103, 112, 117);margin-left:10px;margin-top:2px;}
  .ui-c-cart{font:20px/40px "";color:rgb(103, 112, 117);margin-left:10px;margin-top:2px; }

  .ui-p-product{display: flex}
  .list{padding-bottom:100px;}
  .ui-border-b{margin-top:5px;}
  /* .list ul li a{display:flex;justify-content:space-between;}
  .list ul li a img.info-img{display:block; width:106px;height:107px;margin-top:10px;}
  .list ul li a .info{width:414px;font:12px/18px "";text-align: left;font-weight: 400;} */
  .info > span {
    color: rgba(32, 35, 37, 0.6);
    display: block;
    padding-top:5px;
    
  }
  .img-price{margin-left:60px;}
  .info > h3 {color:rgb(103, 112, 117);font-size:14px;}
  .img-price > p {color:rgb(241, 105, 26);font-size:20px;font-weight:200;padding-top:20px;}


  .ui-p-click{display:flex;font-size:23px;color:rgba(32, 35, 37, 0.6);margin-top:10px;}
  .ui-c2{color:rgb(241, 105, 26);}
  
  .ui-c4{margin-top:20px;}

  .check{position:absolute;top:5px;right:5px;z-index:5}
  /* ========================================================= */
/* 
   .footer{display:flex;position:fixed;bottom:0;font:30px/2 '';justify-content:space-between;width:100%;color:#fff}

    .footer .footer-l{height:60px;width:50%;background:#fff;color:grey;font:18px/60px "";}
    .footer .footer-r{height:60px;width:50%;background:rgb(247, 64, 31)} */

    /* .quanxuan:hover{color:rgb(241, 105, 26);} */

</style>