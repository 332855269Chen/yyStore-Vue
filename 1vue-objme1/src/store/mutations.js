import * as types from './types'
let mutations = {
    // [types.VIEW_LOADING]:(state,payload)=>state.loading=payload,



    [types.UPDATE_HOME]:(state,payload)=>{state.home=payload
            // console.log("mutations",typeof(state.home),state.home)
    },
    
    [types.UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,

    // [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,
  
    [types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,
  
    [types.CHECK_USER]:(state,payload)=>state.user=payload,


    //car
     
  [types.ADD_ITEM]:(state,payload)=>{
    state.buycar=payload;  //
  },
  [types.CHANGE_ITEM]:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },



};
export default mutations;