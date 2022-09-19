import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(false);
  const [tours,setTours]=useState([])
  



  //在加载和不加载时显示不同的页面
const fetchingTours=async()=>{

  try {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false)
  } catch (error) {
    console.log('ERROR')
  }
  
}
//使用fetch api获得数据，并传入state
useEffect(()=>{
  fetchingTours()
},[])
const removeTour = (id) => {
  const newTour = tours.filter((item) => item.id != id);
  setTours(newTour);
};

  if(loading){
    return <main>
      <Loading />
    </main>
  }
 if(tours.length==0){
  return(
    <main>
      <h4>no tours!</h4>
      <button className='btn' onClick={fetchingTours}>refresh</button>
    </main>
  )
 }

return (<main>
 
    <Tours tours={tours}  removeTour={removeTour}/>
  </main>)
}

export default App
