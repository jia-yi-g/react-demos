import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0)
  const {name,image,text,job}=people[index]
  return (
    <section className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className='prev-btn' onClick={()=>{index==0?setIndex(3):setIndex(index-1)}}>
          <FaChevronLeft />
          </button>
          <button className='prev-btn' onClick={()=>{index==3?setIndex(0):setIndex(index+1)}}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={()=>{setIndex(Math.floor(Math.random()*4))}}>suprise!</button>
    </section>
  );
};

export default Review;
