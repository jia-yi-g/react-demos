import React, { useState } from 'react';
import data from './data';
function App() {
  const [num,setNum]=useState(0)
  const [show,setShow]=useState(false)
  
  return (
    <main>
      <div className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form" onSubmit={(e) =>{e.preventDefault();setShow(true);} }>

          <label>
            Paragraphs:
            <input
              type="number"
              name="name"
              //value={num}
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
            <button className="btn" type="submit">
              GENERATE
            </button>
          </label>
        </form>
        <Lorem num={num} show={show} />
      </div>
    </main>
  );
}


function Lorem({num,show}) {
    const newData=data.slice(0,num)
  return show && <div className="result">
    {newData.map(item=>
    <p>{item}</p>)}
  </div>
}
//记得加防止默认行为的函数！！！！，input的控制！！！表单中submit按钮！
//虽然input的类型是number但是返回的还是字符
export default App;
