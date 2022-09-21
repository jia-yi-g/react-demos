import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const [alert,setAlert]=useState(false)
  const bcg=rgb.join(',')
  
  //通过模板字符串加变量来根据state的变化改变网页的样式
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setAlert(false)
    }, 3000)
    return ()=> clearTimeout(timeout)
  },[alert])
  //使提示文字显示3s之后消失
  return <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}
   onClick={
    ()=>{
      setAlert(true)
      navigator.clipboard.writeText(rgbToHex(...rgb));
      //将内容复制到剪贴板
    }
   }>

<p className='percent-value'>{weight}%

</p>
<p className='color-value'>{rgbToHex(...rgb)}</p>
{alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
