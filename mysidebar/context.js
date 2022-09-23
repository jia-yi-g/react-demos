import React, { useState, useContext } from 'react'

const AppContext=React.createContext()
const AppProvider =({children})=>{
    const [isSidebar,setIsSideBar]=useState(false)
    const [ismodal,setIsmodal] = useState(true);
    const closeside=()=>{
        setIsSideBar(false)
    }
    const openside = () => {
      setIsSideBar(true);
    };
    const closemodal = () => {
      setIsmodal(false);
    };
    const openmodal = () => {
      setIsmodal(true);
    };
    return <AppContext.Provider value={{isSidebar,ismodal,closeside,openside,closemodal,openmodal}}>
        {children}
    </AppContext.Provider>
}
//custom hook
export const useGlbalContext =()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
//使用usecontext和定制hooks，问题，为甚么不能直接传入set函数？