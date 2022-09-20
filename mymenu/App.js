import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allcata = [...new Set(items.map((item) => item.category))];
console.log(allcata)

function App() {
  const [menus,setMenus]=useState(items)
  const [cata,setCata]=useState([])
 



const filterItems=(catagory)=>{
  if(catagory=='all'){
    setMenus(items)
    return
  }
  const newItems=items.filter((item)=>
     item.category==catagory
  )
  setMenus(newItems)
}


  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our Menus</h1>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allcata={allcata} />
        <Menu items={menus} />
      </section>
    </main>
  );
}

export default App;
//