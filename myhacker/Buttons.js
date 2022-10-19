import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const{togglePage,page,nbPage,isLoading}=useGlobalContext()
  return <div className='btn-container' disabled={isLoading}>
<button onClick={()=>{
  togglePage('decrease')
}}>prev</button><p>
  {page}of{nbPage}
</p>
<button onClick={()=>{
  togglePage('increase')
}}>next</button>
  </div>
}

export default Buttons
