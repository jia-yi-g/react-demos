import React from 'react'
import { REMOVE_STORY } from './actions'

import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading,hits,page}=useGlobalContext()
 if(isLoading){
  return <div className='loading'></div>
 }
 return <section className="stories">
  {hits.map((story)=>{
    const {objectID,title,num_comments,url,points,author}=story

    return <article key={objectID} className='story'>
<h4 className='title'>{title}</h4>
<p className='info'>
{points} points by<span>{author} | </span>{num_comments}comments
</p>
<div>
  <a href={url} className='read-link' target='_blank' rel="noreferrer">read more...</a>
  <button className='remove-btn' onClick={()=>{
    REMOVE_STORY(objectID)
  }}>remove</button>

</div>
    </article>
  })}
 </section>
 
}

export default Stories
