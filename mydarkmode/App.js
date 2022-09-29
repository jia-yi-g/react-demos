import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

 const getTheme = () => {
   let theme = "dark-theme";
   if (localStorage.getItem("theme")) {
     theme = localStorage.getItem("theme");
   }
   return theme;
 };

function App() {
  const [theme, setTheme] = useState(getTheme());

 
  const toggletheme=()=>{
    if(theme==='dark-theme'){
      setTheme('light-theme')
      return
    }
setTheme('dark-theme')
  }
  useEffect(()=>{
    document.body.className=theme
    localStorage.setItem('theme',theme)
  },[theme])
  
  return <main>
    <div className="nav-center">
      <h1>Overreacted</h1>
      <button className="btn" onClick={toggletheme}>Toggle</button>
    </div>
    <div className="articles">
      {
        data.map((item)=>{
          return <Article {...item}/>
        })
      }
    </div>
  </main>
}

export default App
