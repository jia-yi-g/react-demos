import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getlocal=()=>{
  let list=localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem("list"));
  }
  else {
    return []
  }
  //获取localstorage
}
function App() {
  const [lists,setLists]=useState(getlocal())
  const [item,setItem]=useState('')
  const [now,setNow]=useState(-1)
  const [al,setAl]=useState(0)
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setAl(0)
    }, 3000);
    return ()=>clearTimeout(timeout)
  },[al])
useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(lists))
},[lists])
//用于在本地储存数据
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(now>=0){
      // const newlist=lists.slice(0)
      // newlist[now]=item
      //lists.map((ite,index)=>{if(index==now){return item}else{return ite}})
      //改变列表中某项的值也可以用map
      setLists(
        lists.map((ite, index) => {
          if (index == now) {
            return item;
          } else {
            return ite;
          }
        })
      );
      setItem('')
     setAl(2)
    }
    else if(item!=''){
    setLists([...lists,item])
    setItem('')
    setAl(1)
  }
  else {
    setAl(5)
  }
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <Alert al={al} />
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            value={item}
            placeholder="e.g. eggs"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          ></input>
          <button className="submit-btn" type="submit">
            {now < 0 ? "Submit" : "Edit"}
          </button>
        </div>
      </form>
      <List setLists={setLists} lists={lists} setNow={setNow} setAl={setAl} setItem={setItem} />
      <button
        className="clear-btn"
        onClick={() => {
          setLists([]);
          setAl(3);
        }}
      >
        Clear items
      </button>
    </section>
  );
}

export default App
