import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show,setShow]=useState(false)
  const linkscontainref=useRef(null)
  const linksref=useRef(null)
  useEffect(()=>{
    const linkheight=linksref.current.getBoundingClientRect().height
    if(show){
      linkscontainref.current.style.height =`${linkheight}px`
    }
    else{
      linkscontainref.current.style.height='0px'
    }
    //使用useref使展开的高度和当前组件匹配，从links中获得高度，调整container的高度
    //linkscontainref.current.style
  },[show])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button
            className="nav-toggle"
            onClick={() => {
              setShow(!show);
            }}
          >
            <FaBars />
          </button>
        </div>
        


          <div className={`${show ? 'show-container links-container': 'links-container'}`} ref={linkscontainref}>
            <ul className="links" ref={linksref}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
       

        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
    //将link集中储存然后遍历设置，方便多次利用和改变该数据
    //如何实现列表滑动下拉？不用conditional render，而是通过状态控制css样式
  );
}

export default Navbar
