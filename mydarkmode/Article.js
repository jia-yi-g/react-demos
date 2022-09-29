import React from 'react'
import moment from 'moment'
const Article = ({title,date,length,snippet}) => {
  return <div className="post">
    <h2>{title}</h2>
<div className="post-info">
  <p>{moment(date).format('dddd Do, YYYY')} <span>{length} min read</span></p>
  <p>{snippet}</p>
</div>
  </div>
}
//直接把一个对象，数组渲染进jsx中会出现错误!!比如这里的date对象
export default Article
