import * as types from './types';

export default {

  [types.VIEW_LOADING]:({state,commit},payload)=>{
    //校验payload的类型
    commit(types.VIEW_LOADING,payload)
  },



//   [types.UPDATE_BANNER]:({state,commit},payload)=>{
//     //校验payload的类型
//     axios({
//       url:'/api/banner',
//       params:{_page:1,_limit:3}
//     }).then(
//       res=>commit(types.UPDATE_BANNER,res.data.data)
//     )
//   },


  [types.UPDATE_HOME]:({state,commit},payload)=>{
    //校验payload的类型
    axios({
      url:'/api/column',
      params:{_page:1,_limit:7}
      
    }).then(
      res=>{commit(types.UPDATE_HOME,...[res.data.data])
        // console.log("actions",res.data.data)
      }
    )
  },


  [types.UPDATE_FOLLOW]:({state,commit},payload)=>{
    //校验payload的类型
    axios({
      url:'/api/follow',
      params:{_page:1,_limit:8}
    }).then(
      res=>commit(types.UPDATE_FOLLOW,res.data.data)
    )
  },

  //我的detail
  [types.UPDATE_DETAIL]:({state,commit},{dataName,id})=>{
    //校验payload的类型
    axios({
      url:`/api/${dataName}/${id}`
    }).then(
      res=>{
        commit(types.UPDATE_DETAIL,res.data.data)
        // console.log(res.data.data)
      }
    )
  },

  [types.CHECK_USER]:({state,commit},{username,password})=>{
     
    return axios({
      url:'/api/login',
      method:'get',
      params:{
        username,password,
        save:true
      }
    }).then(
      res=>{
        commit(types.CHECK_USER,res.data);//同步1
        localStorage.setItem('user',JSON.stringify(res.data))//同步2
        // console.log(res.data)
        return {
          mess:res.data.msg,
          err:res.data.err
        }
      }
    )
  },

    //car

  addItem:({commit,state},payload)=>{ 
    // console.log(payload,state)
    
    //添到数据库   解决了新增number是需要点击之后才会有的，所以一开始拿不到，可以用延时器 ，等数据拿到 异步获取
    // setTimeout(() => {

      // 兜库
      axios({
        url:'/api/follow',
        params:{_page:1,_limit:100}
        
      }).then(
        res=>{
           let arr2 = []
           let arr1 = []
           res.data.data.forEach((item,index,array)=>{
             arr2.push(array[index].userDetail.goodsid)
             arr1.push(array[index].userDetail.number)
        })
        if( arr2.indexOf(payload._id) == -1 ){   //indexOf == -1说明不存在
          axios({
            url:`/api/add/?num=${payload.number}&_id=${payload._id}`
          }).then(
            res=>{ 
               console.log("不存在，可插入")
            }
          )
        }else{
              
        }
         
        
     }
    )
     



    let arr=[...state.buycar];

    let find=false;

    arr.forEach((item,index)=>{
      if(item._id==payload._id){ 
        item.number++;//数量递增

        find=true;
        
      }
    });
    if(!find) {
      payload.number=1;//数量
      payload.check = true
      arr.push(payload);
    }
    // commit(types.ADD_ITEM,[...state.buycar])
    commit(types.ADD_ITEM,arr)
  },

  
  changeItem:({commit,state},payload)=>{
    // [...state.buycar]
    // {....state}
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit(types.CHANGE_ITEM,[...state.buycar])
    // commit(types.CHANGE_ITEM,state)  ×
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
    // commit(types.REMOVE_ITEM,state.buycar);
  },
  clearBuycar:({commit,state})=>{
    commit(types.CLEAR_BUYCAR,[]);
  }

}