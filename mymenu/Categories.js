
import React from 'react';

const Categories = ({filterItems,allcata}) => {
  return (
    <div className="btn-container">
    <button className='filter-btn' onClick={()=>{
      filterItems('all')
    }}>All</button>
{
  allcata.map((cata,index)=>{
    return <button  key={index} className='filter-btn' onClick={()=>{
      filterItems(cata)
    }}>
    {cata}
    </button>
  })
}
      
    </div>
  )
};

export default Categories;
