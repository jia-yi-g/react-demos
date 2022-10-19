import { query } from 'express'
import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading:true,
  hits:[],
  query:'react',
  page:'0',
  nbPages:'0',
}

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories=async (url)=>{
    dispatch({type:'SET_LOADING'})
    try{
    const res=await fetch(url)
    const data=await res.json()
    dispatch({type:'SET_STORIES',payload:{hits:data.hits,nbpages:data.nbPages}})
    }
    catch(error){
      console.log(error)
    }
  }

  const removeStory=(id)=>{
    dispatch({type:'REMOVE_STORY',payload:id})
  }
  const searchStory=(sth)=>{
    dispatch({type:'HANDLE_SEARCH',payload:sth})
  }
  const togglePage=(n)=>{
    if(n==='decrease'){
      dispatch({type:'HANDLE_PAGE',payload:-1})
    }
    else{dispatch({ type: "HANDLE_PAGE", payload: 1 });

    }
  }
  useEffect(()=>{
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  },[state.query,state.page])
  return (
    <AppContext.Provider value={{ ...state ,togglePage,searchStory,removeStory}}>{children}</AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
