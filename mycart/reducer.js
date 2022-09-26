const reducer=(state,action)=>{
    if(action.type=='CLEAR_CART'){
        return{...state,cart:[]}
    }
    if(action.type=='REMOVE_ITEM'){
        const newCart=state.cart.filter(item=>item.id!=action.id)
       
        return {...state,cart:newCart}
    }
    if(action.type=='ADD_ITEM'){
        const temp=state.cart.map(item=>{
            if(action.id==item.id){
                return {...item,amount:item.amount+1}
            }
            return item
        })
return {...state,cart:temp}
    }
    if (action.type == "DELETE_ITEM") {
        const temp = state.cart.map((item) => {
          if (action.id == item.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        return { ...state, cart: temp.filter(item=>item.amount>0) };
    }
    if(action.type=='TOTAL'){
        const newTotal = state.cart.reduce((total,item) => {
           return total+item.amount * item.price;
        },0);
        const newAmount = state.cart.reduce((total,item) => {
           return total+item.amount;
        },0);
        return {...state,total:newTotal,amount:newAmount}
    }
    if(action.type=='LOADING'){
      return {...state,loading:true}
    }
    if(action.type=='FETCH'){
      return {...state,loading:false,cart:action.payload}
    }
    return state
}
export default reducer