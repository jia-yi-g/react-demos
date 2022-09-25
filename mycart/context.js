import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState ={
  loading: false,
  cart: cartItems,
  total:0,
  amount: 0,
}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)


  const clearCart =()=>{
    dispatch({type: 'CLEAR_CART'})
  }

  const removeItem=(id)=>{
    dispatch({type:'REMOVE_ITEM',id:id})
  }
  const increase=(id)=>{
    dispatch({type:'ADD_ITEM',id:id})
  }
  const decrease = (id) => {
    dispatch({ type: "DELETE_ITEM", id: id });
  };
  useEffect(()=>{
dispatch({type:'TOTAL'});
  },
    [state.cart]
  );
 
  return (
    <AppContext.Provider
      value={{
       ...state,
       clearCart,
       removeItem,
       increase,
       decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
