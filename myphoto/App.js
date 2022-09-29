import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
//infinite strolling

const clientID=`?client_id=${process.env.REACT_APP_ACCESS_KEY}`
//设置环境变量，并将文件放在gitignore中，防止别人获取key

function App() {
  const [photo,setPhoto]=useState([])
  const [page,setPage]=useState(0)
const [query,setQuery]=useState('')
//photo用于存放照片，page用于存放当前页面数，用于刷新；query用来存放搜索的内容

console.log(query)
  const fetchImage = async () => {
    let url
    const urlPage=`&page=${page}`
    const urlQuery=`&query=${query}`
console.log(urlQuery)



    if(query){
      url= `${searchUrl}${clientID}${urlPage}${urlQuery}`
     // console.log(url);
    }
    else{
      url = `${mainUrl}${clientID}${urlPage}`; 
    }
    
    const response = await fetch(url);
    const data=await response.json()
    if(query){
      
      if(page===1){
        setPhoto(data.results);
      }
      else{
        setPhoto((oldphoto) => {
        return [...oldphoto,...data.results];
      });
    }
    }
    else{
      setPhoto((oldphoto)=>{
        return[...oldphoto,...data]
      })
    }
    
  };



  useEffect(()=>{
    fetchImage()
  },[page])


  const handleSubmit=(e)=>{
    e.preventDefault()
   setPage(1)
   //如果直接调用fetch函数，前一次搜索的结果仍然会存在
  }

useEffect(()=>{
  const event =window.addEventListener('scroll',()=>{
    if((window.innerHeight+window.scrollY)>=document.body.scrollHeight-2
      ){
 setPage((oldpage)=>{
 return oldpage+1
 })
      }
  })
  return ()=>{
    window.removeEventListener('scroll',event)
  }
},[])
//滑到页面最底下时setpage增加1，useeffect中要移除事件监听
//window.innerHeight
//window.scrollY
//document.body.scrollheight

//表单中处理submit的函数一定要作为form的属性！！！！！！！！
  return (
    <div className="section">
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          ></input>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <div className="photos">
        <section className="photos-center">
          {photo.map((item, index) => {
            return <Photo key={index} {...item} />;
          })}
        </section>
      </div>
    </div>
  );

}
export default App
