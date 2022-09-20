import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Control from './Control'
import Jobs from './Jobs'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading]=useState(false)
 const[jobs,setJobs]=useState([])
 const [value,setValue]=useState(0)

const fetchingdata=async()=>{
  try{
setLoading(true)
const response=await fetch(url)
const jobs=await response.json()
setJobs(jobs)
setLoading(false)
  }
  catch{
console.log('ERROR')
  }
}
useEffect(fetchingdata,[])



  if(loading==true){
    return <h1 className='loading'>Loading...</h1>
  }


  return (
    <div className="section">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <Control jobs={jobs} setValue={setValue} value={value} />
        <Jobs value={value} jobs={jobs} />
      </div>
    </div>
  );
}








export default App


//app包含调整的按键和job组件，jobs状态用于存储数据，value状态由按键控制，用来决定jobs组件的渲染,还需要用fetch获取数据！
