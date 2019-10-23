<template>
  <div class="search">


        <div class="head">
            
                <input type="text"  v-model="iptSearch"  placeholder="商品名称" style="font:0.25rem/0.43rem '';"  >
            
               <div class="fl" style="width:10%">
                  <i class="ui-icon-search" style="font-size:42px; line-height:32px; color:#999;" @click="search"></i>
              </div>

        </div>
     <!-- ----------------------------------------------------------- -->
        <img  v-show="cptList.length===0"  src="/images/pd/search.jpg" alt="" style="width:100%">

        

      <list2 :list-data="cptList" :data-name="'home'"></list2>


  </div>
</template>




<script>
import list2 from '../components/list2'
export default {
  data(){
    return {
      iptSearch:''
    }
  },
  components:{
    list2
  },
//   created:function(){
//     location.reload()
// },
  methods:{
    search(){
        this.$store.dispatch('UPDATE_HOME')  
    }
  }
  ,
  computed:{
        cptList(){
          
          let result=[];

       this.$store.state.home.forEach((item,index)=>{
       
            if(item.title.indexOf(this.iptSearch) !== -1 || item.content.indexOf(this.iptSearch) !== -1){
              result.push(item)
            }
            
          })
          console.log(result)
          return result;
        }
      }
  
}
</script>

<style scoped>
  .head{width:100%;height:0.53rem;text-align: left;position: relative;background:#f4f4f4;margin-top:-60px}

  .head input{border:0;width:300px;height:0.43rem;font:0.25rem/0.43rem '';color:rgb(24, 23, 23);margin-left:10px;position:absolute;top:3px;padding-left:10px;border-radius:10px;}
  .ui-icon-search{position: absolute;right:90px;top:2px;}


</style>