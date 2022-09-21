import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
const[person,setPerson]=useState(data)
const [index,setIndex]=useState(0)

useEffect(()=>{
  let silder= setInterval(() => {
    if(index==person.length-1){
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
  }, 3000);
  return(()=> clearInterval(silder))
  
},[index])

//使用use effect和setintercal 实现自动轮播效果


  return (
    <main>
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {person.map((item,itemindex) => {
          const { id, image, name, title, quote } = item;
          let position='nextSlide'
          if(index===itemindex){
            position = 'activeSlide';
          }
          if(itemindex==(index-1)||(index==0 && itemindex==person.length-1)){
            position='lastSlide'
          }
          return (
            <article key={id} className={position}>
              <img className="person-img" src={image}></img>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}



         <button className="prev" onClick={()=>{
          if(index==0){
            setIndex(person.length-1)
          }
          else{setIndex(index-1)}
          }}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=>{
          if (index == person.length-1) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
        }}>
          <FiChevronRight /> 
          </button>
        
      </div>
    </main>
  );
}

export default App;
//实现轮播效果，设置一个index 状态（可以通过按钮控制）通过每一个slider的key值与index的比对，改变slider位置和可见度的变化