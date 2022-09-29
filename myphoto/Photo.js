import React from 'react'

const Photo = ({urls:{regular},
  likes,user:{name,profile_image:{medium},profolio_url}}) => {

  return <article className='photo'>
  <img src={regular}></img>
  <div className="photo-info">
   <div>
    <h4>{name}</h4>
    <p>{likes}likes</p>
   </div>
   <a href={profolio_url}></a>
   <img src={medium}></img>
  </div>
  </article>
}

export default Photo
