import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState('')
const [error,setError]=useState('false')
const [list,setList]=useState(new Values('#f15015'))

  const handleSubmit =(e)=>{
  e.preventDefault()
try {
  let colors = new Values(color).all(10);
  setList(colors)
} catch (error) {
  setError(true)
}
  
  }
    
  
  return (
    <main>
      <section className="container">
        <h3>Color Generater</h3>
        <form onSubmit={handleSubmit}>
          <input
          type='text'
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
               setColor(e.target.value);
            }}
            className={`${error?'error':null}`}
            //使用模板字符串和error变量设置输入错误时的提示
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
    {
      list.map((color,index)=>{
        return <SingleColor key={index} {...color} index={index}/>
      })
    }
      </section>
    </main>
  );
}

export default App
