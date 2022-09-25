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
        const newTotal = state.cart.reduce((item) => {
          item.amount * item.price;
        });
        const newAmount = state.cart.reduce((item) => {
          item.amount;
        });
        return {...state,total:newTotal,amount:newAmount}
    }
    return state
}