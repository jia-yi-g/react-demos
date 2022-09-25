import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobal } from './context'

const Sidebar = () => {
  const {isSidebar,closeSide}=useGlobal()
  return <aside className={`${isSidebar ?'sidebar-wrapper show':'sidebar-wrapper'}`}>
<div className="sidebar">
  <button className="close-btn" onClick={closeSide}><FaTimes /></button>
  <article className='sidebar-links'>
  {
    sublinks.map((item)=>{
      const {page,links}=item
      return (
        <div>
          <h4>{page}</h4>
          <div className='sidebar-sublinks'>
            {links.map((item) => {
              const { label, icon, url } = item;
              return (
                  <a href={url}>
                    {icon}
                    {label}
                  </a>
              );
            })}
          </div>
        </div>
      );
    })
  }
  </article>
</div>
  </aside>
}

export default Sidebar
