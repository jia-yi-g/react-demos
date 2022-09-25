import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobal } from "./context";


const Navbar = () => {
  const {closeSide,openSubm,closeSubm,openSide}=useGlobal()
  const displaySubm=(e)=>{
      const page=e.target.textContent
      const temp=e.target.getBoundingClientRect()
      const center=(temp.left+temp.right)/2
      const bottom=temp.bottom - 3
      openSubm(page,{center,bottom})
  }
  //如何设置一个可以滑动的submenu？
  //先通过鼠标悬停事件获取目标nav上标题的位置，用于确定submenu的位置
  //设置location参数，使用useeffect让每次locating变化时submenu跟着变化（内联css）使用useref操作节点
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo"></img>
          <button className="toggle-btn btn" onClick={openSide}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubm} className="link-btn">
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubm}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubm}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sigh in</button>
      </div>
    </nav>
  );
}

export default Navbar
