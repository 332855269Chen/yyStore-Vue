export default {
  buycar:(state)=>state.buycar,

  cptall:(state)=>{
             
              var all = 0
             for(let i = 0 ;i<state.buycar.length;i++){

              all +=  state.buycar[i].number * state.buycar[i].price
              
             }
                    
            return  all
             
       
  },
  cptnum(state){
    var number1 = 0
    for(let i = 0 ;i<state.buycar.length;i++){

      number1 +=  state.buycar[i].number

    }
           
   return  number1 
  //  console.log(number1)
  }


}