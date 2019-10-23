<template>
  <div class="probox">
    <ul class="prolist">
      <li v-for="(item) of listData" :key="item._id">
        <router-link :to="'/detail/'+item._id+'?dataName=' + dataName ">
          <i><img :src="item.url" /></i>
          <span>{{item.title}}</span>
          <b><label></label>¥{{item.price}}</b>
        </router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['listData','dataName']
}
</script>

<style scoped>
.probox{background:#f2f2f2;}
.prolist{width:100%; display: flex; flex-wrap: wrap; justify-content: space-between;margin-bottom:70px;}
.prolist::after, .prolist:after, .prolist after { clear: both; content: "."; display: block; font-size: 0; height: 0; line-height: 0; visibility: hidden; }
.prolist li{float:left; width:3.1rem; background:#f2f2f2; padding-bottom:8px;}
.prolist li a{display:block; background:#fff;padding-bottom:0.1rem;}
.prolist li a i{display:block;}
.prolist li a i img{display:block; width:100%;}
.prolist li span{display:block; padding:.1rem .1rem 0 .1rem; color:#454545; font-size:.2rem; line-height:18px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; -o-text-overflow: ellipsis; -ms-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }
.prolist li b{display:block; font-weight:normal; font-size:.2rem; padding:0 .1rem; color:#f20c11;  position:relative;line-height:22px;}
.prolist li b label{display:inline-block;color:#878787;font-size:.2rem; position:absolute;right:1rem;}
.pro_title{background:url() no-repeat center center #f2f2f2; padding:.155rem 0 .2165rem 0;text-align:center; background-size:contain;}
.pro_title span{display:inline-block;color:#f20c11;font-size:.25rem;background:#f2f2f2; padding:0 1rem;}
</style>