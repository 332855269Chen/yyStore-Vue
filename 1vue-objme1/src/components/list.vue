<template>
    <div class="list">

       
         <ul>
            <li 
            v-for="(item) of listData"
            :key="item._id"
            >

              <a href="javascript:;">
                   <!-- <router-link :to="'/detail/'+item._id+'?dataName=' + 'column' ">  -->
                   <router-link  :to="{ name:'detail', params:{id:item._id}, query:{dataName:dataName} }"> 

                        <img class="info-img" :src="item.url" alt="">
                        <div class="info" style="font:12px/18px '';">
                            <h3>{{item.title}}</h3>
                            <span>{{item.content}}</span> 
                            <p class="around-other-price price"><span>￥</span> <b>{{item.price}}</b></p>   
                        </div>
                    </router-link>
              </a>
              
            </li>

          </ul>
      </div>
</template>




<script scoped>
export default {
         props:['listData','dataName'],
     
}
</script>

<style scoped>
  .list{padding-bottom:100px;}
  .list ul li a{display:flex;cursor:pointer;margin:20px 0;}
  .list ul li a img.info-img{display:block; width:106px;height:107px;}
  .list ul li a .info{width:307px;height:106px;font:12px/18px "";text-align: left;font-weight: 400;}
  .info > span {
    color: rgba(32, 35, 37, 0.6);
    display: block;
    padding-top:5px;
  }
  .info > h3 {color:rgb(103, 112, 117);font-size:14px;}
  .info > p {color:rgb(241, 105, 26);font-size:20px;font-weight:200;padding-top:10px;}
</style>