import React, { useState, useRef, useEffect } from 'react'
import { useGlobal } from './context'
import sublinks from './data'



const Submenu = () => {
  const {isSubm,location,page}=useGlobal()
  const container=useRef(null)
  useEffect(()=>{
    const submenu=container.current
    const {center,bottom}=location;
    submenu.style.left= `${center}px`
    submenu.style.top=`{bottom}px`
  },[location])
  const now=sublinks.find((item)=>item.page==page)
 
  return (
    <aside className={`${isSubm ? "submenu show" : "submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className="submenu-center">
         { now && now.links.map((item) => {
            const { label, icon, url } = item;
            return (
              <a href={url}>
                {icon}
                {label}
              </a>
            );
          })} 
      </div>
    </aside>
  );
}

export default Submenu
