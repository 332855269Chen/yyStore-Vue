  <template>
    <div class="nav">
      <ul>
         <img src="../assets/img/icon/logo1.png" alt="">
        <router-link tag="div" active-class="active" to="/home"><a href="javascript:;" >歪歪商城</a></router-link>

      </ul>
    </div>
  </template>

<style scoped>
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:rgba(247, 64, 31,0.8);}
.nav img{width:30px;height:30px;position: relative;left:-220px;top:-8px;}
.nav ul{width:4.38rem;height:0.93rem; margin:0 auto;}
.nav ul div{width:1.46rem;height:0.6rem; float:left;}
.nav ul div a{ display:block;width:1.46rem;height:0.6rem; line-height:0.93rem; text-align:center; font-size:12px; color:#fff;margin-left:100px}
</style>