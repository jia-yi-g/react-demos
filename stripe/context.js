import React, { useState, useContext } from 'react'
import sublinks from './data'


const Appcontext =React.createContext()
export const AppProvider=({children})=>{
    const [isSidebar,setIsSidebar]=useState(false)
    const [isSubm,setIsSubm]=useState(false)
    const [location,setLoation]=useState({})
const [page,setPage]=useState('')


    const openSide=()=>{
        setIsSidebar(true)
    }
    const closeSide = () => {
      setIsSidebar(false);
    };
    const openSubm = (text,coordinates) => {
        setPage(text)
        setLoation(coordinates)
      setIsSubm(true);
    };
    const closeSubm = () => {
      setIsSubm(false);
    };
    return <Appcontext.Provider value={
        {isSidebar,isSubm,openSide,closeSide,openSubm,closeSubm,location,page}
    }>{children}
    </Appcontext.Provider>

   
}
 export const useGlobal = () => {
   return useContext(Appcontext);
 };
 //自定义hooks
 