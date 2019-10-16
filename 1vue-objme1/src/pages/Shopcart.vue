<template>
  <div class="shopcart">

    
<header class="ui-border-tb" style="padding-bottom:1px;" >
    <div class="ui-c-header clearfix">
            
        <div class="fl ui-c-cartttt" styles="width:5%" style="display:flex;">
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
              <a href="javascript:;">
                <div class="ui-p-box clearfix">

                    <div class="fl ui-p-choice">
                         <!-- 复选框 -->
                        <!-- <i class="ui-icon-success ui-icon-cu danxuan" style="display:flex;"></i> -->
                    </div>
                    
                    <div class="ui-p-product fl" >
               
                            <img class="info-img" :src="item.url" alt=""> 
                       <div class="img-price">
                             <p>{{item.title}}</p>
                            <div class="ui-p-click ">
                            <div class="ui-c1" @click="changeItem({_id:item._id,num:-1})">-</div>
                            <div class="ui-c2">{{item.number}}</div>
                            <div class="ui-c3" @click="changeItem({_id:item._id,num:1})">+</div>
                    
                           <div class="ui-c4" style="font:18px/50px '';color:red;margin-left:-32px;">￥{{item.price * item.number}} </div>   
                         </div>
                         
                        </div>
                   
                    </div>
                    
                    <div class="info" style='font:14px/18px "";'>
                        <h3>{{item.title}}</h3>
                        <span class="ui-t" style="">{{item.des}}</span>
                       
                    </div>

                    <div class="fr ui-p-delete">
                      <!-- 删除箭 -->
                        <i class="ui-icon-delete"  @click="removeItem({_id:item._id})" ></i>
                    </div>
                </div>
                </a>
            </li>


        </ul>
 

         <div class="footer">
         <div class="footer-l" style='font:18px/60px "";'>
          总金额:{{cptall}} 元
         </div>
         <div class="footer-r" style="font:30px/2 '';">立即购买</div>
    </div>   
    </div>

</section>

  </div>
</template>





<script>

import {mapGetters,mapActions} from 'vuex'
export default {
    computed:{
   ...mapGetters(['buycar','cptall']),

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

    ...mapActions([
    'changeItem','clearBuycar','removeItem'
    ])

  },

  activated(){
    setTimeout(() => {
      //  console.log('shabi',this.$store.state.buycar)
    }, 0);

    // console.log(this.$store.state.buycar)
   
    
  }
}
</script>

<style scoped>
  .ui-border-tb{margin-top:-60px; }
  .ui-c-cartttt{font:20px/40px "";color:rgb(103, 112, 117);margin-left:10px;margin-top:2px;}
  .ui-c-cart{font:20px/40px "";color:rgb(103, 112, 117);margin-left:10px;margin-top:2px; }

  .ui-p-product{display: flex}
  .list{padding-bottom:100px;}
  .list ul li a{display:flex;justify-content:space-between;}
  .list ul li a img.info-img{display:block; width:106px;height:107px;margin-top:10px;}
  .list ul li a .info{width:414px;font:12px/18px "";text-align: left;font-weight: 400;}
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
  /* ========================================================= */

   .footer{display:flex;position:fixed;bottom:0;font:30px/2 '';justify-content:space-between;width:100%;color:#fff}

    .footer .footer-l{height:60px;width:50%;background:#fff;color:grey;font:18px/60px "";}
    .footer .footer-r{height:60px;width:50%;background:rgb(247, 64, 31)}

    /* .quanxuan:hover{color:rgb(241, 105, 26);} */

</style>