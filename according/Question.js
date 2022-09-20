import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const[showit,setShowit]=useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setShowit(!showit)}>{showit?'-':'+'}</button>
      </header>
     {
      showit && <p>{info}</p>
     }
    </article>
  );
};

export default Question;
