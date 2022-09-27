import React from 'react'

const Follower = ({name,image,url}) => {
  return (
    <div className="card">
      <img src={image} />
      <h4>{name}</h4>
      <a href={url}>
        <button className="btn">View Profile</button>
      </a>
    </div>
  );
}

export default Follower
