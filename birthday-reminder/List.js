import React from 'react';
import data from './data';
const List = ({people}) => {
  return (
    <>
      {people.map(
        
        (item)=>{
          const {name,age,id,image}=item
          return (<article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
          </article>) })}
    </>
  );
};

export default List;
