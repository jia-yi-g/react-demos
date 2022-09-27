import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import paginate from './Paginate'
import Paginate from './Paginate'
function App() {
  const {data}=useFetch()
  const arr=[1,2,3,4,5,6,7,8,9,10]
  const[page,setPage]=useState(1)
  return (
    <main>
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <div className="button-container">
<div className="followers container">
<Paginate page={page} data={data}/>
</div>

        <button
          className="prev-btn"
          onClick={() => {
            const newPage = page == 1 ? 10 : page + 1;
            setPage(newPage);
          }}
        >
          Prev
        </button>
        {
          arr.map((num) => {
          return <button className={page==num?'active-btn page-btn':'page-btn'} onClick={()=>{
            setPage(num)
          }}>{num}</button>;
        })
        }
        <button
          className="next-btn"
          onClick={() => {
            const newPage = page == 10 ? 1 : page + 1;
            setPage(newPage);
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default App
