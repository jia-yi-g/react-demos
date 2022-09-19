import React, { useState } from 'react';

const Tour = ({id,name,image,info,price,removetour}) => {
  const [readMore,setReadMore]=useState(true)
  //设置state改变文本是否省略

  //const [interest,setInterest]=useState(true)
  //if(!interest){
  //  return null
  //}不用prop-drilling
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 200)}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "read more" : "show less"}
          </button>
        </p>

        <button className="delete-btn" onClick={()=>{removetour(id)}}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
