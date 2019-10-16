<template>
  <div class="footer">
      <footer id="" class="ui-footer ui-border-t">
    <ul class="clearfix">
 
 <router-link tag="li" to="/home">  <a href="javascript:;" class="on"><i class="ui-icon-home"></i><p>首页</p></a></router-link>
 <router-link tag="li" to="/search"> <a href="javascript:;"><i class="ui-icon-search" style="font-size:42px;"></i><p>搜索</p></a></router-link>
 <router-link tag="li" to="/shopcart">  <a href="javascript:;"><i class="ui-icon-cart"></i><p>购物车</p></a></router-link>
 <router-link tag="li" to="/user"><a href="javascript:;"><i class="ui-icon-personal"></i><p>我的</p></a></router-link>
      
    </ul>
</footer>
  </div>
</template>




<script>
export default {

}
</script>

<style scoped>
  .ui-footer {
    backface-visibility:hidden;
    background-color:#f4f4f4;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    padding:.2rem 0;
    
}

.ui-footer ul li {
    float:left;
    width:25%;
    text-align:center;
    padding-bottom:0.133333rem;
    color:#333;
}

.ui-footer ul li a{
    color:#333;
    font-size:12px;
}

.ui-footer ul li a i {

    line-height:26px;
    font-size:28px;
}

.ui-footer ul li a:hover {
    color:#fd8000;
}

.ui-footer ul li a i:hover {
    color:#fd8000;
}
.ui-footer ul li a:active {
    background:none;
}
.ui-footer ul li a:link {
    background:none;
}
.ui-footer ul li a:visited {
    background:none;
}
.ui-footer ul li a:hover {
    background:none;
}

</style>