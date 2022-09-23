import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlbalContext } from './context'

const Sidebar = () => {
  const {isSidebar,closeside}=useGlbalContext()
  return (
    <aside className={isSidebar ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img className="logo" src={logo}></img>
        <button
          className="close-btn"
          onClick={closeside}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            //为甚么这里老是写错！
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
   
  );
}

export default Sidebar
